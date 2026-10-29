import {useState} from 'react';
import {chapters} from '../chapters';
import {MathMotif} from './MathMotif';
import {ThemeToggle} from './ThemeToggle';
import './Homepage.css';
function Chevron({open=false}:{open?:boolean}){return <svg className={'chapter-chevron '+(open?'is-open':'')} width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><path d="m5 8 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;}
function PresentationOption({label,route,count}:{label:string;route?:string;count?:number}){return route?<a href={route}><span>{label}</span><span className="chapter-option-detail">{count&&<small>{count} slides</small>}<span aria-hidden="true">↗</span></span></a>:<div className="chapter-unavailable" aria-disabled="true"><span>{label}</span><span className="chapter-coming">Coming soon</span></div>;}
export function Homepage(){
 const [expanded,setExpanded]=useState<number|null>(null);
 return <main className="home-page"><div className="home-shell">
 <header className="home-header"><div className="home-theme-control"><ThemeToggle/></div><h1>Mathematics for<br className="home-title-break"/> Machine Learning</h1><p className="home-description">An interactive visual companion to James Stewart's <cite>Calculus, Eighth Edition (2016)</cite>. Explore mathematical concepts through animated explanations, interactive graphs, and step-by-step solved exercises.</p><p className="home-attribution">James Stewart <span>·</span> Calculus <span>·</span> Eighth Edition <span>·</span> Cengage Learning</p></header>
 <section className="home-introduction" aria-labelledby="intro-title"><div className="intro-copy"><p className="intro-eyebrow">A preview of calculus</p><h2 id="intro-title">Introduction to Calculus</h2><p>Discover the fundamental ideas of limits, motion, tangents, areas, and mathematical change.</p><div className="intro-actions"><a href="/preview">Open presentation <span aria-hidden="true">→</span></a><span>25 slides</span></div></div><div className="intro-illustration"><MathMotif kind="preview"/></div></section>
 <section className="home-chapters" aria-labelledby="chapters-title"><div className="chapters-heading"><h2 id="chapters-title">Chapters</h2><span>01 — 17</span></div><div className="chapter-grid">{chapters.map(chapter=>{const open=expanded===chapter.number;return <article className={'chapter-card '+(open?'chapter-expanded':'')} key={chapter.number} onKeyDown={e=>{if(e.key==='Escape'&&open){setExpanded(null);e.currentTarget.querySelector('button')?.focus();}}}>
 <h3><button className="chapter-trigger" aria-label={'Chapter '+chapter.number+': '+chapter.title} aria-expanded={open} aria-controls={'chapter-menu-'+chapter.number} onClick={()=>setExpanded(open?null:chapter.number)}><span className="chapter-number">Chapter {String(chapter.number).padStart(2,'0')}</span><span className="chapter-title">{chapter.title}</span><MathMotif kind={chapter.illustration}/><span className="chapter-disclosure"><span>{open?'Close presentations':'View presentations'}</span><Chevron open={open}/></span></button></h3>
 <div className="chapter-options" id={'chapter-menu-'+chapter.number} hidden={!open} role="group" aria-label={'Chapter '+chapter.number+' presentations'}><PresentationOption label="Theory" route={chapter.theory} count={chapter.theorySlides}/><PresentationOption label="Solved Exercises" route={chapter.exercises} count={chapter.exerciseSlides}/></div>
 </article>;})}</div></section>
 <footer className="home-footer"><span>Mathematics for Machine Learning</span><span>Calculus · Eighth Edition</span></footer>
 </div></main>;
}
