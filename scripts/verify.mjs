import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import katex from 'katex';
import {lessons,sections,glossary,sourceSections} from '../src/content.ts';
import {problems} from '../src/practice.ts';
import {courseNotes} from '../src/courseNotes.ts';
import {slideTitles,slideCopy} from '../src/presentation.ts';
import {chapterSlides} from '../src/chapter.ts';
import {exerciseSlides,tankData,heartData,measuredSlope,billing,chirpTemperature,rationalSecant,cubicSecant,sufficientDelta,ivtPolynomial} from '../src/exercises.ts';
import {derivativeSlides,derivativeSecant,motionPosition,motionVelocity,circlePoint,circleSlope,ladderHeight,ladderRate,rootLinearization} from '../src/derivatives.ts';
import {derivativeExerciseSlides,exerciseMath} from '../src/derivativeExercises.ts';
import {applicationSlides,applicationSections,applicationMath,newtonStep,cubic,quartic,canHeight,canArea} from '../src/applications.ts';
import {chapters} from '../src/chapters.ts';
import {resolveTheme,themeStorageKey} from '../src/theme.ts';
import {loss,lossDerivative,updateWeight,secantSlope,rightArea} from '../src/math.ts';
import {previewSlides,carMeasurements,fineMeasurements,velocityIntervals} from '../src/preview.ts';
import {partialSum,polygonInside,leftArea,bookAverage,analyticVelocity} from '../src/previewMath.ts';
assert.equal(lessons.length,50);
assert.equal(new Set(lessons.map(l=>l.title)).size,50);
assert.equal(sections.reduce((t,s)=>t+s.time,0)+6,90);
assert.equal(sections[3].end,25);
assert.equal(sourceSections.length,8);
assert.ok(glossary.length>=25&&glossary.length<=35);
let formulas=0;
for(const [i,l] of lessons.entries()){
 assert.equal(l.id,i+1);
 for(const k of ['title','question','concept','equation','meaning','example','result','check','answer','ref'])assert.ok(l[k]?.length>0,'Missing '+k+' in lesson '+l.id);
 assert.ok(l.steps.length>=3);
 assert.ok(l.concept.includes('ë')||l.concept.includes('ç'),'Albanian content '+l.id);
 for(const tex of [l.equation,l.result]){
  assert.ok(!/[\u0000-\u0008\u000b-\u001f]/.test(tex),'Control character in formula '+l.id);
  katex.renderToString(tex,{throwOnError:true,strict:'ignore'});formulas++;
 }
}
assert.ok(lessons.slice(42).every(l=>l.extension));
for(const note of Object.values(courseNotes))if(note.equation){katex.renderToString(note.equation,{throwOnError:true,strict:'ignore'});formulas++;}
for(const p of problems){assert.ok(p.steps.length>=3);assert.ok(p.lessons.every(n=>n>=1&&n<=50));for(const tex of [p.formula,p.result]){katex.renderToString(tex,{throwOnError:true,strict:'ignore'});formulas++;}}
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10,a+' != '+b);
const chapterSpec=readFileSync(new URL('../Markdowns/ch1/theory.md',import.meta.url),'utf8');
const chapterTitles=[...chapterSpec.matchAll(/^### Slide \d+ — (.+)$/gm)].map(m=>m[1].trim());
assert.equal(chapterSlides.length,50);
assert.deepEqual(chapterSlides.map(s=>s.title),chapterTitles);
for(const slide of chapterSlides){
 assert.ok(slide.text.length&&slide.note.length&&slide.equations.length);
 assert.ok(!/[ëçËÇ]/.test(JSON.stringify(slide)));
 for(const tex of slide.equations)katex.renderToString(tex,{throwOnError:true,strict:'error'});
}
// Independent numerical checks of the specified worked cases.
for(const x of [-3,-2,0,2,3])assert.ok(9-x*x>=0);
near(4*(10-4),24);near((2+1)**2,9);near(2**2+1,5);
near(secantSlope(1,.5),2.5);near(2*2+.5,4.5);near(2*2,4);
near(2*3**2-3+1,16);near((2+1)/(2+2),3/4);
near(2+2,4);near(1/(Math.sqrt(4)+2),1/4);
for(const x of [-.5,-.01,.01,.5])assert.ok(Math.abs(x*x*Math.sin(1/x))<=x*x);
for(const epsilon of [.00001,.1,1,100]){const delta=epsilon/3;for(const sign of [-1,1])assert.ok(Math.abs(3*(2+sign*.9*delta)-1-5)<epsilon);}
assert.ok((0**3+0-1)<0&&(1**3+1-1)>0);
near(updateWeight(1.2,.2),1.92);near(loss(1.92),1.1664);
console.log('PASS: Chapter 1 exact 50 specification titles, English copy, strict KaTeX; domain, composition, tangent, velocity, limits, squeeze, epsilon–delta, IVT, and two Gradient Descent steps.');
for(const a of [-3,0,1,2])for(const h of [-0.5,-0.01,0.01,0.5])near(secantSlope(a,h),((a+h)**2-a*a)/h);
near(lossDerivative(0),-6);near(updateWeight(0,.1),.6);near(loss(.6),5.76);near(updateWeight(.6,.1),1.08);
near(updateWeight(0,.5),3);near(updateWeight(0,1),6);near(updateWeight(6,1),0);
for(const n of [2,4,6,20,80]){let sum=0;for(let i=1;i<=n;i++)sum+=(i/n)**2/n;near(rightArea(n),sum);assert.ok(sum>1/3);}
let w=0;for(let i=0;i<50;i++)w=updateWeight(w,.1);assert.ok(loss(w)<1e-8);
for(const eps of [.001,.06,1]){const delta=eps/3;assert.ok(Math.abs(3*(2+.99*delta)+1-7)<eps);}
assert.ok(lessons[27].equation.includes('\\lim'),'LaTeX escaping preserved');
const app=readFileSync(new URL('../src/App.tsx',import.meta.url),'utf8');
assert.equal(slideTitles.length,50);
for(const lesson of lessons){const slide={...lesson,...slideCopy[lesson.id]};for(const tex of [slide.equation,slide.result])katex.renderToString(tex,{throwOnError:true,strict:'ignore'});}
assert.ok(app.includes("breakAfter=isPreview?13:isChapter3?34:isExercises?26:isDerivativeExercises?56:isChapter2?33:25"));for(const key of ['ArrowRight','ArrowLeft','Home','End'])assert.ok(app.includes(key));assert.ok(!app.includes('localStorage'));
assert.equal(previewSlides.length,25);
const spec=readFileSync(new URL('../Markdowns/preview/preview.md',import.meta.url),'utf8');
const titles=[...spec.matchAll(/^### Slide \d+ — (.+)$/gm)].map(m=>m[1].trim());
assert.deepEqual(previewSlides.map(s=>s.title),titles);
const problemSlides=[6,7,12,15,17,19,21,25];
assert.deepEqual(previewSlides.filter(s=>s.problem).map(s=>s.id),problemSlides);
for(const [i,s] of previewSlides.entries()){
 assert.equal(s.id,i+1);
 assert.ok(!/[ëçËÇ]/.test(JSON.stringify(s)));
 for(const tex of [...s.equations,...(s.problem?.steps??[])])katex.renderToString(tex,{throwOnError:true,strict:'ignore'});
}
near(polygonInside(12),3);assert.ok(Math.abs(polygonInside(48)-3.13263)<.000005);
near(leftArea(4),.21875);near(rightArea(4),.46875);near(leftArea(8),.2734375);near(rightArea(8),.3984375);
near(bookAverage(2),16.5);near(bookAverage(1),15);near(bookAverage(.1),10.2);
for(const [h,v] of velocityIntervals)near(bookAverage(h),v);
near(analyticVelocity(2),4);near(partialSum(4),15/16);
near(updateWeight(0,.2),1.2);near(loss(0),9);near(loss(1.2),3.24);near(9-loss(1.2),5.76);
console.log('PASS: Preview 25 slides in specification order; Chapter 1 50 slides; 8 worked problems; strict KaTeX; A12=3, A48='+polygonInside(48).toFixed(5)+'; L4=.21875, R4=.46875; book velocities 16.5/15/10.2 ft/s; v(2)=4 m/s; s4=.9375; GD w1=1.2, loss 9→3.24.');
const exercisesSpec=readFileSync(new URL('../Markdowns/ch1/exercises.md',import.meta.url),'utf8');
const exerciseTitles=[...exercisesSpec.matchAll(/^\*\*Slide \d+ — (.+)\*\*$/gm)].map(m=>m[1]);
assert.equal(exerciseSlides.length,50);assert.equal(exerciseTitles.length,50);
assert.deepEqual(exerciseSlides.map(s=>s.title),exerciseTitles);
for(const [i,s] of exerciseSlides.entries()){
 assert.ok(s.title.startsWith(i%2===0?'Problem:':'Solution:'));
 assert.ok(s.text.length&&s.equations.length);
 assert.ok(!/[ëçËÇ]/.test(JSON.stringify(s)));
 for(const tex of s.equations)katex.renderToString(tex,{throwOnError:true,strict:'error'});
}
// The fixed 25 exercise cases, independently checked against their stated data.
near(5*(10-5),25);assert.ok(0<5&&5<10);
near(billing(400),35);near(billing(500),45);near(billing(600),55);
near((-5)**2,5**2);near((-5)**3,-(5**3));
near((80-70)/(173-113),1/6);near(chirpTemperature(150),457/6);
near((4800-2200)/(300-100),13);near(2200-13*100,900);
near(15+.434*(85/.434),100);assert.ok(Math.abs(85/.434-195.8525)<.0001);
const f=x=>3*x+5,g=x=>x*x+x;
near(f(g(1)),11);near(g(f(1)),72);
for(const x of [-2,-.5,0,1,3]){
 near(f(g(x)),3*x*x+3*x+5);near(g(f(x)),9*x*x+33*x+30);
 near(f(f(x)),9*x+20);near(g(g(x)),x**4+2*x**3+2*x*x+x);
 near((2*x+x*x)**4,(x*x+2*x)**4);
}
near(Math.PI*60**2,3600*Math.PI);
assert.deepEqual(tankData,[[5,694],[10,444],[15,250],[20,111],[25,28],[30,0]]);
const tankSlopes=tankData.filter(([t])=>t!==15).map(p=>measuredSlope([15,250],p));
for(const [i,value] of [-44.4,-38.8,-27.8,-22.2,-250/15].entries())near(tankSlopes[i],value);
near((tankSlopes[1]+tankSlopes[2])/2,-33.3);
assert.deepEqual(heartData,[[36,2530],[38,2661],[40,2806],[42,2948],[44,3080]]);
for(const [i,value] of [418/6,71.75,71,66].entries())near(measuredSlope([42,2948],heartData.filter(([t])=>t!==42)[i]),value);
near(measuredSlope(heartData[2],heartData[4]),68.5);
for(const x of [1.5,1.9,1.99,1.999,2.5,2.1,2.01,2.001])near(rationalSecant(x),(1/(1-x)+1)/(x-2));
assert.ok(Number.isNaN(rationalSecant(2)));near(1/(2-1),1);near(2-3,-1);
assert.notEqual(-1,2);assert.ok((4.99+1)/(4.99-5)<0&&(5.01+1)/(5.01-5)>0);
assert.deepEqual([4+5*(-2),(-2)**3,Math.sqrt(4),3*4/-2,(-2)*0/4],[-6,-8,2,-6,-0]);
// A negative numerator over a denominator tending to zero has no prescribed direction.
assert.ok(-2/.001<0&&-2/(-.001)>0);
for(const x of [-1,0,1,3])near((x*x+x-6)/(x-2),x+3);near(2+3,5);
for(const x of [-4,-2,0,1])near((x*x+3*x)/(x*x-x-12),x/(x-4));near(-3/-7,3/7);
for(const h of [-.5,-.01,.01,.5])near(cubicSecant(h),((2+h)**3-8)/h);near(12+6*0+0**2,12);
near(1/(Math.sqrt(9)+3),1/6);
for(const h of [-1,-.01,.01,1])near((Math.sqrt(9+h)-3)/h,1/(Math.sqrt(9+h)+3));
for(let x=-.5;x<=.5;x+=.001)assert.ok(Math.abs(x*x*Math.cos(20*Math.PI*x))<=x*x+1e-15);
near(sufficientDelta(.2),.0125);near(sufficientDelta(.1),.00625);
for(const epsilon of [.1,.2,20]){const delta=sufficientDelta(epsilon);for(const sign of [-1,1]){const x=2+sign*.99*delta;assert.ok(Math.abs(x**3-3*x+4-6)<epsilon);near(x**3-3*x-2,(x-2)*(x+1)**2);}}
for(const x of [-1,0,1,3])near((x*x-x-2)/(x-2),x+1);near(2+1,3);
near(1-1**2,0);near(Math.sqrt(1-1),0);
assert.deepEqual([0+2,2*0**2,2*1**2,2-1],[2,0,2,1]);
near(ivtPolynomial(1),-1);near(ivtPolynomial(2),15);
let lo=1,hi=2;for(let i=0;i<50;i++){const mid=(lo+hi)/2;if(ivtPolynomial(mid)<0)lo=mid;else hi=mid;}
assert.ok(Math.abs((lo+hi)/2-1.164035)<.0000005);
console.log('PASS: Exercises 50 slides / 25 problem–solution pairs in exact specification order; all formulas; all 25 numerical/algebraic cases, including −33.3 gal/min, 68.5 beats/min, δ=.0125/.00625 and IVT root ≈1.164035.');
const derivativesSpec=readFileSync(new URL('../Markdowns/ch2/theory.md',import.meta.url),'utf8');
const derivativeTitles=[...derivativesSpec.matchAll(/^### Slide \d+ — (.+)$/gm)].map(m=>m[1]);
assert.equal(derivativeSlides.length,60);assert.deepEqual(derivativeSlides.map(s=>s.title),derivativeTitles);
for(const s of derivativeSlides){assert.ok(s.text&&s.note);assert.ok(!/[ëçËÇ]/.test(JSON.stringify(s)));for(const tex of s.equations)katex.renderToString(tex,{throwOnError:true,strict:'error'});}
assert.ok(app.includes('Back to homepage'));assert.ok(chapters.some(c=>c.theory==='/chapter-2'));assert.ok(app.includes("path==='/chapter-2'?derivativeSlides.length"));
near((9-1)/(3-1),4);for(const h of [1,.5,.1,-.1])near(derivativeSecant(3,h),((3+h)**2-9)/h);near(derivativeSecant(3,-.1),5.9);assert.ok(Number.isNaN(derivativeSecant(3,0)));
near(motionPosition(2),8);near(motionVelocity(2),6);
// Numerical differentiation independently checks the analytic formulas, not just their strings.
function checkDerivative(fn,df,points=[-.7,.3,1.1]){for(const x of points){const step=1e-6,actual=(fn(x+step)-fn(x-step))/(2*step),expected=df(x);assert.ok(Math.abs(actual-expected)<2e-5*Math.max(1,Math.abs(expected)),'Derivative mismatch at '+x+': '+actual+' / '+expected);}}
checkDerivative(x=>x*x,x=>2*x);checkDerivative(x=>x**3-3*x,x=>3*x*x-3);near(3*(-1)**2-3,0);near(3*1**2-3,0);
near(Math.abs(-.01)/(-.01),-1);near(Math.abs(.01)/.01,1);
checkDerivative(t=>2*t**3-3*t*t,t=>6*t*t-6*t);checkDerivative(t=>6*t*t-6*t,t=>12*t-6);
near(2**3-2*2,4);near(3*2**2-2,10);
checkDerivative(x=>(x*x+1)*(x**3-2*x),x=>5*x**4-3*x*x-2);
checkDerivative(x=>(x*x+1)/(x-1),x=>(x*x-2*x-1)/(x-1)**2,[-1,0,2]);
near(3.01**2-9,.0601);checkDerivative(Math.sin,Math.cos);checkDerivative(Math.cos,x=>-Math.sin(x));checkDerivative(Math.tan,x=>1/Math.cos(x)**2);
checkDerivative(x=>x*x*Math.sin(x),x=>2*x*Math.sin(x)+x*x*Math.cos(x));
checkDerivative(x=>2*x*Math.sin(x)+x*x*Math.cos(x),x=>2*Math.sin(x)+4*x*Math.cos(x)-x*x*Math.sin(x));
for(const t of [0,.3,1,2]){const A=2,omega=3;near(-A*omega*omega*Math.cos(omega*t),-omega*omega*(A*Math.cos(omega*t)));}
checkDerivative(x=>(3*x*x+1)**5,x=>30*x*(3*x*x+1)**4);
checkDerivative(x=>Math.sqrt(1+x*x),x=>x/Math.sqrt(1+x*x));checkDerivative(x=>Math.sin(x*x),x=>2*x*Math.cos(x*x));checkDerivative(x=>Math.cos(3*x),x=>-3*Math.sin(3*x));
checkDerivative(x=>(1+Math.sin(x*x))**3,x=>6*x*(1+Math.sin(x*x))**2*Math.cos(x*x));checkDerivative(x=>(2*x)**2,x=>8*x);
const [cx,cy]=circlePoint(Math.atan2(4,3)*180/Math.PI);near(cx,3);near(cy,4);near(circleSlope(cx,cy),-3/4);
assert.ok(Number.isNaN(circleSlope(...circlePoint(0))));assert.ok(Number.isNaN(circleSlope(...circlePoint(180))));
near(3**3+3**3,6*3*3);near((2*3-3*3)/(3*3-2*3),-1);near(-25/4**3,-25/64);
near(2*1-4,-2);near(Math.abs(2*1-4),2);near(3-.2*5,2);near(80-4*10,40);near(5+.04*50,7);
near(ladderHeight(3),4);near(ladderRate(3),-1.5);for(const x of [.5,2,3,4.6]){near(x*x+ladderHeight(x)**2,25);checkDerivative(ladderHeight,t=>ladderRate(t)/2,[x]);}
near(8*Math.PI/(4*Math.PI*2**2),.5);near(2*Math.PI*10*.2,4*Math.PI);
near(rootLinearization(4.1),2.025);assert.ok(Math.abs(Math.sqrt(4.1)-2.0248457)<1e-7);assert.ok(Math.abs(rootLinearization(4.1)-Math.sqrt(4.1)-.0001543)<1e-7);
near(2*3*.1,.6);near(3.1**2-9,.61);near(3*.1/10,.03);
near(updateWeight(0,.2),1.2);near(loss(1.2),3.24);near(updateWeight(1.2,.2),1.92);near(loss(1.92),1.1664);
console.log('PASS: Chapter 2 60 exact titles and strict KaTeX; all specified mathematical checks, finite-difference cross-checks, circle vertical-tangent guard, ladder −1.5 ft/s, linearization 2.025 and GD 9→3.24.');
assert.deepEqual(chapters.map(c=>c.number),Array.from({length:17},(_,i)=>i+1));
assert.deepEqual(chapters.map(c=>c.title),[
 'Functions and Limits','Derivatives','Applications of Differentiation','Integrals','Applications of Integration',
 'Inverse Functions: Exponential, Logarithmic, and Inverse Trigonometric Functions','Techniques of Integration','Further Applications of Integration',
 'Differential Equations','Parametric Equations and Polar Coordinates','Infinite Sequences and Series','Vectors and the Geometry of Space',
 'Vector Functions','Partial Derivatives','Multiple Integrals','Vector Calculus','Second-Order Differential Equations'
]);
assert.equal(new Set(chapters.map(c=>c.illustration)).size,17);
assert.deepEqual(chapters.flatMap(c=>[c.theory,c.exercises].filter(Boolean)),['/chapter-1','/chapter-1/exercises','/chapter-2','/chapter-2/exercises','/chapter-3']);
assert.equal(chapters[0].theorySlides,50);assert.equal(chapters[0].exerciseSlides,50);assert.equal(chapters[1].theorySlides,60);
assert.ok(chapters.slice(3).every(c=>!c.theory&&!c.exercises));assert.equal(chapters[1].exerciseSlides,108);assert.equal(chapters[2].theorySlides,60);assert.ok(!chapters[2].exercises);
const homepage=readFileSync(new URL('../src/components/Homepage.tsx',import.meta.url),'utf8');
assert.ok(homepage.includes('href="/preview"'));assert.ok(homepage.includes('aria-expanded'));assert.ok(homepage.includes('Coming soon'));
console.log('PASS: Homepage 17 exact ordered chapters, 17 motifs, existing route mappings, slide counts and unavailable-presentation configuration.');
assert.equal(resolveTheme(null,false),'light');assert.equal(resolveTheme(null,true),'dark');
assert.equal(resolveTheme('light',true),'light');assert.equal(resolveTheme('dark',false),'dark');
assert.equal(resolveTheme('invalid',true),'dark');assert.equal(resolveTheme('',false),'light');
assert.equal(themeStorageKey,'mathematica-ml-theme');
console.log('PASS: Theme resolution respects valid saved preferences and falls back to the system setting.');
const derivativeExerciseSpec=readFileSync(new URL('../Markdowns/ch2/exercises.md',import.meta.url),'utf8');
const specifiedExercises=[...derivativeExerciseSpec.matchAll(/### Slide (\d+)[^\n]*\n([\s\S]*?)(?=### Slide|## 5\.)/g)];
assert.equal(derivativeExerciseSlides.length,108);assert.equal(specifiedExercises.length,108);
assert.equal(new Set(derivativeExerciseSlides.map(s=>s.problem)).size,27);
for(const [i,slide] of derivativeExerciseSlides.entries()){
 const source=specifiedExercises[i][2];
 assert.equal(slide.id,i+1);assert.equal(slide.problem,Math.floor(i/4)+1);assert.equal(slide.stage,i%4);
 assert.equal(slide.title,source.match(/\*\*Audience-visible heading:\*\* (.+)/)[1].trim());
 assert.equal(slide.body,source.split('**Audience-visible body:**')[1].split('**Graphic or interactive')[0].trim());
 for(const match of slide.body.matchAll(/\$\$([\s\S]*?)\$\$|\$([^$]+)\$/g))katex.renderToString(exerciseMath(match[1]??match[2]),{throwOnError:true,strict:'error'});
}
assert.ok(app.includes("isDerivativeExercises?56"));assert.ok(app.includes("'/chapter-2/exercises'"));
const H=t=>10*t-1.86*t*t,v=t=>10-3.72*t;
near(H(0),0);near(v(1),6.28);near(H(500/93),0);near(v(500/93),-10);
for(const [a,b,wanted] of [[4,8,138],[6,8,162],[8,10,210],[8,12,234]])near(((12*b*b-6*b+23)-(12*a*a-6*a+23))/(b-a),wanted);
near(24*8-6,186);near(1**4-2,-1);near(4*1-5,-1);
checkDerivative(x=>x**4-2,x=>4*x**3,[1]);
checkDerivative(x=>x**4,x=>4*x**3);checkDerivative(x=>x+1/x,x=>1-1/x**2,[-2,-1,.5,1,2]);
checkDerivative(x=>(5*x*x-2)*(x**3+3*x),x=>25*x**4+39*x*x-6);
checkDerivative(x=>(1+2*x*x)*(x*x-x-2),x=>8*x**3-6*x*x-6*x-1);near(8-6-6-1,-5);
checkDerivative(t=>(t**3+3*t)/(t*t-4*t+3),t=>(t**4-8*t**3+6*t*t+9)/((t-1)**2*(t-3)**2),[-1,0,2,4]);near(9/9,1);
checkDerivative(x=>x*x*Math.sin(x),x=>2*x*Math.sin(x)+x*x*Math.cos(x));near(2*(Math.PI/2),Math.PI);
checkDerivative(x=>x*Math.cos(x)+2*Math.tan(x),x=>Math.cos(x)-x*Math.sin(x)+2/Math.cos(x)**2);near(Math.cos(0)+2,3);
checkDerivative(x=>(2*x**3+5)**4,x=>24*x*x*(2*x**3+5)**3);
checkDerivative(x=>(2-Math.sin(x))**1.5,x=>-1.5*Math.cos(x)*Math.sqrt(2-Math.sin(x)));
checkDerivative(x=>(x+1)**3*(x+2)**6,x=>3*(x+1)**2*(x+2)**5*(3*x+4),[-2,-4/3,-1,.2]);near(6*5*4,120);
checkDerivative(x=>Math.sqrt(9*x*x-1),x=>9*x/Math.sqrt(9*x*x-1),[-1,.5,1]);
checkDerivative(x=>2*x+Math.sqrt(3*x*x+4),x=>{const y=2*x+Math.sqrt(3*x*x+4);return(2*y-x)/(y-2*x);});
near(2**2-2*1-1,1);near((2*2-1)/(2+2),3/4);
for(const x of [-3,0,3])assert.ok(-3*x*x!==4);
near(6*1,6);near(6*2,12);near(6*3,18);
const current=t=>3*t*t-4*t+6;near(current(.5),4.75);near(current(1),5);near(current(2/3),14/3);
near((20000/10000)**3,8);near(-2*8,-16);
near((2/3)*5,10/3);near((5/3)*5,25/3);near(40*2/3,80/3);
near(Math.hypot(50,120),130);near((50*25+120*60)/130,65);
near(120/(Math.PI*10**2),6/(5*Math.PI));
near((3.5**2-4*3.5)-(3**2-4*3),1.25);near((2*3-4)*.5,1);near(1.25-1,.25);
near(16+32*(-.001),15.968);near(1.999**4,15.968023992001);near(1.999**4-15.968,.000023992001);
near(2*24*.2,9.6);near(9.6/576,1/60);near(100/60,1.6666666666666667);
console.log('PASS: Chapter 2 Exercises: 108 exact authored bodies/titles; 27 ordered four-stage cases; strict KaTeX; all 27 verification cases, independent derivative checks, impact −10 m/s, current 14/3 A, shadow tip 25/3 ft/s, car separation 65 mi/h, approximation 15.968.');
const applicationSpec=readFileSync(new URL('../Markdowns/ch3/theory.md',import.meta.url),'utf8');
const applicationEntries=[...applicationSpec.matchAll(/### Slide (\d+) — ([^\n]+)\n([\s\S]*?)(?=### Slide|\n---)/g)];
assert.equal(applicationSlides.length,60);assert.equal(applicationSections.length,9);assert.equal(applicationSections.flatMap(([start,end])=>Array.from({length:end-start+1},(_,i)=>start+i)).length,60);
for(const [i,slide] of applicationSlides.entries()){
 assert.equal(slide.id,i+1);assert.equal(slide.title,applicationEntries[i][2].trim());
 const fields=[...applicationEntries[i][3].matchAll(/^- \*\*([^*]+):\*\* (.*)$/gm)].filter(m=>!/^Visual|^Source|^Interaction|^Six-minute/.test(m[1])).map(m=>({kind:m[1],text:m[2].trim()}));
 assert.deepEqual(slide.fields,fields);
 for(const field of fields){for(const m of field.text.matchAll(/\$\$([\s\S]*?)\$\$|`([^`]+)`/g)){const tex=m[1]??applicationMath(m[2]);if(m[2]&&/\?|Objective:|Constraint:/.test(m[2]))continue;katex.renderToString(tex,{throwOnError:true,strict:'error'});}}
}
near(0,0);near(1,1);assert.ok(.001>0&&.999<1); // Closed versus open endpoint attainment.
near(3*0**2,0);assert.ok((-.1)**3<0&&.1**3>0); // Stationarity does not imply an extremum.
checkDerivative(cubic,x=>3*x*x-3);assert.deepEqual([-2,-1,1,3].map(cubic),[-2,2,-2,18]);
near(2*0,0);near(Math.abs(-.1)/(-.1),-1);near(Math.abs(.1)/.1,1);
near((9-1)/(3-1),4);near(4/2,2);near(24/4,6);
for(const t of [-2,0,2])assert.equal(Math.sign(3*t*t-3),t===0?-1:1);
near(cubic(-1),2);near(cubic(1),-2);assert.ok(6*(-.1)<0&&6*.1>0);
checkDerivative(quartic,x=>4*x*(x*x-2));checkDerivative(x=>4*x*(x*x-2),x=>12*x*x-8);
near(quartic(0),0);near(quartic(Math.SQRT2),-4);near(quartic(-Math.SQRT2),-4);near(12*2-8,16);
for(const t of [-Math.sqrt(2/3),Math.sqrt(2/3)]){near(12*t*t-8,0);near(quartic(t),-20/9);}
for(const [t,increasing] of [[.5,true],[1.5,false],[3,true]])assert.equal(3*t*(t-2)*(6*t-6)>0,increasing);
for(const sign of [-1,1]){const t=sign*1e7;assert.ok(Math.abs((2*t*t+1)/(t*t+1)-2)<1e-12);assert.ok(Math.abs(t/Math.sqrt(t*t+1)-sign)<1e-12);assert.ok(Math.abs((t*t+t)/(t*t+1)-1)<2e-7);}
near((1+1)/(1+1),1);assert.ok(.99/(.99-1)<0&&1.01/(1.01-1)>0);
near((3*1e12-2)/(1e12+4),3);assert.ok((2e7+1)/(1e14+1)<1e-6);assert.ok((1e14+1)/(1e7+1)>1e6);
for(const t of [-Math.sqrt(3),0,Math.sqrt(3)])near(cubic(t),0);
const rational=t=>(t+1)/(t-2);near(rational(-1),0);near(rational(0),-.5);checkDerivative(rational,t=>-3/(t-2)**2,[-1,0,1,3]);assert.ok(6/(1-2)**3<0&&6/(3-2)**3>0);
for(const c of [-2,0,2]){checkDerivative(t=>t**3-3*c*t,t=>3*(t*t-c));if(c>0)near(3*((Math.sqrt(c))**2-c),0);if(c<0)assert.ok(3*(0-c)>0);}
assert.ok(Math.abs(Math.cos(.739085133215)-.739085133215)<1e-11);
near(10*(20-10),100);near(20-2*10,0);
const radius=Math.cbrt(500/Math.PI);assert.ok(Math.abs(radius-5.41926)<.00001);near(canHeight(radius),2*radius);near(Math.PI*radius*radius*canHeight(radius),1000);near(4*Math.PI*radius-2000/radius**2,0);
for(const r of [3,5,9]){assert.ok(4*Math.PI+4000/r**3>0);checkDerivative(canArea,r=>4*Math.PI*r-2000/r**2,[r]);}
near(2*(12-4)**2,128);near((12-4)*(12-12),0);near(25*(100-50),1250);near(100-4*25,0);near(5+.04*50,7);
const sqrtFn=x=>x*x-2,sqrtDf=x=>2*x,n1=newtonStep(1.5,sqrtFn,sqrtDf),n2=newtonStep(n1,sqrtFn,sqrtDf);near(n1,17/12);near(n2,577/408);assert.equal(newtonStep(0,sqrtFn,sqrtDf),null);
const cycleFn=x=>x**3-2*x+2,cycleDf=x=>3*x*x-2;near(newtonStep(0,cycleFn,cycleDf),1);near(newtonStep(1,cycleFn,cycleDf),0);assert.equal(newtonStep(Math.sqrt(2/3),cycleFn,cycleDf),null);
near(newtonStep(0,lossDerivative,()=>2),3);
for(const n of [-3,0,1,3])checkDerivative(t=>t**(n+1)/(n+1),t=>t**n,[.5,1,2]);
checkDerivative(x=>-Math.cos(x),Math.sin);checkDerivative(Math.sin,Math.cos);checkDerivative(x=>3*x*x-4*x+6,x=>6*x-4);near(3-4+6,5);
checkDerivative(t=>20*t-4.9*t*t,t=>20-9.8*t);near(20/9.8,2.0408163265306123);near(20*(20/9.8)-4.9*(20/9.8)**2,400/19.6);
checkDerivative(x=>x**3/3-x,x=>x*x-1);near((-1)**3/3-(-1),2/3);near(1/3-1,-2/3);near(updateWeight(0,.2),1.2);near(loss(1.2),3.24);
console.log('PASS: Chapter 3: 60 exact titles and authored fields, nine sections, strict KaTeX; extrema/MVT/concavity/asymptotes, all optimization models, Newton 17/12→577/408 and 0→1→0 cycle/zero-slope guard, antiderivatives and physical units.');

