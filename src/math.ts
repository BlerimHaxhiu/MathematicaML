export const loss=(w:number)=>(w-3)**2;
export const lossDerivative=(w:number)=>2*(w-3);
export const updateWeight=(w:number,eta:number)=>w-eta*lossDerivative(w);
export const secantSlope=(a:number,h:number)=>2*a+h;
export const rightArea=(n:number)=>(n+1)*(2*n+1)/(6*n*n);
export const fmt=(n:number,d=3)=>Number.isFinite(n)?Number(n.toFixed(d)).toString():'outside numerical range';
