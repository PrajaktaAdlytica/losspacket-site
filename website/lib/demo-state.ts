export type Stage='documents requested'|'working-paper draft'|'broker reviewed'|'owner-approved submission draft';
export type DemoState={stage:Stage;version:number;date:'2026-02-22'|'2026-02-25';rationale:string;reviewedVersion:number|null;approvedVersion:number|null;events:string[]};
export const seed:DemoState={stage:'documents requested',version:1,date:'2026-02-25',rationale:'Owner-proposed end date; reopening evidence is missing.',reviewedVersion:null,approvedVersion:null,events:['03 MAR 2026 · 10:00 · Synthetic case opened.','02 MAR 2026 · Jordan Ellis rejected automatic payroll exclusion.']};
export type Action={type:'DRAFT'}|{type:'EDIT';date:DemoState['date'];rationale:string}|{type:'REVIEW'}|{type:'RETURN';reason:string}|{type:'APPROVE'}|{type:'REVOKE'}|{type:'RESET'};
export function transition(s:DemoState,a:Action):DemoState{
 if(a.type==='RESET')return {...seed,events:[...seed.events]};
 if(a.type==='DRAFT')return s.stage==='documents requested'?{...s,stage:'working-paper draft',events:['Morgan Vale · Opened working-paper draft v1.',...s.events]}:s;
 if(a.type==='EDIT'){
  if(!a.rationale.trim())throw new Error('A rationale is required before changing an assumption.');
  return {...s,date:a.date,rationale:a.rationale,version:s.version+1,stage:'working-paper draft',reviewedVersion:null,approvedVersion:null,events:[`Morgan Vale · Proposed ${a.date}; v${s.version+1}. Prior reviews invalidated. Rationale: ${a.rationale}`,...s.events]};
 }
 if(a.type==='REVIEW'){
  if(s.stage==='documents requested')throw new Error('Open the working paper before reviewing a draft.');
  return {...s,stage:'broker reviewed',reviewedVersion:s.version,approvedVersion:null,events:[`Jordan Ellis · Reviewed v${s.version} with both evidence gaps and payroll uncertainty disclosed.`,...s.events]};
 }
 if(a.type==='RETURN'){
  if(!a.reason.trim())throw new Error('Explain why the draft needs correction.');
  return {...s,stage:'working-paper draft',reviewedVersion:null,approvedVersion:null,events:[`Jordan Ellis · Returned draft: ${a.reason}`,...s.events]};
 }
 if(a.type==='APPROVE'){
  if(s.reviewedVersion!==s.version)throw new Error('The current version needs professional review before owner approval.');
  return {...s,stage:'owner-approved submission draft',approvedVersion:s.version,events:[`Morgan Vale · Approved v${s.version} for professional discussion. Not submitted.`,...s.events]};
 }
 return {...s,stage:s.reviewedVersion===s.version?'broker reviewed':'working-paper draft',approvedVersion:null,events:['Morgan Vale · Revoked owner approval.',...s.events]};
}
export const records=[
 {id:'EV-01',name:'Kitchen fire',date:'12 FEB 2026',status:'Reported',type:'event',source:'Morgan Vale incident note + PH-01',detail:'06:40 incident; rear kitchen. A reported event, not a coverage finding.'},
 {id:'PH-01',name:'Kitchen photo',date:'12 FEB 2026',status:'Completed',type:'photo',source:'Synthetic kitchen image · captured 07:15',detail:'Linked to rear-kitchen incident. Original date and captured time retained.'},
 {id:'R-09',name:'Repair invoice',date:'18 FEB 2026',status:'Pending',type:'invoice',source:'Hearthline Repair · invoice R-09',detail:'Equipment $4,800 + labor $1,200 = $6,000. Payment proof is missing.'},
 {id:'P-08',name:'Payroll summary',date:'12–25 FEB 2026',status:'Pending',type:'payroll',source:'Synthetic payroll aggregate · period 12–25 February',detail:'$4,800 aggregate, no employee names. Expense classification unresolved.'},
 {id:'REV-01',name:'Prior-period revenue',date:'12–25 FEB 2025',status:'Completed',type:'revenue',source:'Synthetic bookkeeping export · cell B14',detail:'$28,000. Prior-period comparability is an assumption requiring review.'},
 {id:'REV-02',name:'Incident-period revenue',date:'12–25 FEB 2026',status:'Completed',type:'revenue',source:'Synthetic bookkeeping export · cell B14',detail:'$4,000. Manual synthetic export; no bank connection.'},
 {id:'POL-01',name:'Policy question',date:'01 JAN 2026',status:'Question open',type:'policy',source:'Invented policy extract · version 1 · page 7',detail:'Which suspension dates and expense treatments should the supervising professional review under this policy?'},
 {id:'REQ-01',name:'Insurer request',date:'20 FEB 2026',status:'Pending',type:'request',source:'Illustrative request letter · page 1',detail:'Due 06 MAR 2026 per source, not a statutory deadline. Requests invoice support and suspension chronology.'},
 {id:'ASM-01',name:'Suspension end',date:'26 FEB 2026',status:'Held',type:'assumption',source:'Owner note: 25 FEB · incident note: 22 FEB',detail:'Reopening documentation is missing. Both alternatives stay in the record.'},
 {id:'ASM-02',name:'Payroll exclusion suggestion',date:'26 FEB 2026',status:'Rejected',type:'assumption',source:'Suggestion + Jordan Ellis review note · 02 MAR',detail:'Keep payroll classification unresolved for policy review. Automatic exclusion rejected.'}
];
