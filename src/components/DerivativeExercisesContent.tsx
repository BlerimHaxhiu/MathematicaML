import {Fragment,useState} from 'react';
import {derivativeExerciseSlides,exerciseMath} from '../derivativeExercises';
import {MathText as M} from './Math';
import {Graph,type Point} from './Graph';
import {fmt} from '../math';
import './derivativeExercises.css';

const q=String.raw,teal='#087e8b',blue='#2463d5',orange='#ce8126';
const stages=['Problem and given data','Strategy','Step-by-step solution','Verification and interpretation'];
// A deliberately small renderer for the authored body: paragraphs, emphasis, and KaTeX.
function Inline({text}:{text:string}){
 return <>{text.split(/(\$[^$]+\$|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part,i)=>part.startsWith('$')?<M key={i}>{exerciseMath(part.slice(1,-1))}</M>:part.startsWith('**')?<strong key={i}>{part.slice(2,-2)}</strong>:part.startsWith('*')?<em key={i}>{part.slice(1,-1)}</em>:<Fragment key={i}>{part}</Fragment>)}</>;
}
export function DerivativeExercisesContent({id}:{id:number}){
 const slide=derivativeExerciseSlides[id-1];
 const blocks=slide.body.split(/(\$\$[\s\S]*?\$\$)/g).flatMap(part=>part.startsWith('$$')?[{math:true,text:part.slice(2,-2).trim()}]:part.trim().split(/\n\s*\n/).filter(Boolean).map(text=>({math:false,text})));
 const [shown,setShown]=useState(blocks.length);
 return <div className={'slide-body de-body de-stage-'+slide.stage}>
 <section className="slide-copy de-copy"><h2 className="de-stage-title">{stages[slide.stage]}</h2>
 <div className="de-authored">{blocks.slice(0,shown).map((block,i)=>block.math?<div className="de-equation" key={i}><M block>{exerciseMath(block.text)}</M></div>:<p className="statement" key={i}><Inline text={block.text}/></p>)}</div>
 {slide.stage===2&&blocks.length>1&&<div className="content-controls"><button onClick={()=>setShown(shown===blocks.length?1:shown+1)}>{shown===blocks.length?'Restart step-by-step':'Next step →'}</button><button onClick={()=>setShown(blocks.length)}>Show complete solution</button></div>}
 </section><section className="slide-visual de-visual" aria-label="Mathematical illustration"><ExerciseFigure problem={slide.problem} stage={slide.stage}/></section></div>;
}
function Slider({label,value,min,max,step=.01,set}:{label:string;value:number;min:number;max:number;step?:number;set:(n:number)=>void}){return <label className="slider"><span>{label}<strong>{fmt(value,5)}</strong></span><input type="range" aria-label={label} min={min} max={max} step={step} value={value} onChange={e=>set(+e.target.value)}/></label>;}
function Formula({children}:{children:string}){return <div className="de-figure-equation"><M block>{children}</M></div>;}
type PlotModel={fn:(x:number)=>number;df:(x:number)=>number;domain:[number,number];range:[number,number];derivativeRange:[number,number];label?:string;xLabel?:string;dfLabel?:string;cuts?:number[]};
const models:Partial<Record<number,PlotModel>>={
 4:{fn:x=>x*x,df:x=>2*x,domain:[-2.5,2.5],range:[-1,7],derivativeRange:[-6,6]},
 5:{fn:x=>x**4,df:x=>4*x**3,domain:[-1.5,1.5],range:[-1,6],derivativeRange:[-14,14]},
 6:{fn:x=>x+1/x,df:x=>1-1/x**2,domain:[-3,3],range:[-7,7],derivativeRange:[-8,2],cuts:[0]},
 7:{fn:x=>(5*x*x-2)*(x**3+3*x),df:x=>25*x**4+39*x*x-6,domain:[-1,1],range:[-20,20],derivativeRange:[-10,65]},
 8:{fn:x=>(1+2*x*x)*(x*x-x-2),df:x=>8*x**3-6*x*x-6*x-1,domain:[-1.3,2],range:[-18,4],derivativeRange:[-30,30]},
 9:{fn:t=>(t**3+3*t)/(t*t-4*t+3),df:t=>(t**4-8*t**3+6*t*t+9)/((t-1)**2*(t-3)**2),domain:[-1,5],range:[-35,35],derivativeRange:[-30,30],cuts:[1,3],xLabel:'t',label:'f(t)',dfLabel:'f′(t)'},
 10:{fn:x=>x*x*Math.sin(x),df:x=>2*x*Math.sin(x)+x*x*Math.cos(x),domain:[-3.2,3.2],range:[-6,6],derivativeRange:[-13,13],xLabel:'x (rad)'},
 11:{fn:x=>x*Math.cos(x)+2*Math.tan(x),df:x=>Math.cos(x)-x*Math.sin(x)+2/Math.cos(x)**2,domain:[-4,4],range:[-10,10],derivativeRange:[-5,20],cuts:[-Math.PI/2,Math.PI/2],xLabel:'x (rad)'},
 13:{fn:x=>(2-Math.sin(x))**1.5,df:x=>-1.5*Math.cos(x)*Math.sqrt(2-Math.sin(x)),domain:[-3.2,3.2],range:[0,6],derivativeRange:[-3,3],xLabel:'x (rad)'},
 14:{fn:x=>(x+1)**3*(x+2)**6,df:x=>3*(x+1)**2*(x+2)**5*(3*x+4),domain:[-2.2,-.97],range:[-.004,.001],derivativeRange:[-.012,.012]},
 19:{fn:x=>3*x*x,df:x=>6*x,domain:[0,3.5],range:[0,40],derivativeRange:[0,22],xLabel:'x (m)',label:'M (kg)',dfLabel:'λ (kg/m)'},
 20:{fn:t=>t**3-2*t*t+6*t+2,df:t=>3*t*t-4*t+6,domain:[0,2],range:[0,16],derivativeRange:[4,11],xLabel:'t (s)',label:'Q (C)',dfLabel:'I (A)'},
 21:{fn:r=>(20000/r)**2,df:r=>(20000/r)**3,domain:[8000,24000],range:[0,7],derivativeRange:[0,17],xLabel:'r (km)',label:'F / F(20,000)',dfLabel:'|F′| / |F′(20,000)|'}
};
function Branches({model,derivative=false,points=[],height=265,children}:{model:PlotModel;derivative?:boolean;points?:Point[];height?:number;children?:Parameters<typeof Graph>[0]['children']}){
 const edges=[model.domain[0],...(model.cuts??[]),model.domain[1]],fn=derivative?model.df:model.fn;
 return <Graph viewHeight={height} xRange={model.domain} yRange={derivative?model.derivativeRange:model.range} yTicks={model.range[1]<.01?(derivative?[-.01,0,.01]:[-.003,-.0015,0]):undefined} xLabel={model.xLabel??'x'} yLabel={derivative?(model.dfLabel??'f′(x)'):(model.label??'f(x)')} curves={edges.slice(0,-1).map((left,i)=>({fn,from:left+(i?1e-4:0),to:edges[i+1]-(i<edges.length-2?1e-4:0),color:derivative?blue:teal}))} points={points} title={derivative?'Derivative or normalized sensitivity':'Function graph with separate domain branches'}>{children??((sx,sy)=><>{model.cuts?.map(c=><line key={c} x1={sx(c)} x2={sx(c)} y1={sy((derivative?model.derivativeRange:model.range)[0])} y2={sy((derivative?model.derivativeRange:model.range)[1])} stroke={orange} strokeDasharray="6 5"/>)}</>)}</Graph>;
}
function PairedFigure({problem,stage}:{problem:number;stage:number}){
 const m=models[problem]!,[x,setX]=useState(problem===14?-4/3:problem===21?20000:problem===20?2/3:problem===9?0:1);
 const valid=!(m.cuts??[]).some(c=>Math.abs(x-c)<1e-8),answer=stage>0;
 const slope=m.df(x),points=valid?[{x,y:m.fn(x),color:orange}]:[];
 return <>{problem===19&&<svg viewBox="0 0 620 65" className="de-rod" role="img" aria-label="Rod with increasing linear mass density toward increasing position"><path d="M40 35H580" stroke="#dbe8ec" strokeWidth="30"/>{Array.from({length:40},(_,i)=>{const t=i/39;return <line key={i} x1={40+540*Math.sqrt(t)} x2={40+540*Math.sqrt(t)} y1="20" y2="50" stroke={teal} strokeWidth="2"/>;})}<text x="40" y="16">x = 0 m</text><text x="490" y="16">x = 3 m</text></svg>}<Branches model={m} height={answer?245:365} points={points}>{(sx,sy)=><>
 {(m.cuts??[]).map(c=><line key={c} x1={sx(c)} x2={sx(c)} y1={sy(m.range[0])} y2={sy(m.range[1])} stroke={orange} strokeDasharray="6 5"/>)}
 {answer&&valid&&problem!==21&&<line x1={sx(m.domain[0])} x2={sx(m.domain[1])} y1={sy(m.fn(x)+slope*(m.domain[0]-x))} y2={sy(m.fn(x)+slope*(m.domain[1]-x))} stroke={blue} strokeWidth="2"/>}
 {problem===14&&[-2,-4/3,-1].map(t=><g key={t}><circle cx={sx(t)} cy={sy(m.fn(t))} r="4" fill={orange}/><text x={sx(t)} y={sy(m.fn(t))-14} textAnchor="middle">{fmt(t,4)}</text></g>)}
 </>}</Branches>
 {answer&&<Branches model={m} derivative height={245} points={valid?[{x,y:slope,color:orange}]:[]}>{(sx,sy)=><>
 {(m.cuts??[]).map(c=><line key={c} x1={sx(c)} x2={sx(c)} y1={sy(m.derivativeRange[0])} y2={sy(m.derivativeRange[1])} stroke={orange} strokeDasharray="6 5"/>)}
 <line x1={sx(x)} x2={sx(x)} y1={sy(m.derivativeRange[0])} y2={sy(m.derivativeRange[1])} stroke="#b5c9d3" strokeDasharray="4 4"/>
 {problem===20&&<text x={sx(2/3)+12} y={sy(14/3)-14}>Minimum (2/3, 14/3)</text>}
 </>}</Branches>}
 <Slider label={problem===21?'Distance r (km)':problem===19?'Position x (m)':problem===20?'Time t (s)':'Shared input '+(m.xLabel??'x')} value={x} min={m.domain[0]} max={m.domain[1]} step={problem===21?100:problem===14?.001:.01} set={setX}/>
 {answer&&<p className="de-readout">{valid?(problem===21?'Normalized sensitivity = ':problem===19?'Density (kg/m) = ':problem===20?'Current (A) = ':'Derivative = ')+fmt(slope,6):'Undefined: input excluded from the domain.'}</p>}
 </>;
}
function ExerciseFigure({problem,stage}:{problem:number;stage:number}){
 const answer=stage>0,[value,setValue]=useState(problem===1?1:problem===2?0:problem===3?.5:problem===16?1:problem===18?2:problem===22?40:problem===23?2:problem===24?10:problem===25?.5:problem===26?1.999:.2);
 if(problem===7||problem===8)return <div className="de-chain"><h2>Two factors</h2><Formula>{problem===7?q`u=5x^2-2`:q`u=1+2x^2`}</Formula><Formula>{problem===7?q`v=x^3+3x`:q`v=x^2-x-2`}</Formula>{answer&&<><h2>Two contributions</h2><Formula>{q`(uv)'=\underbrace{u'v}_{\text{first factor}}+\underbrace{uv'}_{\text{second factor}}`}</Formula><h2>Independent check</h2><Formula>{q`\text{Expand first}\ \longrightarrow\ \text{differentiate}`}</Formula></>}</div>;
 if(models[problem])return <PairedFigure problem={problem} stage={stage}/>;
 if(problem===1){const H=(t:number)=>10*t-1.86*t*t,v=(t:number)=>10-3.72*t,impact=500/93;
 return <><svg className="de-motion" viewBox="0 0 620 90" role="img" aria-label="Vertical position of the rock in metres"><line x1="140" x2="140" y1="8" y2="78" stroke="#9bb4c0"/><circle cx="140" cy={78-5*H(value)} r="8" fill={orange}/><text x="180" y="45">Height: {fmt(H(value),3)} m</text></svg>
 <Graph viewHeight={answer?235:365} xRange={[0,5.8]} yRange={[-1,15]} xLabel="t (s)" yLabel="H (m)" curves={[{fn:H,from:0,to:impact}]} points={[{x:0,y:0,label:'Launch'},{x:250/93,y:H(250/93),label:'Apex'},{x:impact,y:0,label:'Return'},{x:value,y:H(value),color:orange}]} title="Rock height above its launch height"/>
 {answer&&<Graph viewHeight={215} xRange={[0,5.8]} yRange={[-11,11]} xLabel="t (s)" yLabel="v (m/s)" curves={[{fn:v,from:0,to:impact,color:blue}]} points={[{x:value,y:v(value),color:orange}]} title="Signed velocity, zero at the apex"/>}
 <Slider label="Time t (s)" value={value} min={0} max={impact} step={.01} set={setValue}/>{answer&&<p className="de-readout">Velocity: {fmt(v(value),3)} m/s · Speed: {fmt(Math.abs(v(value)),3)} m/s</p>}</>;}
 if(problem===2){const f=(t:number)=>12*t*t-6*t+23,intervals=[[4,8],[6,8],[8,10],[8,12]],index=Math.round(value),[a,b]=intervals[index],slope=(f(b)-f(a))/(b-a);
 return <><Graph xRange={[3,13]} yRange={[0,1900]} xLabel="t (s)" yLabel="s (ft)" curves={[{fn:f},...(answer?[{fn:(t:number)=>f(a)+slope*(t-a),color:blue},{fn:(t:number)=>f(8)+186*(t-8),color:orange,dash:true}]:[])]} points={[{x:a,y:f(a),label:'P'},{x:b,y:f(b),label:'Q'}]} title="Secants and tangent for measured time intervals"/>
 <label className="field">Time interval<select aria-label="Time interval" value={index} onChange={e=>setValue(+e.target.value)}>{intervals.map(([a,b],i)=><option key={i} value={i}>[{a}, {b}] s</option>)}</select></label>
 {answer&&<><table className="exercise-table de-interval-table"><thead><tr><th>Interval (s)</th><th>Average velocity (ft/s)</th></tr></thead><tbody>{intervals.map(([a,b])=><tr key={a+','+b}><td>[{a}, {b}]</td><td>{12*(a+b)-6}</td></tr>)}</tbody></table><Formula>{q`\bar v=`+slope+q`\,\mathrm{ft/s},\quad v(8)=186\,\mathrm{ft/s}`}</Formula><div className="legend"><span>Secant</span><span style={{color:orange}}>Tangent at 8 s</span></div></>}</>;}
 if(problem===3){const h=value,f=(x:number)=>x**4-2,m=4+6*h+4*h*h+h**3;
 return <><Graph xRange={[-.1,2]} yRange={[-3,8]} curves={[{fn:f},...(answer?[{fn:(x:number)=>-1+m*(x-1),color:blue},{fn:(x:number)=>4*x-5,color:orange,dash:true}]:[])]} points={[{x:1,y:-1,label:'P'},{x:1+h,y:f(1+h),label:'Q'}]} title="Quartic curve with a secant approaching the tangent"/>
 <Slider label="Nonzero displacement h" value={h} min={.001} max={.7} step={.001} set={setValue}/>{answer&&<><Formula>{'m_{PQ}='+fmt(m,6)+q`,\quad m_{\mathrm{tangent}}=4`}</Formula><div className="legend"><span>Secant</span><span style={{color:orange}}>Limiting tangent</span></div></>}</>;}
 if(problem===12||problem===15)return <div className="de-chain">{(problem===12?[q`x\ \longmapsto\ u=2x^3+5`,q`u\ \longmapsto\ F(u)=u^4`]:[q`1\ \xrightarrow{h}\ 2`,q`2\ \xrightarrow{g}\ 3`,q`3\ \xrightarrow{f}\ f(3)`]).map((eq,i)=><Fragment key={eq}><Formula>{eq}</Formula>{i<(problem===12?1:2)&&<span className="de-chain-arrow">↓</span>}</Fragment>)}{answer&&<Formula>{problem===12?q`\frac{dy}{dx}=\underbrace{4u^3}_{F'(u)}\underbrace{6x^2}_{u'(x)}`:q`r'(1)=6\cdot5\cdot4=120`}</Formula>}</div>;
 if(problem===16||problem===17||problem===18){const x=problem===17?value-1:value;
 const root=(t:number)=>Math.sqrt(problem===16?9*t*t-1:problem===17?3*t*t+4:5*t*t-4);
 const upper=(t:number)=>problem===16?root(t):problem===17?2*t+root(t):(-t+root(t))/2;
 const lower=(t:number)=>problem===16?-root(t):problem===17?2*t-root(t):(-t-root(t))/2;
 const slope=problem===16?9*x/upper(x):problem===17?2+3*x/root(x):(-1+5*x/root(x))/2;
 const ranges:[number,number]=problem===18?[.8,3]:[-2,2];
 const segments=problem===16?[[-2,-1/3],[1/3,2]]:problem===18?[[Math.sqrt(.8),3]]:[[-2,2]];
return <><Graph xRange={ranges} yRange={problem===18?[-5,4]:[-7,7]} yLabel="y" curves={segments.flatMap(([from,to])=>[{fn:upper,from,to,color:teal},{fn:lower,from,to,color:teal}]).concat(answer?[{fn:(t:number)=>upper(x)+slope*(t-x),from:ranges[0],to:ranges[1],color:blue}]:[])} points={[{x,y:upper(x),label:problem===18?'P (2,1)':'P',color:orange}]} title="Implicit hyperbola, separated explicit branches and local tangent">{(sx,sy)=>problem===16?<><rect x={sx(-1/3)} y={sy(7)} width={sx(1/3)-sx(-1/3)} height={sy(-7)-sy(7)} fill="#ce812618"/>{[-1/3,1/3].map(t=><line key={t} x1={sx(t)} x2={sx(t)} y1={sy(-7)} y2={sy(7)} stroke={orange} strokeDasharray="5 5"/>)}<text x={sx(0)} y={sy(6)} textAnchor="middle">No real y</text></>:problem===17?<line x1={sx(-2)} x2={sx(2)} y1={sy(-4)} y2={sy(4)} stroke={orange} strokeDasharray="5 5"/>:null}</Graph>
 {problem!==18&&<Slider label={problem===16?'Upper-right branch input x':'Upper branch input x'} value={value} min={problem===16?.34:0} max={problem===16?2:2.5} step={.01} set={setValue}/>}
 {answer&&<Formula>{q`(x,y)=(`+fmt(x,4)+','+fmt(upper(x),4)+q`),\quad y'=`+fmt(slope,5)}</Formula>}
 {answer&&problem===16&&<p className="de-readout">Vertical tangents at (−1/3, 0) and (1/3, 0).</p>}{answer&&problem===17&&<p className="de-readout">Dashed line: y = 2x; no real intersection with the curve.</p>}</>;}
 if(problem===22){const x=value,s=2*x/3,z=x+s;
 return <><Graph viewHeight={350} xRange={[-4,100]} yRange={[-2,20]} xLabel="Distance (ft)" yLabel="Height (ft)" curves={[]} title="Similar triangles formed by streetlight, person, and shadow">{(sx,sy)=><><path d={'M'+sx(0)+','+sy(0)+'V'+sy(15)+'L'+sx(z)+','+sy(0)+'Z'} fill="#087e8b10" stroke={teal} strokeWidth="3"/><line x1={sx(x)} x2={sx(x)} y1={sy(0)} y2={sy(6)} stroke={blue} strokeWidth="6"/><text x={sx(0)+10} y={sy(12)}>15 ft</text><text x={sx(x)+10} y={sy(7)}>6 ft</text><text x={sx(x/2)} y={sy(-1)}>x</text><text x={sx(x+s/2)} y={sy(-1)}>s</text><text x={sx(z)-20} y={sy(1)}>Tip</text><circle cx={sx(z)} cy={sy(0)} r="6" fill={orange}/></>}</Graph><Slider label="Person distance x (ft)" value={x} min={10} max={55} step={.5} set={setValue}/><Formula>{'z=x+s='+fmt(z,4)+q`\,\mathrm{ft}`}</Formula>{answer&&<Formula>{q`\frac{ds}{dt}=\frac{10}{3},\quad\frac{dz}{dt}=\frac{25}{3}\quad(\mathrm{ft/s})`}</Formula>}</>;}
 if(problem===23){const t=value,x=25*t,y=60*t,d=65*t;
 return <><svg className="de-diagram" viewBox="0 0 620 420" role="img" aria-label="Map with westward and southward cars, scaled to their actual perpendicular distances"><path d="M560 50H70M560 50V385" fill="none" stroke="#99b3bf" strokeWidth="2"/><text x="75" y="30">West</text><text x="565" y="410">South</text><circle cx="560" cy="50" r="5" fill={orange}/><text x="450" y="30">Start</text><path d={'M'+(560-1.8*x)+' 50L560 '+(50+1.8*y)} stroke={teal} strokeWidth="3"/><circle cx={560-1.8*x} cy="50" r="8" fill={blue}/><circle cx="560" cy={50+1.8*y} r="8" fill={teal}/><text x={540-1.8*x} y="85">{fmt(x,2)} mi</text><text x="460" y={40+1.8*y}>{fmt(y,2)} mi</text><text x="220" y="200">Separation d</text></svg>
 <Slider label="Elapsed time t (h)" value={t} min={0} max={3} step={.01} set={setValue}/>{answer&&<Formula>{q`d=`+fmt(d,3)+q`\,\mathrm{mi},\quad d'=65\,\mathrm{mi/h}`}</Formula>}</>;}
 if(problem===24){const h=value,r=h/2;
 return <><svg className="de-diagram de-cone" viewBox="0 0 620 300" role="img" aria-label="Cone cross-section with diameter equal to height"><path d="M215 250L320 40L425 250Z" stroke={teal} fill="#087e8b10" strokeWidth="3"/><ellipse cx="320" cy="250" rx="105" ry="22" fill="#087e8b10" stroke={teal} strokeWidth="2"/><path d="M320 40V250H425" fill="none" stroke={blue} strokeDasharray="5 5"/><text x="330" y="150">h = {fmt(h)} ft</text><text x="333" y="280">r = {fmt(r)} ft</text><path d="M320 2V28m-7-9 7 9 7-9" stroke={orange} fill="none" strokeWidth="3"/><text x="360" y="25">30 ft³/min</text></svg>
 <Graph viewHeight={225} xRange={[0,15]} yRange={[0,1000]} xLabel="h (ft)" yLabel="V (ft³)" curves={[{fn:x=>Math.PI*x**3/12}]} points={[{x:h,y:Math.PI*h**3/12,color:orange}]} title="Volume grows cubically with height under the cone constraint"/><Slider label="Pile height h (ft)" value={h} min={1} max={15} step={.1} set={setValue}/>{answer&&<p className="de-readout">Height rate: {fmt(120/(Math.PI*h*h),5)} ft/min</p>}</>;}
 if(problem===25){const dx=value,f=(x:number)=>x*x-4*x,tangent=(x:number)=>-3+2*(x-3),dy=2*dx,delta=f(3+dx)-f(3);
 return <><Graph xRange={[2.6,4.1]} yRange={[-3.6,.6]} yLabel="y" curves={[{fn:f},{fn:tangent,color:blue}]} points={[{x:3,y:-3,label:'P'},{x:3+dx,y:f(3+dx),color:orange}]} title="Actual vertical change and tangent-predicted differential from the same baseline">{answer?(sx,sy)=><><line x1={sx(3+dx)} x2={sx(3+dx)} y1={sy(-3)} y2={sy(f(3+dx))} stroke={orange} strokeWidth="3"/><line x1={sx(3+dx)-12} x2={sx(3+dx)-12} y1={sy(-3)} y2={sy(tangent(3+dx))} stroke={blue} strokeWidth="3"/><text x={sx(3+dx)+8} y={sy(f(3+dx))}>Δy</text><text x={sx(3+dx)-45} y={sy(tangent(3+dx))}>dy</text></>:undefined}</Graph><Slider label="Input change dx" value={dx} min={.01} max={.8} step={.01} set={setValue}/>{answer&&<Formula>{q`\Delta y=`+fmt(delta,5)+q`,\quad dy=`+fmt(dy,5)+q`,\quad \Delta y-dy=`+fmt(dx*dx,5)}</Formula>}</>;}
 if(problem===26){const x=value,L=(x:number)=>16+32*(x-2),err=x**4-L(x);
 return <><Graph viewHeight={280} xTicks={[1.998,2,2.002]} yTicks={[15.94,16,16.06]} xRange={[1.998,2.002]} yRange={[15.935,16.065]} yLabel="y" curves={[{fn:x=>x**4},{fn:L,color:blue}]} points={[{x,y:x**4,color:orange}]} title="True-scale quartic and tangent near two"/>
 {answer&&<><h2>Error magnified ×1,000,000</h2><Graph viewHeight={210} xRange={[1.998,2.002]} yRange={[0,100]} yLabel="10⁶[f(x)−L(x)]" curves={[{fn:x=>1e6*(x**4-L(x))}]} points={[{x,y:1e6*err,color:orange}]} title="Explicitly magnified approximation error; not a distorted function plot"/></>}
 <Slider label="Nearby input x" value={x} min={1.998} max={2.002} step={.0001} set={setValue}/>{answer&&<p className="de-readout">L(x) = {fmt(L(x),9)} · Actual = {fmt(x**4,12)}<br/>Error = {err.toExponential(7)}</p>}</>;}
 const dr=value;
 return <><svg className="de-diagram" viewBox="0 0 620 420" role="img" aria-label="Disk of radius 24 centimetres and concentric measurement-error annulus, drawn to scale"><circle cx="310" cy="210" r={7*(24+dr)} fill="#ce812660" stroke={orange} strokeWidth="2"/><circle cx="310" cy="210" r="168" fill="#f1f8f8" stroke={teal} strokeWidth="2"/><line x1="310" x2="478" y1="210" y2="210" stroke={blue} strokeWidth="2"/><text x="350" y="195">r = 24 cm</text><text x="310" y="25" textAnchor="middle">Outer radius = {fmt(24+dr,3)} cm</text><text x="310" y="412" textAnchor="middle">Thin annulus shown at its true relative thickness</text></svg><Slider label="Radius error magnitude |dr| (cm)" value={dr} min={.01} max={.3} step={.01} set={setValue}/>{answer&&<><Formula>{q`|dA|=`+fmt(48*dr,5)+q`\pi\,\mathrm{cm^2}`}</Formula><p className="de-readout">Estimated relative error: {fmt(2*dr/24*100,5)}%</p></>}</>;
}
