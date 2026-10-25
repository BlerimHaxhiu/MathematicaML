import {chapterSlides} from '../chapter';
import {MathText as M} from './Math';
import {ChapterVisual} from './ChapterVisual';
export function ChapterContent({id}:{id:number}){
 const slide=chapterSlides[id-1];
 return <div className={'slide-body chapter-body '+([24,35,37,49].includes(id)?'chapter-dense':'')}>
  <section className="slide-copy"><p className="statement">{slide.text}</p>
  <div className="chapter-equations">{slide.equations.map((eq,i)=><div className="main-equation" key={i}><M block>{eq}</M></div>)}</div>
  <p className="interpretation">{slide.note}</p></section>
  <section className="slide-visual interactive" aria-label="Mathematical illustration"><ChapterVisual id={id}/></section>
 </div>;
}
