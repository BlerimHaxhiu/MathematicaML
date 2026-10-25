import {useEffect,useState} from 'react';
import type {PreviewSlide} from '../preview';
import {polygonSides,carMeasurements,fineMeasurements,velocityIntervals} from '../preview';
import {partialSum,polygonInside,leftArea,rightArea,achilles,tortoise,bookAverage} from '../previewMath';
import {fmt,loss,lossDerivative,updateWeight,secantSlope} from '../math';
import {Graph} from './Graph';
import {MathText as M} from './Math';
import {Simulation} from './Simulations';
const teal='#0D9488',blue='#2563EB',amber='#F59E0B';
function ModelLoss(){
 const [w,setW]=useState(0);
 return <div className="preview-demo preview-two-plots"><h2>Data space</h2><Graph curves={[{fn:x=>w*x,color:teal}]} xRange={[0,2]} yRange={[-1,7]} xLabel="x" yLabel="ŷ" points={[{x:1,y:3,label:'observed (1,3)',color:amber},{x:1,y:w,label:'prediction',color:blue}]} title="Data space: predicted output against input"/><h2>Parameter space</h2><Graph curves={[{fn:loss,color:teal}]} xRange={[-1,6]} yRange={[-1,17]} xLabel="w" yLabel="L(w)" points={[{x:3,y:0,label:'minimum',color:teal},{x:w,y:loss(w),label:'current w',color:blue}]} title="Parameter space: loss against weight"/><Range label="Parameter w" value={w} min={0} max={6} step={.1} set={setW}/></div>;
}
function Gradient(){
 const [history,setHistory]=useState([0]),w=history.at(-1)!,next=updateWeight(w,.2),step=history.length-1;
 return <div className="preview-demo preview-gradient"><Graph curves={[{fn:loss,color:teal}]} xRange={[-1,6]} yRange={[-1,17]} xLabel="w" yLabel="L(w)" points={[{x:0,y:9,label:'w₀=0',color:'#9db6c4'},{x:1.2,y:3.24,label:'w₁=1.2',color:teal},{x:w,y:loss(w),color:blue}]} title="A downhill parameter update from zero to 1.2 on the loss parabola">{(sx,sy)=><><defs><marker id="preview-downhill" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill={blue}/></marker></defs><path d={'M'+sx(0)+','+sy(9)+'L'+sx(1.2)+','+sy(3.24)} stroke={blue} strokeWidth="2.5" fill="none" markerEnd="url(#preview-downhill)"/><polyline points={history.map(w=>sx(w)+','+sy(loss(w))).join(' ')} stroke={blue} strokeWidth="2" fill="none"/></>}</Graph><Values items={[['Parameter w',fmt(w,6)],['Loss L(w)',fmt(loss(w),6)],['Derivative L′(w)',fmt(lossDerivative(w),6)]]}/><div className="lab-actions"><button className="primary" disabled={step>=20} onClick={()=>setHistory([...history,next])}>Next step →</button><button onClick={()=>setHistory([0])}>Reset</button></div><M block>{'\\eta=0.2,\\qquad w_{\\mathrm{next}}='+fmt(next,6)}</M></div>;
}
export function PreviewVisual({slide}:{slide:PreviewSlide}){
 switch(slide.visual){
  case 'intro':return <IntroMotion/>;
  case 'static-dynamic':return <IntroMotion rectangle/>;
  case 'five':return <Unifying five/>;
  case 'unifying':return <Unifying/>;
  case 'shapes':return <Shapes/>;
  case 'polygon':return <Polygons/>;
  case 'circle-table':return <Polygons table/>;
  case 'rectangles':return <Rectangles/>;
  case 'area-limit':return <Rectangles limit/>;
  case 'tangent-reveal':case 'secant':case 'tangent':case 'tangent-fixed':case 'physical-tangent':return <Tangent mode={slide.visual}/>;
  case 'position':case 'measurements':case 'intervals':return <MeasuredMotion mode={slide.visual}/>;
  case 'analytic-motion':return <div className="preview-analytic"><Simulation type="physics"/></div>;
  case 'achilles':return <Achilles/>;
  case 'sequence':return <Sequence/>;
  case 'series':return <Series id={slide.id}/>;
  case 'model-loss':return <ModelLoss/>;
  case 'gradient':return <Gradient/>;
 }
}
function MeasuredMotion({mode}:{mode:PreviewSlide['visual']}){
 const [h,setH]=useState(mode==='intervals'?1:2),[atEnd,setAtEnd]=useState(false),v=bookAverage(h),endpoint=2+h;
 const options=mode==='intervals'?velocityIntervals.map(([h])=>h):[2,1];
 const positions=[...carMeasurements,...(mode==='intervals'?fineMeasurements.slice(1):[])];
 return <div className="preview-demo measured-preview">
 {mode==='position'&&<><div className="preview-road"><span style={{left:(3+(atEnd?42:9)/71*91)+'%'}}>●</span><small>s(t₁) = 9 ft</small><small>s(t₂) = 42 ft</small></div><button onClick={()=>setAtEnd(!atEnd)}>{atEnd?'Return to initial position':'Move to final position'}</button></>}
 <Graph curves={mode==='measurements'?[{fn:x=>9+16.5*(x-2),color:blue},{fn:x=>9+15*(x-2),color:teal}]:[{fn:x=>9+v*(x-2),color:blue}]} points={[...positions.map(([x,y])=>({x,y,color:'#a7bdc8'})),{x:2,y:9,label:'P (2,9)',color:teal},{x:endpoint,y:9+v*h,label:'Q',color:blue}]} xRange={mode==='intervals'?[1.8,3.1]:[0,5]} yRange={mode==='intervals'?[6,27]:[0,75]} xLabel="t (s)" yLabel="s (ft)" title="Measured positions and secant velocities, without an inferred motion curve"/>
 {mode==='measurements'&&<div className="legend"><span className="blue">[2,4]: 16.5 ft/s</span><span>[2,3]: 15 ft/s</span></div>}
 {mode!=='position'&&<label className="field">Time interval (s)<select aria-label="Time interval" value={h} onChange={e=>setH(+e.target.value)}>{options.map(h=><option key={h} value={h}>[2, {fmt(2+h)}]</option>)}</select></label>}
 <Values items={[['Elapsed time',fmt(h)+' s'],['Displacement',fmt(v*h)+' ft'],['Average velocity',fmt(v)+' ft/s']]}/>
 {mode==='intervals'&&<p className="preview-note">These measurements suggest approximately 10 ft/s at t=2; they do not establish an exact value.</p>}
 </div>;
}
function Achilles(){
 const [n,setN]=useState(1),a=achilles(n),t=tortoise(n),sx=(x:number)=>55+x/2.2*525;
 return <div className="preview-demo"><svg viewBox="0 0 640 350" className="preview-svg" role="img" aria-label="Achilles and tortoise checkpoints approaching the same meeting position"><line x1="50" x2="590" y1="135" y2="135" stroke="#bfd0d7"/><line x1="50" x2="590" y1="235" y2="235" stroke="#bfd0d7"/>{Array.from({length:n},(_,i)=><g key={i}><circle cx={sx(achilles(i+1))} cy="135" r="4" fill="#2563EB50"/><circle cx={sx(tortoise(i+1))} cy="235" r="4" fill="#0D948850"/></g>)}<line x1={sx(2)} x2={sx(2)} y1="60" y2="285" stroke={amber} strokeDasharray="6 5"/><text x={sx(2)} y="315" textAnchor="middle">meeting point p</text><text x="50" y="95">Achilles</text><text x="50" y="195">Tortoise</text><circle className="sequence-dot" cx={sx(a)} cy="135" r="10" fill={blue}/><circle className="sequence-dot" cx={sx(t)} cy="235" r="10" fill={teal}/></svg><Range label="Checkpoint n" value={n} min={1} max={10} set={setN}/><div className="lab-actions"><button onClick={()=>setN(Math.min(10,n+1))} disabled={n===10}>Next checkpoint →</button><button onClick={()=>setN(1)}>Reset</button></div><Values items={[['Achilles position',fmt(a,6)],['Tortoise position',fmt(t,6)]]}/></div>;
}
function Sequence(){
 const [n,setN]=useState(1);
 return <div className="preview-demo sequence-plot"><Graph xRange={[0,101]} yRange={[0,1.1]} xLabel="n" yLabel="aₙ = 1/n" curves={[{fn:()=>0,color:amber,dash:true}]} points={[...Array.from({length:100},(_,i)=>({x:i+1,y:1/(i+1),color:'#afc8d4'})),{x:n,y:1/n,label:'current term',color:blue}]} title="Discrete points n and one over n approaching the reference line y=0"/><Range label="Sequence index n" value={n} min={1} max={100} set={setN}/><M block>{'a_{'+n+'}=\\frac1{'+n+'}='+fmt(1/n,8)}</M><Values items={[['Reference limit','0'],['Current term',fmt(1/n,8)]]}/></div>;
}
function Series({id}:{id:number}){
 const [n,setN]=useState(id===21?4:id===22?8:1);
 return <div className="preview-demo preview-series"><svg viewBox="0 0 640 330" className="preview-svg" role="img" aria-label="Exact proportions of a geometric partial sum and its remaining distance to a wall"><line x1="580" x2="580" y1="60" y2="260" stroke="#14263D" strokeWidth="5"/><text x="580" y="42" textAnchor="middle">Wall</text><rect x="50" y="125" width="530" height="65" fill="#f0f4f6" stroke="#b8ced7"/>{Array.from({length:n},(_,i)=>{const x=50+530*partialSum(i),width=530/2**(i+1);return <g key={i}><rect x={x} y="125" width={width} height="65" fill={i%2?blue:teal} stroke="white" strokeWidth=".5"/>{i<3&&<text x={x+width/2} y="164" fill="white" textAnchor="middle">{'1/'+2**(i+1)}</text>}</g>;})}<circle className="sequence-dot" cx={50+530*partialSum(n)} cy="102" r="8" fill={amber}/><text x="50" y="225" textAnchor="middle">0</text><text x="580" y="225" textAnchor="middle">1</text><text x="315" y="285" textAnchor="middle">partial sum + remaining gap = 1</text></svg><Range label="Number of terms n" value={n} min={1} max={20} set={setN}/><div className="lab-actions"><button onClick={()=>setN(Math.min(20,n+1))} disabled={n===20}>Add next term →</button><button onClick={()=>setN(1)}>Reset</button></div><Values items={[['Partial sum',fmt(partialSum(n),8)],['Remaining gap',fmt(2**(-n),8)]]}/><p className="preview-note">Every finite partial sum is less than 1.</p></div>;
}
function Range({label,value,min,max,step=1,set}:{label:string;value:number;min:number;max:number;step?:number;set:(n:number)=>void}){return <label className="slider"><span>{label}<strong>{fmt(value,6)}</strong></span><input aria-label={label} type="range" min={min} max={max} step={step} value={value} onChange={e=>set(+e.target.value)}/></label>;}
function Values({items}:{items:[string,string][]}){return <div className="stats" aria-live="polite">{items.map(([k,v])=><div key={k}><span>{k}</span><strong>{v}</strong></div>)}</div>;}
function IntroMotion({rectangle=false}:{rectangle?:boolean}){
 const [t,setT]=useState(1),[playing,setPlaying]=useState(false);
 useEffect(()=>{if(!playing)return;const timer=setInterval(()=>setT(t=>t>=3?0:t+.02),40);return()=>clearInterval(timer);},[playing]);
 return <div className={'preview-demo '+(rectangle?'static-dynamic':'intro-motion')}>
 {rectangle&&<svg className="static-rectangle" viewBox="0 0 640 190" role="img" aria-label="A rectangle with fixed length and width"><rect x="170" y="25" width="290" height="100" fill="#0D948812" stroke={teal} strokeWidth="3"/><text x="315" y="160" textAnchor="middle">ℓ</text><text x="485" y="85">w</text></svg>}
 <Graph curves={[{fn:x=>x*x,color:teal}]} points={[{x:t,y:t*t,label:'now',color:blue}]} xRange={[0,3]} yRange={[0,9]} xLabel="t (s)" yLabel="s(t)" title="A point moving along a position–time curve"/>
 <div className="lab-actions"><button onClick={()=>setPlaying(!playing)}>{playing?'Pause':'Start'} animation</button><span className="time-readout">t = {fmt(t,2)} s</span></div></div>;
}
function Mini({kind}:{kind:number}){return <svg viewBox="0 0 100 65" aria-hidden="true">{kind===0?<><path d="M8 55V10Q35 8 50 30T92 20V55Z" fill="#0D94881a"/><path d="M8 10Q35 8 50 30T92 20" fill="none" stroke={teal} strokeWidth="3"/></>:kind===1?<><path d="M8 50Q50 60 90 10" fill="none" stroke={teal} strokeWidth="3"/><path d="M15 61L90 20" stroke={blue} strokeWidth="2"/></>:kind===2?<><path d="M8 55H92M8 55V8" fill="none" stroke="#9ab7c5"/><path d="M8 55Q60 50 88 9" fill="none" stroke={teal} strokeWidth="3"/><circle cx="65" cy="34" r="5" fill={blue}/></>:kind===3?<>{[1,2,3,4,5,6].map(n=><circle key={n} cx={n*13} cy={54-40/n} r="3" fill={blue}/>)}<path d="M8 56H92" stroke="#9ab7c5"/></>:<>{[0,1,2,3,4].map(i=><rect key={i} x={8+80*(1-2**-i)} y="20" width={80/2**(i+1)} height="25" fill={i%2?blue:teal} stroke="white"/>)}</>}</svg>;}
function Unifying({five=false}:{five?:boolean}){
 const items=five?['Area','Tangent','Velocity','Sequence','Series']:['Area','Tangent','Velocity','Series'];
 return <div className="preview-unifying"><div className="limit-center"><M>{'\\lim'}</M><span>LIMIT</span></div><div className="mini-list">{items.map((word,i)=><div key={word}><Mini kind={!five&&i===3?4:i}/><h2>{word}</h2></div>)}</div></div>;
}
function Shapes(){return <div className="preview-demo"><svg viewBox="0 0 740 430" className="preview-svg" role="img" aria-label="A polygon partitioned into triangles beside a curved region"><path d="M40 220L95 60L245 90L320 230L180 300Z" fill="#0D948814" stroke={teal} strokeWidth="3"/><path d="M40 220L245 90M40 220L320 230" stroke={blue} strokeWidth="2"/><text x="130" y="150">A₁</text><text x="190" y="205">A₂</text><text x="160" y="255">A₃</text><path d="M410 300V95Q440 35 520 110T695 75V300Z" fill="#2563EB15" stroke={blue} strokeWidth="3"/><text x="175" y="365" textAnchor="middle">Polygon</text><text x="555" y="365" textAnchor="middle">Curved region</text></svg></div>;}
function CirclePolygon({n,cx=320,cy=220,r=165}:{n:number;cx?:number;cy?:number;r?:number}){
 const vertices=Array.from({length:n},(_,i)=>{const a=2*Math.PI*i/n-Math.PI/2;return (cx+r*Math.cos(a))+','+(cy+r*Math.sin(a));}).join(' ');
 return <><circle cx={cx} cy={cy} r={r} fill="none" stroke={teal} strokeWidth="2.5"/><polygon points={vertices} fill="#2563EB18" stroke={blue} strokeWidth="2"/></>;
}
function Polygons({table=false}:{table?:boolean}){
 const [index,setIndex]=useState(1),n=polygonSides[index];
 if(table)return <div className="preview-demo polygon-evidence"><svg viewBox="0 0 740 260" className="preview-svg" role="img" aria-label="Six, twelve and forty-eight sided polygons in identical unit circles">{[6,12,48].map((n,i)=><g key={n}><CirclePolygon n={n} cx={120+250*i} cy={115} r={94}/><text x={120+250*i} y="240" textAnchor="middle">n = {n}</text></g>)}</svg><table><thead><tr><th>Number of sides</th><th>Polygon area</th></tr></thead><tbody>{[6,12,48].map(n=><tr key={n}><td>{n}</td><td>{n===12?'3':fmt(polygonInside(n),5)}</td></tr>)}</tbody></table></div>;
 return <div className="preview-demo preview-polygons"><svg viewBox="0 0 640 440" className="preview-svg" role="img" aria-label="Regular polygon inscribed in a fixed unit circle"><CirclePolygon n={n}/><line x1="320" y1="220" x2="485" y2="220" stroke="#93aeba" strokeDasharray="5 4"/><text x="415" y="205">r = 1</text></svg><label className="slider"><span>Number of sides<strong>{n}</strong></span><input aria-label="Number of sides" type="range" min="0" max="7" step="1" value={index} onChange={e=>setIndex(+e.target.value)}/></label><Values items={[['Polygon area',fmt(polygonInside(n),5)],['Circle area',fmt(Math.PI,5)]]}/></div>;
}
function Rectangles({limit=false}:{limit?:boolean}){
 const [n,setN]=useState(4),[side,setSide]=useState('Left');
 if(limit)return <div className="preview-demo"><Graph curves={[{fn:x=>leftArea(x),color:blue,from:1},{fn:x=>rightArea(x),color:teal,from:1},{fn:()=>1/3,color:amber,dash:true}]} xRange={[1,100]} yRange={[0,1.05]} xLabel="n" yLabel="Area estimate" points={[{x:n,y:leftArea(n),color:blue},{x:n,y:rightArea(n),color:teal}]} title="Left and right rectangle sums approaching one third"/><div className="legend"><span className="blue">Left estimate</span><span>Right estimate</span><span className="orange">1/3</span></div><Range label="Number of rectangles" value={n} min={1} max={100} set={setN}/><Values items={[['Left sum',fmt(leftArea(n),6)],['Right sum',fmt(rightArea(n),6)],['Reference area','1/3']]}/></div>;
 return <div className="preview-demo preview-rectangles"><Graph curves={[{fn:x=>x*x,color:teal}]} xRange={[0,1.05]} yRange={[0,1.1]} xLabel="x" yLabel="f(x)" title="Left or right endpoint rectangles beneath and above x squared">{(sx,sy)=><><path d={'M'+sx(0)+','+sy(0)+' '+Array.from({length:101},(_,i)=>{const x=i/100;return 'L'+sx(x)+','+sy(x*x);}).join(' ')+' L'+sx(1)+','+sy(0)+' Z'} fill="#0D94880d"/>{Array.from({length:n},(_,i)=>{const x=i/n,y=((i+(side==='Right'?1:0))/n)**2;return <rect key={i} x={sx(x)} y={sy(y)} width={sx(x+1/n)-sx(x)} height={sy(0)-sy(y)} fill="#2563EB17" stroke={blue} strokeWidth="1"/>;})}</>}</Graph><div className="controls two"><Range label="Number of rectangles" value={n} min={1} max={100} set={setN}/><label className="field">Endpoint<select aria-label="Endpoint" value={side} onChange={e=>setSide(e.target.value)}><option>Left</option><option>Right</option></select></label></div><Values items={[['Left sum',fmt(leftArea(n),7)],['Right sum',fmt(rightArea(n),7)],['Selected estimate',fmt(side==='Left'?leftArea(n):rightArea(n),7)]]}/></div>;
}
function Tangent({mode}:{mode:PreviewSlide['visual']}){
 const [h,setH]=useState(mode==='secant'?1:.8),[visible,setVisible]=useState(false);
 const fixed=mode==='tangent-fixed'||mode==='physical-tangent',onlyPoint=mode==='tangent-reveal',atZero=h===0;
 const showTangent=fixed||!onlyPoint&&mode!=='secant'||onlyPoint&&visible;
 const showSecant=!fixed&&!onlyPoint&&!atZero;
 return <div className="preview-demo preview-tangent">
 <Graph curves={[{fn:x=>x*x,color:'#8cabb8'},...(showSecant?[{fn:(x:number)=>1+secantSlope(1,h)*(x-1),color:blue}]:[]),...(showTangent?[{fn:(x:number)=>2*x-1,color:teal,dash:!atZero&&!fixed}]:[])]} xRange={[-.5,3]} yRange={[-1,9]} xLabel={mode==='physical-tangent'?'t (s)':'x'} yLabel={mode==='physical-tangent'?'s (m)':'y'} points={[{x:1,y:1,label:'P (1,1)'},...(showSecant?[{x:1+h,y:(1+h)**2,label:'Q',color:blue}]:[])]} title="Parabola with a secant approaching the limiting tangent">{showSecant?(sx,sy)=><><path d={'M'+sx(1)+','+sy(1)+'H'+sx(1+h)+'V'+sy((1+h)**2)} fill="none" stroke={amber} strokeWidth="2" strokeDasharray="5 4"/><text x={(sx(1)+sx(1+h))/2} y={sy(1)+23}>Δx</text><text x={sx(1+h)+12} y={(sy(1)+sy((1+h)**2))/2}>Δy</text></>:undefined}</Graph>
 {onlyPoint?<button className="reveal-answer" onClick={()=>setVisible(!visible)}>{visible?'Hide tangent':'Reveal tangent'}</button>:fixed?<M block>{'y=2x-1'}</M>:<><div className="legend"><span className="blue">Secant</span><span>Tangent</span></div><Range label="Horizontal change h" value={h} min={-1} max={1.5} step={.01} set={setH}/><Values items={[['Secant slope',atZero?'Undefined':fmt(secantSlope(1,h))],['Limiting tangent slope','2']]}/>{atZero&&<p className="preview-note">Limiting tangent — the secant is undefined at h=0.</p>}</>}</div>;
}
