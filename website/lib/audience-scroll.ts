// Three explicit chapters on a native scroll runway; clamps safely in either direction.
export function roleForProgress(progress:number){return Math.min(2,Math.max(0,Math.floor(progress*3)));}
export function roleScrollTarget(index:number,sectionTop:number,stickyTop:number,runway:number){return sectionTop-stickyTop+runway*((Math.min(2,Math.max(0,index))+.5)/3);}
