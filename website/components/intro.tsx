'use client';
import {useEffect,useRef} from 'react';
/** An isolated single-file cinematic intro; the main website remains native React. */
export function Intro(){
 const frame=useRef<HTMLIFrameElement>(null);
 useEffect(()=>{
  let userMoved=!!window.location.hash;
  const manual=()=>{userMoved=true};
  const key=(e:KeyboardEvent)=>{if(['PageDown','PageUp','ArrowDown','ArrowUp',' ','End','Home','Tab'].includes(e.key))manual()};
  const message=(e:MessageEvent)=>{
   if(e.origin!==window.location.origin||e.source!==frame.current?.contentWindow)return;
   if(e.data?.type==='losspacket:intro-manual'){userMoved=true;return;}
   const explicit=e.data?.type==='losspacket:intro-continue';
   if(!explicit&&(e.data?.type!=='losspacket:intro-ended'||userMoved||window.scrollY>24||document.hidden||matchMedia('(prefers-reduced-motion: reduce)').matches))return;
   userMoved=true;
   const hero=document.getElementById('home-hero'),header=document.querySelector('.site-header');
   if(hero)window.scrollTo({top:window.scrollY+hero.getBoundingClientRect().top-(header?.getBoundingClientRect().height||0),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  };
  window.addEventListener('message',message);window.addEventListener('wheel',manual,{passive:true});window.addEventListener('touchstart',manual,{passive:true});window.addEventListener('keydown',key);
  const observer=new IntersectionObserver(([entry])=>frame.current?.contentWindow?.postMessage({type:entry.isIntersecting?'losspacket:intro-play':'losspacket:intro-pause'},window.location.origin),{threshold:.05});if(frame.current)observer.observe(frame.current);
  return()=>{window.removeEventListener('message',message);window.removeEventListener('wheel',manual);window.removeEventListener('touchstart',manual);window.removeEventListener('keydown',key);observer.disconnect()};
 },[]);
 return <section id="intro" className="cinematic-intro" aria-label="LossPacket cinematic introduction"><iframe ref={frame} src="/intro/index.html" title="LossPacket — Every source. A clearer next step." allow="autoplay"/></section>;
}
