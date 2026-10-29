import {Fragment,useState} from 'react';
import {applicationSlides,applicationMath} from '../applications';
import {MathText as M} from './Math';
import {ApplicationFigure} from './ApplicationFigures';
import './applications.css';

function Inline({text}:{text:string}){return <>{text.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part,i)=>part.startsWith('`')?(part.includes('?')||part.includes('Objective:')||part.includes('Constraint:')?<Fragment key={i}>{part.slice(1,-1)}</Fragment>:<M key={i}>{applicationMath(part.slice(1,-1))}</M>):part.startsWith('**')?<strong key={i}><Inline text={part.slice(2,-2)}/></strong>:part.startsWith('*')?<em key={i}><Inline text={part.slice(1,-1)}/></em>:<Fragment key={i}>{part}</Fragment>)}</>;}
export function ApplicationsContent({id}:{id:number}){
 const slide=applicationSlides[id-1];
 const fields=id===58?[slide.fields[0],slide.fields[2],slide.fields[1]]:slide.fields;
 const blocks=fields.flatMap(field=>field.text.split(/(\$\$[\s\S]*?\$\$)/g).filter(p=>p.trim()).flatMap(part=>{
  if(part.startsWith('$$')){const tex=part.slice(2,-2).trim();return (id===55&&field.kind==='Worked examples'?tex.split(/;\\qquad\s*/):id===22?tex.split(/,\\quad\s*/):[tex]).map(text=>({math:true,text}));}
  return part.split(/(?:Answer revealed:| Reveal:)/).filter(p=>p.trim()).map(text=>({math:false,text:text.trim().replace(/^"|"$/g,'').replace('Analogous minimum definitions.','An absolute minimum is the least value on the domain; a local minimum is no greater than sufficiently nearby domain values.')}));
 }));
 const reveal=slide.fields.some(f=>/^Reveal|^Recover|^Solve|^At current|^Concept check|^On-screen question/.test(f.kind));
 const [count,setCount]=useState(reveal?1:blocks.length),complete=count===blocks.length;
 return <div className={'slide-body applications-body application-page-'+id+' '+(blocks.length>5?'applications-dense':'')}><section className="slide-copy">
 <div className="applications-copy">{blocks.slice(0,count).map((block,i)=>block.math?<div className="application-equation" key={i}><M block>{block.text}</M></div>:<p className="statement" key={i}><Inline text={block.text}/></p>)}</div>
 {reveal&&<div className="content-controls"><button onClick={()=>setCount(complete?1:count+1)}>{complete?'Restart explanation':'Next step →'}</button><button onClick={()=>setCount(blocks.length)}>Show complete explanation</button></div>}
 </section><section className="slide-visual applications-visual" aria-label="Mathematical illustration"><ApplicationFigure id={id} complete={complete}/></section></div>;
}
