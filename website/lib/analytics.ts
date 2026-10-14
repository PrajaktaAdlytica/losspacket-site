// Local, non-delivering instrumentation. No contact details or case data are accepted.
export const eventNames=['landing_view','buyer_qualified','offer_17_selected','demo_open','evidence_view','override_view','price_view','pilot_request','consent_submit','pilot_commitment_verified'] as const;
export type EventName=typeof eventNames[number];
const deliveryEvents=new Set<EventName>(['pilot_request','consent_submit','pilot_commitment_verified']);
export function trackPreview(name:EventName,properties:Record<string,string|number|boolean>={}){
 if(typeof window==='undefined'||deliveryEvents.has(name))return;
 const allowed=new Set(['offer_id','record_id','role','version','purpose','preview_only']);
 const safe=Object.fromEntries(Object.entries(properties).filter(([k])=>allowed.has(k)));
 const q=new URLSearchParams(location.search);const clean=(v:string|null)=>v&&/^[a-zA-Z0-9_.-]{1,80}$/.test(v)?v:undefined;
 const detail={event_id:crypto.randomUUID(),name,occurred_at:new Date().toISOString(),page_path:location.pathname,utm_source:clean(q.get('utm_source')),utm_campaign:clean(q.get('utm_campaign')),preview_only:true,...safe};
 window.dispatchEvent(new CustomEvent('losspacket:preview-event',{detail}));
}
