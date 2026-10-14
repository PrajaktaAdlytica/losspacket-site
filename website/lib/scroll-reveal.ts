const clamp=(value:number)=>Math.min(1,Math.max(0,value));
/** Stay readable through the centre; reverse naturally as scroll geometry reverses. */
export function revealFrame(top:number,bottom:number,viewport:number,index:number,distance:number){
 const stagger=(index%3)*.14;
 const enter=clamp((viewport-top)/(viewport*.32)-stagger);
 const leave=clamp((viewport*.16-bottom)/(viewport*.20));
 const ease=(value:number)=>1-Math.pow(1-value,3);
 const sign=index%2===0?-1:1;
 return {x:sign*distance*(1-ease(enter))-sign*distance*ease(leave),opacity:.18+.82*Math.min(ease(enter),1-ease(leave))};
}
