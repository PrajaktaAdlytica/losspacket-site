'use client';
import {useEffect,useRef} from 'react';
import {useScroll,useMotionValueEvent} from 'motion/react';
import {revealFrame} from '@/lib/scroll-reveal';

// Animate editorial groups, never nested live controls or the pinned role story.
const targets=[
 '[data-scroll-reveal]', '.research-question>.container>*',
 '.module-detail>div','.module-detail>ul','.module-intake>*',
 '.step-columns>div','.module-example','.resource-card','.source-reference',
 '.form-layout>div:first-child','.form-layout>form','.access-card>*',
 '.signin-layout>div','.narrow>*','.faq-section>h2','.faq-item','.closing-card','.page-hero-art',
 '.footer-top>*','.footer-links>div','.footer-bottom>*'
].join(',');

export function ScrollChoreography({pathname,still}:{pathname:string;still:boolean}){
 const {scrollY}=useScroll();
 // Each effect owns and restores the inline properties it changes.
 const requestFrame=useRef<()=>void>(()=>{});
 useMotionValueEvent(scrollY,'change',()=>requestFrame.current());
 useEffect(()=>{
  const candidates=Array.from(document.querySelectorAll<HTMLElement>(targets)).filter(el=>!el.closest('.audience-section,.demo-page,.site-header'));
  const nodes=candidates.filter(el=>!candidates.some(parent=>parent!==el&&parent.contains(el)));
  const originals=nodes.map(el=>({el,translate:el.style.translate,opacity:el.style.opacity}));
  if(still)return;
  let frame=0;
  const render=()=>{
   frame=0;if(document.hidden)return;
   const height=window.innerHeight;const atEnd=window.scrollY+height>=document.documentElement.scrollHeight-2;const distance=window.innerWidth<761?24:64;
   // Batch layout reads before writes to avoid per-element layout thrashing.
   const positions=nodes.map(el=>el.getBoundingClientRect());
   nodes.forEach((el,i)=>{
    const rect=positions[i];const focused=el.contains(document.activeElement);
    const value=(focused||(atEnd&&rect.top<height&&rect.bottom>0))?{x:0,opacity:1}:revealFrame(rect.top,rect.bottom,height,i,distance);
    el.style.translate=`${value.x.toFixed(2)}px 0`;
    el.style.opacity=String(value.opacity);
    el.dataset.scrollStage=value.opacity>.99?'reading':'transition';
   });
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(render);};
  requestFrame.current=schedule;
  const resize=new ResizeObserver(schedule);nodes.forEach(el=>resize.observe(el));
  window.addEventListener('resize',schedule);document.addEventListener('focusin',schedule);document.addEventListener('focusout',schedule);document.addEventListener('visibilitychange',schedule);
  render();
  return()=>{requestFrame.current=()=>{};cancelAnimationFrame(frame);resize.disconnect();window.removeEventListener('resize',schedule);document.removeEventListener('focusin',schedule);document.removeEventListener('focusout',schedule);document.removeEventListener('visibilitychange',schedule);originals.forEach(({el,translate,opacity})=>{el.style.translate=translate;el.style.opacity=opacity;delete el.dataset.scrollStage;});};
 },[pathname,still]);
 return null;
}
