import {useId,type ReactNode} from 'react';
export type Point={x:number;y:number;label?:string;color?:string;open?:boolean};
type Curve={fn:(x:number)=>number;color?:string;dash?:boolean;from?:number;to?:number};
export function Graph({curves=[],points=[],xRange=[-4,4],yRange=[-2,10],xLabel='x',yLabel='f(x)',children,title='Interactive function graph',viewHeight=365}:{curves?:Curve[];points?:Point[];xRange?:[number,number];yRange?:[number,number];xLabel?:string;yLabel?:string;children?:(sx:(x:number)=>number,sy:(y:number)=>number)=>ReactNode;title?:string;viewHeight?:number}){
 const id=useId().replace(/:/g,''); const W=620,H=viewHeight,p=44;
 const sx=(x:number)=>p+(x-xRange[0])/(xRange[1]-xRange[0])*(W-2*p),sy=(y:number)=>H-p-(y-yRange[0])/(yRange[1]-yRange[0])*(H-2*p);
 const ticks=(range:[number,number],count=8)=>{const step=(range[1]-range[0])<2?0.2:Math.max(1,Math.ceil((range[1]-range[0])/count));const arr=[];for(let v=Math.ceil(range[0]/step)*step;v<=range[1]+1e-8;v+=step)arr.push(+v.toFixed(2));return arr;};
 const path=(c:Curve)=>{let d='',drawing=false,prev=0;for(let i=0;i<=500;i++){const x=(c.from??xRange[0])+i/500*((c.to??xRange[1])-(c.from??xRange[0]));const y=c.fn(x);if(!Number.isFinite(y)||y<yRange[0]-20||y>yRange[1]+20||drawing&&Math.abs(sy(y)-prev)>H){drawing=false;continue;}d+=(drawing?'L':'M')+sx(x).toFixed(2)+','+sy(y).toFixed(2)+' ';drawing=true;prev=sy(y);}return d;};
 const axisY=sy(Math.min(yRange[1],Math.max(yRange[0],0))),axisX=sx(Math.min(xRange[1],Math.max(xRange[0],0)));
 return <svg className="graph" viewBox={'0 0 '+W+' '+H} role="img" aria-label={title}><title>{title}</title><defs><clipPath id={id}><rect x={p} y={p-12} width={W-2*p} height={H-2*p+12}/></clipPath></defs>
 {ticks(xRange).map(x=><g key={'x'+x}><line x1={sx(x)} x2={sx(x)} y1={p-12} y2={H-p} className="gridline"/><text x={sx(x)} y={H-p+23} textAnchor="middle">{x}</text></g>)}
 {ticks(yRange,viewHeight===365?8:3).map(y=><g key={'y'+y}><line x1={p} x2={W-p} y1={sy(y)} y2={sy(y)} className="gridline"/><text x={p-12} y={sy(y)+4} textAnchor="end">{y}</text></g>)}
 <line x1={p} x2={W-p+8} y1={axisY} y2={axisY} className="axis"/><line x1={axisX} x2={axisX} y1={p-12} y2={H-p} className="axis"/>
 <g clipPath={'url(#'+id+')'}>{children?.(sx,sy)}{curves.map((c,i)=><path key={i} d={path(c)} fill="none" stroke={c.color??'#087e8b'} strokeWidth="3" strokeDasharray={c.dash?'7 6':undefined}/>)}{points.filter(q=>Number.isFinite(q.x)&&Number.isFinite(q.y)).map((q,i)=><g key={i}><circle cx={sx(q.x)} cy={sy(q.y)} r={6} fill={q.open?'white':q.color??'#2463d5'} stroke={q.color??'#2463d5'} strokeWidth="2.5"/>{q.label&&<text x={sx(q.x)+11} y={sy(q.y)-12} className="point-label" fill={q.color??'#2463d5'}>{q.label}</text>}</g>)}</g>
 <text x={W-p+18} y={axisY-10} textAnchor="end" className="axis-label">{xLabel}</text><text x={axisX+10} y={22} className="axis-label">{yLabel}</text></svg>;
}
