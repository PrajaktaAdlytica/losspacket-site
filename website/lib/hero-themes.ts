// Material surfaces extend the approved Paper & Ink system; amber stays semantic.
export type HeroTheme={color:string;family:string;dark?:boolean};
const ink={color:'#1D2D3B',family:'ink',dark:true};
const fog={color:'#DFE7EA',family:'fog'};
const slate={color:'#D6E0E7',family:'slate'};
const stone={color:'#DDD9D0',family:'stone'};
const ledger={color:'#DDE2DC',family:'ledger'};
const chalk={color:'#E8EBE9',family:'chalk'};
const themes:Record<string,HeroTheme>={
 '/products':slate,'/products/claims-desk':ink,'/products/claims-review':fog,
 '/products/claims-proof':ledger,'/products/claims-signal':{color:'#263C4C',family:'ink',dark:true},'/products/claims-report':stone,
 '/why-losspacket':chalk,'/how-it-works':slate,'/workspace':ink,
 '/solutions':fog,'/solutions/business-owners':stone,'/solutions/brokers-adjusters':ink,'/solutions/evidence-contributors':ledger,
 '/demo':ink,'/pricing':slate,'/pilot':stone,'/request-demo':fog,'/waitlist':ledger,
 '/evaluation':ledger,'/controls':ink,'/resources':stone,
 '/resources/document-checklist':fog,'/resources/business-income-records':ledger,'/resources/professional-review':slate,
 '/about':stone,'/contact':fog,'/sign-in':ink,'/legal/privacy':chalk,'/legal/terms':stone,'/privacy/delete':fog,'/404':slate
};
export function heroTheme(path:string):HeroTheme{return themes[path]||fog;}
