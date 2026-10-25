import type {Lesson} from './content';
// Content is retained in content.ts; only audience-irrelevant passages are overridden here.
export const slideTitles=[
 'Calculus Lab','Calculus (Matematika e ndryshimit)','Position & Velocity (Pozicioni dhe shpejtësia)',
 'Learning from Error (Të mësuarit nga gabimi)','Function (Funksioni)','Input & Output (Hyrja dhe dalja)',
 'Domain (Bashkësia e përcaktimit)','Range (Bashkësia e vlerave)','Four Representations (Katër paraqitje)',
 'Reading a Graph (Leximi i grafikut)','Vertical-line Test (Testi vertikal)','Even & Odd Functions (Funksionet çift dhe tek)',
 'Linear Models (Modelet lineare)','Polynomials & Powers (Polinomet dhe fuqitë)','Exponential Growth (Rritja eksponenciale)',
 'Periodic & Rational Functions','Piecewise Functions (Funksionet pjesë-pjesë)','Transformations (Transformimet)',
 'Composition (Kompozimi)','Mathematical Modeling (Modelimi matematikor)','Slope (Pjerrësia)',
 'Average Rate of Change (Shkalla mesatare e ndryshimit)','Secant → Tangent (Prerësja → tangjentja)',
 'Instantaneous Velocity (Shpejtësia e çastit)','Difference Quotient (Herësi i diferencave)',
 'Limit (Limiti)','One-sided Limits (Limitet e njëanshme)','Function Value ≠ Limit',
 'When Limits Fail (Kur limiti nuk ekziston)','Infinite Limits (Limitet e pafundme)',
 'Numerical & Graphical Limits','Epsilon–Delta (Saktësia e limitit)','Limit Laws (Ligjet e limiteve)',
 'Direct Substitution (Zëvendësimi i drejtpërdrejtë)','Factoring (Faktorizimi)','Rationalization (Racionalizimi)',
 'Squeeze Theorem (Teorema e shtrëngimit)','Continuity (Vazhdueshmëria)','Discontinuities (Shkëputjet)',
 'Intermediate Value Theorem','Limits & Continuity (Limitet dhe vazhdueshmëria)','Area as a Limit (Sipërfaqja si limit)',
 'Predictive Functions (Funksionet parashikuese)','Linear Regression (Regresioni linear)',
 'Prediction Error (Gabimi i parashikimit)','Loss Function (Funksioni i humbjes)',
 'Minimizing Loss (Minimizimi i humbjes)','Loss Derivative (Derivati i humbjes)',
 'Gradient Descent (Zbritja sipas gradientit)','Change, Motion, Learning'
];
export const derivationSlides=[25,32,34,35,36,37,41,48];
export const interactiveSlides=[2,3,4,5,6,14,18,21,22,23,24,26,27,28,29,30,31,38,39,42,47,49];
export const slideCopy:Record<number,Partial<Lesson>>={
4:{meaning:'x është input-i, w parametri që rregullojmë dhe L mat gabimin.'},
9:{meaning:'Me fjalë, me tabelë, me grafik dhe me formulë: katër paraqitje të së njëjtës varësi.'},
15:{concept:'Në një model eksponencial, hapa të barabartë të input-it shumëzojnë output-in me një faktor konstant. Modeli linear shton një shumë konstante. Logarithm e përmbys lidhjen eksponenciale: log₂(8)=3 sepse 2³=8.'},
19:{meaning:'Për f+g dhe fg marrim prerjen D_f∩D_g. Te f/g kërkojmë edhe g(x)≠0. Thjeshtimi i formulës nuk i heq kufizimet fillestare të domain.'},
25:{concept:'Difference Quotient lidh algjebrën me ndryshimin e çastit. Fillimisht mbajmë h≠0. Vetëm pasi thjeshtojmë herësin, marrim limitin kur h→0.'},
29:{meaning:'Luhatjet nuk zvogëlohen: ka input-e arbitrarily afër zeros me output 1 dhe input-e të tjera me output −1.'},
32:{example:'Provojmë lim (3x+1)=7 kur x→2. Për çdo tolerancë ε>0, gjejmë një δ që garanton gabim më të vogël se ε.',equation:'0<|x-2|<\\delta\\ \\Rightarrow\\ |3x+1-7|<\\varepsilon'},
35:{example:'Llogarisim limitin në x=2. Zëvendësimi fillestar jep formën e papërcaktuar 0/0.'},
36:{example:'Llogarisim limitin në x=0 duke shumëzuar me shprehjen e konjuguar.'},
37:{example:'Funksioni sin(1/x) luhatet pranë zeros. Faktori x² e ngushton amplitudën në zero.'},
41:{example:'Provojmë se 1/x²→+∞ kur x→0. Nuk po kërkojmë një limit real të fundëm.',equation:'\\forall M>0\\;\\exists\\delta>0:\\quad0<|x|<\\delta\\Rightarrow\\frac1{x^2}>M',result:'\\delta=\\frac1{\\sqrt M}'},
42:{concept:'Ndajmë intervalin në copa dhe mbledhim sipërfaqet e drejtkëndëshave. Për një funksion të vazhdueshëm, përafrimet i afrohen sipërfaqes kur gjerësitë shkojnë në zero.',check:'Pse shuma me skajet e djathta e mbivlerëson sipërfaqen për f(x)=x² në [0,1]?',answer:'Sepse x² është rritës në [0,1]. Lartësia në skajin e djathtë është maksimumi në çdo nëninterval; çdo drejtkëndësh qëndron mbi kurbën.',steps:['Me n=2, A₂=(0.5²+1²)·0.5=0.625.','Me n=4, A₄=0.46875.','Kur n→∞, Aₙ→1/3.'],example:'Në një grafik velocity–time me v≥0, sipërfaqja ka njësi (m/s)·s=m dhe jep zhvendosjen.'},
46:{steps:['Për të dhënat (1,3),(2,6), gabimet janë w−3 dhe 2w−6.','MSE=[(w−3)²+4(w−3)²]/2=(5/2)(w−3)².','Normalizojmë: L=(2/5)MSE=(w−3)². Vlera numerike ndryshon, minimumi mbetet në w=3.']},
48:{concept:'Derivati i loss mat ndryshimin e L për një ndryshim të vogël në w. Është limiti i pjerrësisë, por ndryshorja e pavarur është parametri w, jo koha t.',example:'Për L(w)=(w−3)², gjejmë pjerrësinë nga përkufizimi i derivatit.'},
50:{concept:'Functions lidhin madhësi. Limits përshkruajnë sjelljen pranë një input-i. Derivative mat ndryshimin lokal: në lëvizje ndaj kohës, në optimizim ndaj parametrit.'}
};
