export type Motif='function'|'tangent'|'maximum'|'area'|'volume'|'exponential'|'integration'|'arc'|'differential'|'polar'|'sequence'|'vectors'|'space-curve'|'surface'|'double-integral'|'field'|'oscillation'|'preview';
export type Chapter={number:number;title:string;illustration:Motif;theory?:string;exercises?:string;theorySlides?:number;exerciseSlides?:number};
export const chapters:Chapter[]=[
 {number:1,title:'Functions and Limits',illustration:'function',theory:'/chapter-1',exercises:'/chapter-1/exercises',theorySlides:50,exerciseSlides:50},
 {number:2,title:'Derivatives',illustration:'tangent',theory:'/chapter-2',theorySlides:60},
 {number:3,title:'Applications of Differentiation',illustration:'maximum'},
 {number:4,title:'Integrals',illustration:'area'},
 {number:5,title:'Applications of Integration',illustration:'volume'},
 {number:6,title:'Inverse Functions: Exponential, Logarithmic, and Inverse Trigonometric Functions',illustration:'exponential'},
 {number:7,title:'Techniques of Integration',illustration:'integration'},
 {number:8,title:'Further Applications of Integration',illustration:'arc'},
 {number:9,title:'Differential Equations',illustration:'differential'},
 {number:10,title:'Parametric Equations and Polar Coordinates',illustration:'polar'},
 {number:11,title:'Infinite Sequences and Series',illustration:'sequence'},
 {number:12,title:'Vectors and the Geometry of Space',illustration:'vectors'},
 {number:13,title:'Vector Functions',illustration:'space-curve'},
 {number:14,title:'Partial Derivatives',illustration:'surface'},
 {number:15,title:'Multiple Integrals',illustration:'double-integral'},
 {number:16,title:'Vector Calculus',illustration:'field'},
 {number:17,title:'Second-Order Differential Equations',illustration:'oscillation'}
];
