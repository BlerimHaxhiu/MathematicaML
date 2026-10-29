import {useSyncExternalStore} from 'react';
import {getTheme,subscribeToTheme,toggleTheme} from '../theme';
export function ThemeToggle(){
 const theme=useSyncExternalStore(subscribeToTheme,getTheme),dark=theme==='dark';
 const label='Current theme: '+theme+'. Switch to '+(dark?'light':'dark')+' mode';
 return <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={label} aria-pressed={dark} title={label}>
 <svg className="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{dark?<path d="M20.5 13.3A8.6 8.6 0 0 1 10.7 3.5a8.7 8.7 0 1 0 9.8 9.8Z"/>:<><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>}</svg>
 <span>{dark?'Dark':'Light'}</span></button>;
}
