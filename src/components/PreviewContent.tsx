import {useState} from 'react';
import type {PreviewSlide} from '../preview';
import {carMeasurements,velocityIntervals} from '../preview';
import {MathText as M} from './Math';
import {PreviewVisual} from './PreviewVisual';
export function PreviewContent({slide}:{slide:PreviewSlide}){
 const [worked,setWorked]=useState(false),[count,setCount]=useState(slide.reveal?2:slide.equations.length);
 return <div className={'slide-body preview-body preview-v2 '+(slide.id===3||slide.id===23?'preview-list':'')}>
 <section className="slide-copy" aria-live="polite">
 {worked&&slide.problem?<><h2>{slide.problem.question}</h2>{slide.problem.steps.map((eq,i)=><div className="worked-equation" key={i}><M block>{eq}</M></div>)}{slide.problem.answer&&<p className="interpretation">{slide.problem.answer}</p>}</>:
 <>{slide.paragraphs.map((text,i)=><p className="statement" key={i}>{text}</p>)}
 {slide.id===15&&<table className="preview-inline-table"><tbody><tr><th>Time (s)</th>{carMeasurements.map(([t])=><td key={t}>{t}</td>)}</tr><tr><th>Position (ft)</th>{carMeasurements.map(([t,s])=><td key={t}>{s}</td>)}</tr></tbody></table>}
 {slide.id===16&&<table className="preview-inline-table interval-table"><thead><tr><th>Interval (s)</th><th>Average velocity (ft/s)</th></tr></thead><tbody>{velocityIntervals.map(([h,v])=><tr key={h}><td>[2, {+(2+h).toFixed(1)}]</td><td>{v.toFixed(1)}</td></tr>)}</tbody></table>}
 {slide.equations.slice(0,count).map((eq,i)=><div className="main-equation" key={i}><M block>{eq}</M></div>)}
 {slide.caption&&<p className="interpretation">{slide.caption}</p>}</>}
 <div className="content-controls">{slide.reveal&&!worked&&<button onClick={()=>setCount(count<slide.equations.length?count+1:2)}>{count<slide.equations.length?'Next calculation →':'Reset calculation'}</button>}{slide.problem&&<button className={worked?'active':''} onClick={()=>setWorked(!worked)}>{worked?'Return to diagram':'Show worked example'}</button>}</div>
 </section><section className="slide-visual interactive preview-visual preview-v2-visual" aria-label="Mathematical illustration"><PreviewVisual slide={slide}/></section></div>;
}
