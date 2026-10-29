export type Theme='light'|'dark';
export const themeStorageKey='mathematica-ml-theme';
export function resolveTheme(saved:string|null,systemDark:boolean):Theme{return saved==='light'||saved==='dark'?saved:systemDark?'dark':'light';}
let current:Theme='light',preference:Theme|null=null;
const listeners=new Set<()=>void>();
function apply(theme:Theme){current=theme;document.documentElement.dataset.theme=theme;for(const listener of listeners)listener();}
export function initializeTheme(){
 let saved:string|null=null;
 try{saved=localStorage.getItem(themeStorageKey);}catch{/* Storage can be unavailable in private or restricted browsing. */}
 preference=saved==='light'||saved==='dark'?saved:null;
 const system=window.matchMedia('(prefers-color-scheme: dark)');
 apply(resolveTheme(preference,system.matches));
 system.addEventListener('change',e=>{if(preference===null)apply(resolveTheme(null,e.matches));});
 window.addEventListener('storage',e=>{if(e.key!==themeStorageKey&&e.key!==null)return;const value=e.key===null?null:e.newValue;preference=value==='light'||value==='dark'?value:null;apply(resolveTheme(preference,system.matches));});
}
export function toggleTheme(){preference=current==='light'?'dark':'light';try{localStorage.setItem(themeStorageKey,preference);}catch{/* The choice still applies for this page when storage is blocked. */}apply(preference);}
export const getTheme=()=>current;
export function subscribeToTheme(listener:()=>void){listeners.add(listener);return()=>{listeners.delete(listener);};}
