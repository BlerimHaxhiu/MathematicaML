import {lazy,Suspense,useEffect,useState} from 'react';
import {chapterSlides} from './chapter';
import {previewSlides} from './preview';
import {exerciseSlides} from './exercises';
import {derivativeSlides} from './derivatives';
import {derivativeExerciseSlides} from './derivativeExercises';
import {applicationSlides} from './applications';
import {Homepage} from './components/Homepage';
import {ThemeToggle} from './components/ThemeToggle';
const ChapterContent=lazy(()=>import('./components/ChapterContent').then(m=>({default:m.ChapterContent})));
const PreviewContent=lazy(()=>import('./components/PreviewContent').then(m=>({default:m.PreviewContent})));
const ExercisesContent=lazy(()=>import('./components/ExercisesContent').then(m=>({default:m.ExercisesContent})));
const DerivativesContent=lazy(()=>import('./components/DerivativesContent').then(m=>({default:m.DerivativesContent})));
const DerivativeExercisesContent=lazy(()=>import('./components/DerivativeExercisesContent').then(m=>({default:m.DerivativeExercisesContent})));
const ApplicationsContent=lazy(()=>import('./components/ApplicationsContent').then(m=>({default:m.ApplicationsContent})));
function fromHash(){const n=Number(location.hash.replace('#','')),path=location.pathname.replace(/\/$/,''),max=path==='/preview'?previewSlides.length:path==='/chapter-3'?applicationSlides.length:path==='/chapter-2/exercises'?derivativeExerciseSlides.length:path==='/chapter-2'?derivativeSlides.length:50;return Number.isInteger(n)&&n>=1&&n<=max?n:1;}
export default function App(){
 const isPreview=location.pathname.replace(/\/$/,'')==='/preview';
 const isExercises=location.pathname.replace(/\/$/,'')==='/chapter-1/exercises';
 const isChapter2=location.pathname.replace(/\/$/,'')==='/chapter-2';
 const isChapter3=location.pathname.replace(/\/$/,'')==='/chapter-3';
 const isDerivativeExercises=location.pathname.replace(/\/$/,'')==='/chapter-2/exercises';
 const selecting=location.pathname==='/'&&!location.hash;
 const slideCount=isPreview?previewSlides.length:isChapter3?applicationSlides.length:isExercises?exerciseSlides.length:isDerivativeExercises?derivativeExerciseSlides.length:isChapter2?derivativeSlides.length:chapterSlides.length,breakAfter=isPreview?13:isChapter3?34:isExercises?26:isDerivativeExercises?56:isChapter2?33:25;
 const [id,setId]=useState(fromHash),[scale,setScale]=useState(1),[fullscreen,setFullscreen]=useState(false),[jump,setJump]=useState(false),[breakOpen,setBreakOpen]=useState(false),[seconds,setSeconds]=useState(360),[paused,setPaused]=useState(false);
 function go(n:number){const next=Math.max(1,Math.min(slideCount,n));setId(next);setJump(false);setBreakOpen(false);history.replaceState(null,'','#'+next);}
 function next(){if(id===breakAfter&&!breakOpen){setBreakOpen(true);setSeconds(360);setPaused(false);}else go(id+1);}
 async function toggleFullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{/* The fitted canvas remains usable if native fullscreen is denied. */}}
 useEffect(()=>{function resize(){setScale(Math.min(innerWidth/1600,innerHeight/900));}resize();window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize);},[]);
 useEffect(()=>{const sync=()=>setFullscreen(!!document.fullscreenElement);const hash=()=>go(fromHash());document.addEventListener('fullscreenchange',sync);window.addEventListener('hashchange',hash);return()=>{document.removeEventListener('fullscreenchange',sync);window.removeEventListener('hashchange',hash);};},[]);
 useEffect(()=>{function key(e:KeyboardEvent){
  const target=e.target instanceof HTMLElement?e.target:document.body;
  if(e.key==='Escape'){setJump(false);if(document.fullscreenElement)void document.exitFullscreen();return;}
  if(e.ctrlKey||e.metaKey||e.altKey||target.isContentEditable||target.closest('input,select,textarea,[role="slider"]'))return;
  if((e.key===' '||e.key==='Enter')&&target.closest('button,summary,a'))return;
  if(e.key.toLowerCase()==='f'){e.preventDefault();void toggleFullscreen();return;}
  if(jump)return;
  if(e.key==='Home'){e.preventDefault();go(1);}
  else if(e.key==='End'){e.preventDefault();go(slideCount);}
  else if(e.key==='ArrowLeft'){e.preventDefault();if(breakOpen)setBreakOpen(false);else go(id-1);}
  else if(e.key==='ArrowRight'||e.key===' '){e.preventDefault();next();}
 }if(!selecting)window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);});
 useEffect(()=>{if(!breakOpen||paused||seconds===0)return;const t=setTimeout(()=>setSeconds(s=>s-1),1000);return()=>clearTimeout(t);},[breakOpen,paused,seconds]);
 if(selecting)return <Homepage/>;
 return <main className="presentation-viewport"><div className="slide-stage" style={{transform:'translate(-50%,-50%) scale('+scale+')'}}>
 <article className={'slide '+(isPreview?'preview-slide preview-english':isChapter3?'applications-slide':isExercises?'exercises-slide':isDerivativeExercises?'derivative-exercises-slide':isChapter2?'derivatives-slide':'chapter-slide')} aria-label={'Slide '+id+' of '+slideCount} key={id}>
 <header className="slide-heading"><h1>{isPreview?previewSlides[id-1].title:isChapter3?applicationSlides[id-1].title:isExercises?exerciseSlides[id-1].title:isDerivativeExercises?derivativeExerciseSlides[id-1].title:isChapter2?derivativeSlides[id-1].title:chapterSlides[id-1].title}</h1></header>
 <Suspense fallback={<p role="status">Loading presentation…</p>}>{isChapter3?<ApplicationsContent id={id}/>:isPreview?<PreviewContent slide={previewSlides[id-1]}/>:isExercises?<ExercisesContent id={id}/>:isDerivativeExercises?<DerivativeExercisesContent id={id}/>:isChapter2?<DerivativesContent id={id}/>:<ChapterContent id={id}/>}</Suspense>

 </article>
 <nav className="presentation-controls" aria-label="Presentation controls"><ThemeToggle/><a className="home-link" href="/" aria-label="Back to homepage" title="Back to homepage">Home</a><button aria-label="Previous slide" title="Previous · ←" disabled={id===1&&!breakOpen} onClick={()=>breakOpen?setBreakOpen(false):go(id-1)}>←</button><button className="slide-counter" aria-label="Go to slide" title="Go to slide" onClick={()=>setJump(!jump)}>{id}<span>/ {slideCount}</span></button><button aria-label="Next slide" title="Next · → / Space" disabled={id===slideCount} onClick={next}>→</button><button className="fullscreen-button" aria-label="Toggle fullscreen" title="Fullscreen · F" onClick={toggleFullscreen}>{fullscreen?'↙':'⛶'}</button></nav>
 {jump&&<form className="jump-dialog" onSubmit={e=>{e.preventDefault();const n=Number(new FormData(e.currentTarget).get('slide'));if(Number.isInteger(n)&&n>=1&&n<=slideCount)go(n);}}><label htmlFor="slide-number">Slide</label><input autoFocus id="slide-number" name="slide" type="number" min="1" max={slideCount} defaultValue={id} required/><button type="submit">→</button><button type="button" aria-label="Close navigation" onClick={()=>setJump(false)}>×</button></form>}
 {breakOpen&&<section className="intermission" role="dialog" aria-modal="true" aria-label="Break"><h2>Break</h2><div className="timer">{Math.floor(seconds/60)}:{String(seconds%60).padStart(2,'0')}</div><div><button onClick={()=>setPaused(!paused)}>{paused?'Resume timer':'Pause timer'}</button><button autoFocus onClick={()=>go(breakAfter+1)}>Continue →</button></div></section>}
 </div></main>;
}
