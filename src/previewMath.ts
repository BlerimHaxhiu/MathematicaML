import {carMeasurements,fineMeasurements} from './preview.ts';
export const partialSum=(n:number)=>1-2**(-n);
export const polygonInside=(n:number)=>n/2*Math.sin(2*Math.PI/n);
export const leftArea=(n:number)=>(n-1)*(2*n-1)/(6*n*n);
export const rightArea=(n:number)=>(n+1)*(2*n+1)/(6*n*n);
export const achilles=(n:number)=>2*(1-2**(1-n));
export const tortoise=(n:number)=>2-2**(1-n);
export const analyticPosition=(t:number)=>t*t; // k=1 m/s², t in seconds.
export const analyticVelocity=(t:number)=>2*t; // m/s.
// The measured points define secants only, never an invented exact motion law.
export function bookAverage(h:number){
 const endpoint=[...carMeasurements,...fineMeasurements].find(([t])=>Math.abs(t-(2+h))<1e-9);
 return endpoint?(endpoint[1]-9)/h:NaN;
}
