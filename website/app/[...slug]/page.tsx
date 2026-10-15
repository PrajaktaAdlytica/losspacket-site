import {notFound} from 'next/navigation';
import {PageView} from '@/components/pages';
import {heroes} from '@/lib/content';
export function generateStaticParams(){return heroes.filter(h=>h.route!=='/').map(h=>({slug:h.route.slice(1).split('/')}));}
export async function generateMetadata({params}:{params:Promise<{slug?:string[]}>}){const {slug}=await params;const path='/'+(slug||[]).join('/');const h=heroes.find(h=>h.route===path);return {title:h?.name==='Home'?'Property-loss evidence, organized.':h?.name,description:h?.headline+' Research-stage concept. No coverage or payout promise.'};}
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const {slug}=await params;const path='/'+(slug||[]).join('/');if(path==='/'||!heroes.some(h=>h.route===path))notFound();return <PageView path={path}/>;}
