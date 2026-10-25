---
id: ch1-exercises
kind: solved-exercises-presentation
course: Mathematics for Machine Learning
title: "Chapter 1 — Functions and Limits: Solved Exercises"
source: "James Stewart, Calculus, Eighth Edition, Chapter 1, Sections 1.1–1.8"
source_pdf: "Calculus (James Stewart).pdf"
source_printed_pages: "20–22, 34, 44, 49, 60–61, 70–71, 81, 92–93"
source_page_mapping: "printed page = PDF page - 32 (1-based)"
language: en
slide_count: 50
exercise_cases: 25
status: AUTHORITATIVE EDUCATIONAL CONTENT — implement, do not rewrite
---

# Chapter 1 — Functions and Limits: Solved Exercises

This is the **authoritative English specification** for a separate browser presentation of **50 numbered slides**, consisting of **25 carefully selected textbook exercise cases**, each taught in two stages: (1) problem setup and reasoning prompt, followed by (2) complete worked solution and mathematical interpretation. Section 1.5 includes the two related one-sided-limit exercises 29–30 as one paired case; thus the deck references **26 individually numbered Stewart exercises**.

The problem statements below are concise pedagogical restatements of verified exercises in Stewart's *Calculus*, 8th ed. They retain the essential given data and tasks. Their worked solutions and slide-by-slide treatment are newly authored. For exact textbook phrasing and original illustrations, refer to the specified printed page. Draw new diagrams; **do not paste textbook page images**.

## A. Implementation and accuracy contract (internal; never display on slides)

- Route: suggest `/chapter-1/exercises`, or follow the **existing** landing-page/navigation scheme; link this deck under **Chapter 1 → Exercises**, alongside the existing **Theory** presentation. Do not break `/preview` or Chapter 1 Theory.
- Exactly **50 numbered slides**. A 6-minute mid-session break, if the presentation engine supports one, may follow slide **26** and must **not** count as a slide. Do not create a new break subsystem for this one presentation.
- All **student-facing text**, axis titles, legends, prompts, answers, button labels, and explanatory notes must be **English only**.
- The slideshow is **presenter-facing**, not a self-study dashboard: no notes sidebar, timing labels, teaching objectives, progress database, exams, or extra site modes.
- Presentation style: white/near-white 16:9 canvas; navy text, teal primary curve, blue comparisons, amber key points; large KaTeX equations; restrained progressive reveals; legible at 1366×768 and 1920×1080. Use the existing renderer and math/graph components.
- **Use true mathematical typesetting:** proper fractions, signs, subscripts, units, domains, limits, piecewise braces, and implication arrows. Do not typeset mathematics as plain `v=s/t`, `x^2`, or `lim x->a` strings. For limits and fractions, use proper `\lim`, `\frac`, `\to` KaTeX markup in implementation.
- Make a clear distinction between **average velocity / signed rate** and **instantaneous velocity**; tank draining is a *negative* volume rate. Label units consistently.
- Preserve exact/equivalent answers before rounding. Make clear whether a limit exists as a *finite real number*. A `0/0` substitution is an indeterminate form, never the answer.
- Interactive components should be **reused** if already present. Where the specification asks for a dynamic graph, a simple SVG/React slider or progressive reveal is sufficient. Never simulate a wrong numerical result for effect. **No new graph/chart dependency without necessity.**
- The `Source`, `Visual`, `Reveal`, `Check`, and `Implementation` lines below are internal instructions and must **never appear on the student-facing slide**.
- Source slide-to-slide mapping is precise. All datasets were reviewed against the printed source pages. Values beyond the cited exercises must not be presented as Stewart's words.
- Worked-exercise decks complement the theory deck. Do not duplicate the eight ML extension slides; use relevant physical context where the actual textbook problems require it.

## B. Overview and exact allocation

| Section | Exercise cases | Slides | Concepts |
|---|---|---|---|
| §1.1 Four Ways to Represent a Function | #57, #64, #71 | 01–06 | Domain and area model, piecewise cost, parity |
| §1.2 Mathematical Models | #17, #18, #19 | 07–12 | Linear fit, slope and intercept, units |
| §1.3 New Functions from Old Functions | #33, #43, #55 | 13–18 | Composition, decomposition, geometric modeling |
| §1.4 Tangent and Velocity Problems | #1, #2, #3 | 19–24 | Numerical secants, units, limiting tangent |
| §1.5 Limit of a Function | #15, #29–30 | 25–28 | One-sided limits, jump, infinite behavior |
| §1.6 Calculating Limits Using Limit Laws | #1, #10, #12, #18, #21, #35 | 29–40 | Limit laws, holes, factoring, binomial, conjugate, Squeeze |
| §1.7 Precise Definition of a Limit | #7 | 41–42 | A sufficient epsilon–delta bound |
| §1.8 Continuity | #23, #39, #43, #53 | 43–50 | Removable discontinuity, piecewise joins, one-sided continuity, IVT |

**Slide rhythm:** odd slide = original textbook **problem and visualization**; even slide = **fully solved answer**. Questions are shown first; solutions become visible on the next slide, not merely hidden in speaker notes.

## C. Slide-by-slide authoritative content

### Slides 01–02 — Stewart §1.1, Exercise 57 (printed p. 22): Rectangle with fixed perimeter

**Slide 01 — Problem: Maximize Understanding of the Domain**
- **On screen:** `A rectangle has perimeter 20 m. Express its area as a function of the length x of one side. State the physically meaningful domain.`
- **Visual:** Original rectangle diagram with adjacent sides `x` and `y`, an external perimeter label `20 m`, and an adjacent empty area plot (horizontal axis `x (m)`, vertical axis `A (m²)`).
- **Prompt:** `What must the other side equal? Can x be zero?`

**Slide 02 — Solution: From Geometry to a Function**
- **Reveal step 1:** `2x+2y=20 \Rightarrow y=10-x`.
- **Reveal step 2:** `A(x)=xy=x(10-x)=10x-x^2`.
- **Reveal step 3:** `Physical domain: 0<x<10` (lengths strictly positive). The algebraic expression is defined for all real x, but physical interpretation restricts x.
- **Visual:** Downward parabola on `0<x<10` with open endpoint dots `(0,0)` and `(10,0)`; mark vertex `(5,25)` as a visual observation, not a derivative calculation.
- **Answer:** `A(x)=x(10-x) m², 0<x<10`.
- **Check:** Do not claim the degenerate rectangles at endpoints are allowed when the problem presumes an actual rectangle.

### Slides 03–04 — Stewart §1.1, Exercise 64 (printed p. 22): Cell phone billing

**Slide 03 — Problem: Piecewise Cost Function**
- **On screen:** `Monthly base charge: $35. First 400 minutes included. Each additional minute costs $0.10. Write C(x) for 0≤x≤600.`
- **Visual:** Billing timeline `0 → 400 → 600 minutes`; a fixed-cost band up to 400 and a rate band beyond 400.
- **Prompt:** `Does the charge jump at exactly 400 minutes?`

**Slide 04 — Solution: Piecewise Formula and Graph**
- **Equation:** `C(x)=\begin{cases}35,&0\le x\le400,\\35+0.10(x-400),&400<x\le600.\end{cases}`
- **Checks:** `C(400)=35`, `C(500)=45`, `C(600)=55` (USD).
- **Visual:** A horizontal segment from `(0,35)` to `(400,35)` and then a straight rising segment ending at `(600,55)`. Show a joined (not broken) corner at x=400.
- **Interpretation:** `The cost is continuous at 400 minutes, but the rate of increase changes there.`

### Slides 05–06 — Stewart §1.1, Exercise 71 (printed p. 22): Even and odd functions

**Slide 05 — Problem: Symmetry Predicts Points**
- **On screen:** `The point (5,3) lies on the graph of f. What other point must lie on the graph if (a) f is even or (b) f is odd?`
- **Visual:** Empty axes containing an amber point at `(5,3)`, plus a thin y-axis symmetry guide and a central (origin) symmetry guide.

**Slide 06 — Solution: Reflection Rules**
- **Even:** `f(-x)=f(x)`, hence `f(-5)=3` and `(-5,3)` is required.
- **Odd:** `f(-x)=-f(x)`, hence `f(-5)=-3` and `(-5,-3)` is required.
- **Visual:** Side-by-side plots of the required points (not false claims about the shape of the entire unknown curve). Arrows show reflection in the y-axis versus rotation 180° around the origin.
- **Check:** A single point does not uniquely determine an even or odd function.

### Slides 07–08 — Stewart §1.2, Exercise 17 (printed p. 34): Cricket temperature model

**Slide 07 — Problem: Determine a Linear Model from Two Measurements**
- **On screen:** `At 113 chirps/min, temperature is 70°F; at 173 chirps/min, it is 80°F. Model temperature T as a linear function of chirp rate N. Predict T(150).`
- **Visual:** Coordinate graph `N (chirps/min)` vs `T (°F)` with `(113,70)` and `(173,80)` emphasized.

**Slide 08 — Solution: Slope, Intercept, and Prediction**
- **Slope:** `m=\frac{80-70}{173-113}=\frac{1}{6}` °F per (chirp/min).
- **Model:** `T(N)=70+\frac{N-113}{6}` °F.
- **Prediction:** `T(150)=70+\frac{37}{6}=76\frac{1}{6}\,^{\circ}\mathrm{F}\approx76.17\,^{\circ}\mathrm{F}`.
- **Visual:** Draw the line through both measured points and show interpolated prediction `(150, 76.17)` with dashed guides.
- **Interpretation:** A higher chirp rate predicts a higher temperature in this empirical linear approximation. The model is not a universal physical law.

### Slides 09–10 — Stewart §1.2, Exercise 18 (printed p. 34): Chair manufacturing cost

**Slide 09 — Problem: Find the Fixed and Variable Costs**
- **On screen:** `Producing 100 chairs costs $2,200; producing 300 chairs costs $4,800. Assume cost C(q) is linear. Find the model and explain the slope and intercept.`
- **Visual:** Points `(100,2200)` and `(300,4800)` on `chairs q` / `cost C ($)` axes.

**Slide 10 — Solution: C(q)=13q+900**
- **Slope:** `m=\frac{4800-2200}{300-100}=13` USD/chair.
- **Intercept:** `b=2200-13(100)=900` USD.
- **Equation:** `C(q)=13q+900` for `q\ge0` within the model's realistic operating range.
- **Interpretation:** `$13` is incremental cost per chair; `$900` is estimated daily fixed cost, even at zero output.
- **Visual:** Line with intercept `(0,900)`, both original measured points, and slope triangle `Δq=200`, `ΔC=2600`.

### Slides 11–12 — Stewart §1.2, Exercise 19 (printed p. 34): Ocean pressure with depth

**Slide 11 — Problem: Pressure Is a Function of Depth**
- **On screen:** `At the ocean surface, pressure is 15 lb/in². Pressure rises by 4.34 lb/in² for each 10 ft of descent. Find P(d), then find depth when P=100 lb/in².`
- **Visual:** Water column, depth axis `d (ft)` increasing downward; pressure indicated at the surface and an unknown target depth.

**Slide 12 — Solution: Respect Physical Units**
- **Rate:** `\frac{4.34\,\mathrm{lb/in^2}}{10\,\mathrm{ft}}=0.434\,\frac{\mathrm{lb/in^2}}{\mathrm{ft}}`.
- **Model:** `P(d)=15+0.434d`, where `d\ge0` is in feet and `P` in lb/in².
- **Solve:** `100=15+0.434d\Rightarrow d=\frac{85}{0.434}\approx195.85\,\mathrm{ft}`.
- **Visual:** Linear `P` vs `d` chart with point `(0,15)` and dashed intersection `(195.85,100)`.
- **Check:** Do not mix pressure units with depth units or confuse gauge pressure with the total surface pressure specified in the problem.

### Slides 13–14 — Stewart §1.3, Exercise 33 (printed p. 44): Function composition

**Slide 13 — Problem: Four Compositions**
- **On screen:** `f(x)=3x+5`, `g(x)=x²+x`. `Find f∘g, g∘f, f∘f, and g∘g. State their domains.`
- **Visual:** Function machine diagrams distinguishing input order, `g → f` versus `f → g`.

**Slide 14 — Solution: Composition Order Matters**
- `(f\circ g)(x)=3(x^2+x)+5=3x^2+3x+5`.
- `(g\circ f)(x)=(3x+5)^2+(3x+5)=9x^2+33x+30`.
- `(f\circ f)(x)=3(3x+5)+5=9x+20`.
- `(g\circ g)(x)=(x^2+x)^2+(x^2+x)=x^4+2x^3+2x^2+x`.
- **Domains:** all four are polynomial functions: `\mathbb{R}`.
- **Visual:** Select x=1 and contrast `f(g(1))=11` against `g(f(1))=72` (because f(1)=8 and g(8)=72).
- **Check:** The input–output machine must match the algebra and numerical example.

### Slides 15–16 — Stewart §1.3, Exercise 43 (printed p. 44): Decompose a function

**Slide 15 — Problem: Express a Power as a Composition**
- **On screen:** `F(x)=(2x+x²)^4. Write F=f∘g by choosing an inner function g and an outer function f.`
- **Visual:** Equation as nested colored braces: inner `2x+x²`, outer `(...)⁴`.

**Slide 16 — Solution: Inside First, Outside Second**
- `g(x)=2x+x^2`, `f(u)=u^4`.
- `f(g(x))=[g(x)]^4=(2x+x^2)^4=F(x)`.
- **Domains:** both choices valid for every real input.
- **Visual:** Two-stage function machine; optionally show that alternative decompositions may exist.
- **Takeaway:** Correct function composition is verified by substitution, not by visual naming alone.

### Slides 17–18 — Stewart §1.3, Exercise 55 (printed p. 44): Circular water wave

**Slide 17 — Problem: A Ripple Spreads Across a Lake**
- **On screen:** `A circular ripple expands radially at 60 cm/s. Express radius r as a function of time t, then write area A as a function of t by composition.`
- **Visual:** Animated circle expanding at a consistent radial rate; label radius in centimeters and time in seconds. Initial condition `r(0)=0`.

**Slide 18 — Solution: Composition Models a Physical Process**
- `r(t)=60t\ \mathrm{cm}`, `t\ge0` (when t is measured in seconds).
- `A(r)=\pi r^2`.
- `(A\circ r)(t)=\pi(60t)^2=3600\pi t^2\ \mathrm{cm}^2`.
- **Visual:** Two synchronized views: circle radius r(t) and area-versus-time parabola. Example `t=1 s`: `r=60 cm`, `A=3600π cm²`.
- **Check:** Do not say area increases at a constant rate: the radius does, while the area is quadratic in time.

### Slides 19–20 — Stewart §1.4, Exercise 1 (printed p. 49): Draining tank

**Slide 19 — Problem: Rate of Water Leaving a Tank**
- **On screen:** `Recorded remaining volume V (gal):` table `t (min): 5,10,15,20,25,30` and `V (gal): 694,444,250,111,28,0`. `At P=(15,250), calculate secant slopes to all other measurements. Estimate the tangent slope.`
- **Visual:** Scatterplot `(t,V)` with P highlighted, negative-slope secant through a selectable Q. The original data are measurements, not an exact analytic curve.

**Slide 20 — Solution: Signed Rate from Measurements**
- **Definition:** `m_{PQ}=\frac{V(t_Q)-250}{t_Q-15}` gal/min.
- **Slope table:**
  - `Q: t=5 → (694−250)/(5−15)=−44.4`.
  - `t=10 → (444−250)/(10−15)=−38.8`.
  - `t=20 → (111−250)/(20−15)=−27.8`.
  - `t=25 → (28−250)/(25−15)=−22.2`.
  - `t=30 → (0−250)/(30−15)=−16.67` gal/min.
- **Estimate:** average the nearest bracketing secant slopes: `m\approx(-38.8-27.8)/2=-33.3\,\mathrm{gal/min}`.
- **Physical meaning:** remaining volume is falling at roughly 33.3 gal/min around t=15 min. `dV/dt` is negative; the magnitude of outflow is positive.
- **Check:** This is a numerical estimate, not an exact derivative determined by the table.

### Slides 21–22 — Stewart §1.4, Exercise 2 (printed p. 49): Heart rate from a cardiac monitor

**Slide 21 — Problem: Estimate Instantaneous Heart Rate**
- **On screen:** Heartbeat counts: `(t,min; H,beats)` = `(36,2530),(38,2661),(40,2806),(42,2948),(44,3080)`. `Estimate heart rate at t=42 min from nearby secants.`
- **Visual:** Cumulative heartbeats plotted against time, fixed point `(42,2948)`, movable Q at the other recorded times.

**Slide 22 — Solution: Beats per Minute Are Slopes**
- `(H(42)-H(36))/(42-36)=418/6\approx69.67` beats/min.
- `(H(42)-H(38))/(42-38)=287/4=71.75` beats/min.
- `(H(42)-H(40))/(42-40)=142/2=71` beats/min.
- `(H(44)-H(42))/(44-42)=132/2=66` beats/min.
- **Central estimate:** `(H(44)-H(40))/(44-40)=274/4=68.5` beats/min.
- **Interpretation:** `≈69 beats/min` is a reasonable estimate; the measurement spacing means no exact instantaneous rate is known.
- **Check:** The chart y-axis is **total heartbeats**; the tangent slope has units **beats/min**.

### Slides 23–24 — Stewart §1.4, Exercise 3 (printed p. 49): Tangent to a rational curve

**Slide 23 — Problem: Secants Approaching P=(2,−1)**
- **On screen:** `f(x)=1/(1−x)` and `P=(2,−1)`. `Compute the slope of PQ for Q=(x,f(x)) and predict the tangent slope as x→2.`
- **Visual:** Plot the branch for x>1, mark the vertical asymptote x=1 as dashed, fix P, and move Q on the same branch. Never draw the curve through x=1.

**Slide 24 — Solution: Algebra Reveals the Limit**
- `m_{PQ}=\frac{\frac{1}{1-x}-(-1)}{x-2}=\frac{1}{x-1}`, valid for `x\ne1,2`.
- **Table (six decimals):** `x=1.5 → 2.000000`, `1.9 → 1.111111`, `1.99 → 1.010101`, `1.999 → 1.001001`; `2.5 → 0.666667`, `2.1 → 0.909091`, `2.01 → 0.990099`, `2.001 → 0.999001`.
- `m_{\mathrm{tangent}}=\lim_{x\to2}\frac{1}{x-1}=1`.
- **Tangent equation:** `y+1=1(x-2)\Rightarrow y=x-3`.
- **Visual:** Secant Q approaches P, tangent y=x−3 appears; slope readout approaches 1.
- **Check:** The secant is undefined at x=2 even though its limiting slope exists. Function itself is undefined at x=1.

### Slides 25–26 — Stewart §1.5, Exercise 15 (printed p. 60): A limit that does not exist

**Slide 25 — Problem: Design a Graph With a Jump**
- **On screen:** `Sketch a function satisfying lim(x→0−)f(x)=−1, lim(x→0+)f(x)=2, and f(0)=1. Does lim(x→0)f(x) exist?`
- **Visual:** Blank coordinate axes with the three distinct requested y-levels labelled `−1`, `1`, `2`.

**Slide 26 — Solution: One-Sided Limits Must Agree**
- **One valid construction:** `f(x)=\begin{cases}-1,&x<0,\\1,&x=0,\\2,&x>0.\end{cases}`.
- **Graph:** horizontal left branch y=−1, open dot at `(0,−1)`; solid dot `(0,1)`; horizontal right branch y=2, open dot `(0,2)`.
- `\lim_{x\to0^-}f(x)=-1 \ne 2=\lim_{x\to0^+}f(x)`, hence `\lim_{x\to0}f(x)` **does not exist**.
- **Check:** f(0)=1 does not determine the neighboring limit.

### Slides 27–28 — Stewart §1.5, Exercises 29–30 (printed p. 61): Infinite one-sided limits

**Slide 27 — Problem: Approach x=5 from Both Sides**
- **On screen:** `Investigate f(x)=(x+1)/(x−5) as x→5⁺ and x→5⁻. Why are the answers different?`
- **Visual:** Rational-function graph with vertical asymptote `x=5`, two colored approach arrows.

**Slide 28 — Solution: The Denominator Controls the Sign**
- For `x\to5^+`, numerator `x+1→6>0`, denominator `x−5→0^+`; `f(x)→+\infty`.
- For `x\to5^-`, denominator `x−5→0^-`; `f(x)→-\infty`.
- **Display:** `\lim_{x\to5^+}\frac{x+1}{x-5}=+\infty`; `\lim_{x\to5^-}\frac{x+1}{x-5}=-\infty`.
- **Conclusion:** No finite two-sided limit; the two sides also diverge in different directions.
- **Graph:** Never join the two branches across the asymptote.

### Slides 29–30 — Stewart §1.6, Exercise 1 (printed p. 70): Apply limit laws correctly

**Slide 29 — Problem: What Can the Given Limits Tell Us?**
- **On screen:** `lim(x→2)f(x)=4`, `lim(x→2)g(x)=−2`, `lim(x→2)h(x)=0`. `Compute limits of f+5g, g³, √f, 3f/g, g/h, and gh/f if justified.`
- **Visual:** Six small mathematical expression tiles; no fake function graph without data.

**Slide 30 — Solution: Five Determined, One Not Determined**
- `(a) 4+5(-2)=-6`.
- `(b) (-2)^3=-8`.
- `(c) \sqrt4=2`.
- `(d) 3(4)/(-2)=-6`.
- `(e) g/h: denominator limit 0 while numerator limit −2; the quotient law does not apply; **the provided data do not determine a finite limit or a unique direction of divergence**.`
- `(f) [(-2)(0)]/4=0`.
- **Check:** Do not report `(e)=-\infty` automatically: the sign and behavior of h(x) near 2 are unspecified.

### Slides 31–32 — Stewart §1.6, Exercise 10 (printed p. 70): Algebraic cancellation and holes

**Slide 31 — Problem: Is Canceling Always Legal?**
- **On screen:** `For x≠2, simplify (x²+x−6)/(x−2) and compute its limit as x→2. Explain why the canceled expression is not equal to x+3 at x=2.`
- **Visual:** Curve of the rational expression (a line with a hole) beside the complete line y=x+3.

**Slide 32 — Solution: A Hole Can Have a Limit**
- `x^2+x-6=(x-2)(x+3)`.
- `\frac{x^2+x-6}{x-2}=x+3\quad(x\ne2)`.
- `\lim_{x\to2}\frac{x^2+x-6}{x-2}=\lim_{x\to2}(x+3)=5`.
- **Visual:** Open circle at `(2,5)` on the original function; filled circle at `(2,5)` ONLY on the extended line y=x+3.
- **Check:** A limit does not require that the original function be defined at x=2.

### Slides 33–34 — Stewart §1.6, Exercise 12 (printed p. 70): Rational limit by factorization

**Slide 33 — Problem: Resolve the Indeterminate Form**
- **On screen:** `Evaluate lim(x→−3) (x²+3x)/(x²−x−12). Direct substitution produces 0/0. What factor is shared?`
- **Visual:** Color-code numerator and denominator factors after an optional reveal.

**Slide 34 — Solution: Cancel a Common Factor Before Taking the Limit**
- `\frac{x^2+3x}{x^2-x-12}=\frac{x(x+3)}{(x-4)(x+3)}=\frac{x}{x-4}\quad (x\ne-3,4)`.
- `\lim_{x\to-3}\frac{x}{x-4}=\frac{-3}{-7}=\frac37`.
- **Visual:** Draw the simplified rational curve, show the open circle at `(-3,3/7)` and preserve the vertical asymptote at `x=4`.
- **Check:** The original domain excludes **both** x=−3 and x=4.

### Slides 35–36 — Stewart §1.6, Exercise 18 (printed p. 70): A binomial difference quotient

**Slide 35 — Problem: Evaluate a Cubic Difference Quotient**
- **On screen:** `Evaluate lim(h→0) [(2+h)³−8]/h without substituting h=0 into the original fraction.`
- **Visual:** An expandable binomial `(2+h)³` with h shrinking toward 0.

**Slide 36 — Solution: Expand, Cancel, Then Limit**
- `(2+h)^3=8+12h+6h^2+h^3`.
- `\frac{(2+h)^3-8}{h}=12+6h+h^2\quad (h\ne0)`.
- `\lim_{h\to0}(12+6h+h^2)=12`.
- **Interpretation:** This is the slope of the tangent to y=x³ at x=2, derived with the same limiting process introduced in §1.4; no need to invoke differentiation rules.
- **Visual:** Secant for y=x³ from x=2 to x=2+h, slope converging to 12.

### Slides 37–38 — Stewart §1.6, Exercise 21 (printed p. 70): Rationalizing radicals

**Slide 37 — Problem: A Conjugate Unlocks the Limit**
- **On screen:** `Evaluate lim(h→0) [√(9+h)−3]/h. Explain why direct substitution is not enough.`
- **Visual:** Conjugate pair `√(9+h)−3` and `√(9+h)+3` visually joined.

**Slide 38 — Solution: Multiply by the Conjugate**
- `\frac{\sqrt{9+h}-3}{h}\cdot\frac{\sqrt{9+h}+3}{\sqrt{9+h}+3}`.
- `=\frac{(9+h)-9}{h(\sqrt{9+h}+3)}=\frac{1}{\sqrt{9+h}+3}\quad(h\ne0)`.
- `\lim_{h\to0}\frac{1}{\sqrt{9+h}+3}=\frac16`.
- **Check:** The expression is real for `h\ge-9`, but the original quotient is undefined at h=0. The limiting value is 1/6.

### Slides 39–40 — Stewart §1.6, Exercise 35 (printed p. 71): Squeeze Theorem

**Slide 39 — Problem: Bound an Oscillating Function**
- **On screen:** `Show that lim(x→0) x² cos(20πx)=0 using the Squeeze Theorem. Plot the oscillating function and two bounding curves.`
- **Visual:** Three exactly labeled curves `y=−x²`, `y=x²cos(20πx)`, and `y=x²` on e.g. `−0.5≤x≤0.5`; distinct line styles.

**Slide 40 — Solution: Squeeze the Oscillation to Zero**
- `-1\le\cos(20\pi x)\le1`.
- `-x^2\le x^2\cos(20\pi x)\le x^2` for all real x because `x²≥0`.
- `\lim_{x\to0}(-x^2)=0=\lim_{x\to0}x^2`.
- **Therefore:** `\boxed{\lim_{x\to0}x^2\cos(20\pi x)=0}`.
- **Visual:** Animate narrowing neighborhood around x=0 and show the oscillatory curve remaining inside the parabola envelopes. The function itself is zero at x=0 as well.

### Slides 41–42 — Stewart §1.7, Exercise 7 (printed p. 81): Epsilon–delta control

**Slide 41 — Problem: Make a Cubic Limit Precise**
- **On screen:** `For lim(x→2)(x³−3x+4)=6, find a valid δ for ε=0.2 and ε=0.1. Your δ need not be the largest possible.`
- **Visual:** A cubic plot with horizontal target band `6±ε` and a vertical input band `2±δ`.

**Slide 42 — Solution: Construct a Guaranteed δ**
- `|(x^3-3x+4)-6|=|x^3-3x-2|=|x-2|(x+1)^2`.
- **Local bound:** If `0<|x-2|<1`, then `1<x<3`, so `(x+1)^2<16`.
- **Sufficient choice:** `\delta=\min\left\{1,\frac{\varepsilon}{16}\right\}`.
- For `ε=0.2`: `δ=0.0125`.
- For `ε=0.1`: `δ=0.00625`.
- **Proof:** `0<|x-2|<δ` implies `|f(x)-6|<16|x-2|<16δ≤ε`.
- **Visual:** Slider selects the two prescribed ε values and updates the accepted δ band. Mark this δ as *sufficient, not optimal*.

### Slides 43–44 — Stewart §1.8, Exercise 23 (printed p. 92): Repair a removable discontinuity

**Slide 43 — Problem: What Should f(2) Be?**
- **On screen:** `For x≠2, f(x)=(x²−x−2)/(x−2). Choose f(2) so that the extended function becomes continuous at x=2.`
- **Visual:** An initially missing point at `(2,?)` on a straight line, with a detachable fill-in marker.

**Slide 44 — Solution: Define the Missing Value by the Limit**
- `x^2-x-2=(x-2)(x+1)`.
- `f(x)=x+1` whenever `x≠2`.
- `\lim_{x\to2}f(x)=3`.
- **Answer:** define `f(2)=3`; the resulting extension is continuous at 2.
- **Visual:** Change the open circle at `(2,3)` into a filled circle **only after** defining the missing value.
- **Check:** Avoid conflating §1.6 Exercise 10's distinct numerator with this exercise.

### Slides 45–46 — Stewart §1.8, Exercise 39 (printed p. 92): Piecewise continuity at a join

**Slide 45 — Problem: Is the Piecewise Function Continuous Everywhere?**
- **On screen:** `f(x)=\begin{cases}1-x^2,&x\le1,\\\sqrt{x-1},&x>1.\end{cases}` `Test the join at x=1, then explain continuity on ℝ.`
- **Visual:** Plot left parabola branch ending at `(1,0)` and right square-root branch starting immediately to its right.

**Slide 46 — Solution: Compare Both Limits With the Function Value**
- `f(1)=1-1^2=0`.
- `\lim_{x\to1^-}(1-x^2)=0`.
- `\lim_{x\to1^+}\sqrt{x-1}=0`.
- `\lim_{x\to1}f(x)=f(1)=0`; **continuous at 1**.
- Both branches are continuous on their own subdomains, so `f` is continuous for **all real x**.
- **Visual:** Zoom around `(1,0)` and preserve point occupancy correctly: include `(1,0)` once, as a filled point.

### Slides 47–48 — Stewart §1.8, Exercise 43 (printed p. 93): One-sided continuity

**Slide 47 — Problem: Find Each Discontinuity and Its Direction**
- **On screen:** `f(x)=\begin{cases}x+2,&x<0,\\2x^2,&0\le x\le1,\\2-x,&x>1.\end{cases}` `Find the discontinuities. At each, determine right continuity, left continuity, or neither.`
- **Visual:** Three colored branches with correct open/closed endpoint markers and labeled breakpoints x=0 and x=1.

**Slide 48 — Solution: Inspect Both Joining Points**
- **At x=0:** `lim(x→0−)f(x)=2`, `lim(x→0+)f(x)=0`, `f(0)=0`. Discontinuous; **continuous from the right only**.
- **At x=1:** `lim(x→1−)f(x)=2`, `lim(x→1+)f(x)=1`, `f(1)=2`. Discontinuous; **continuous from the left only**.
- **Visual:** At x=0: open `(0,2)` and filled `(0,0)`; at x=1: filled `(1,2)` and open `(1,1)`. Never connect a jump with a false vertical segment.
- **Check:** Neither discontinuity can be repaired by changing only the function value, since the two one-sided limits disagree.

### Slides 49–50 — Stewart §1.8, Exercise 53 (printed p. 93): Intermediate Value Theorem

**Slide 49 — Problem: Prove a Root Exists Without Solving the Equation**
- **On screen:** `Show that x⁴+x−3=0 has at least one solution in (1,2). Which continuity fact and sign test do you need?`
- **Visual:** Plot `F(x)=x⁴+x−3` over `[1,2]`, showing the x-axis between opposite-sign endpoint values.

**Slide 50 — Solution: The IVT Guarantees Existence**
- `F(x)=x^4+x-3` is a polynomial, hence continuous on `[1,2]`.
- `F(1)=1+1-3=-1<0`.
- `F(2)=16+2-3=15>0`.
- **IVT:** There exists `c\in(1,2)` such that `F(c)=0`.
- **Optional numerical location, separately labeled as numerical approximation:** `c\approx1.164035`.
- **Visual:** Mark the x-intercept without claiming the IVT computes its exact location. Close with audience-visible statement: `Continuity guarantees a root; approximation locates it.`

---

## D. Mathematical verification checklist (internal)

The following are fixed expected values for the implementation test script; check the algebra, not just the rendering.

| Source exercise | Invariant / expected answer |
|---|---|
| §1.1 #57 | `A(x)=10x−x²`, domain `(0,10)`, graph's maximum at `(5,25)` |
| §1.1 #64 | `C(400)=35`, `C(500)=45`, `C(600)=55` |
| §1.1 #71 | Even: `(-5,3)`; odd: `(-5,-3)` |
| §1.2 #17 | `m=1/6`, `T(150)=457/6≈76.1667 °F` |
| §1.2 #18 | `C(q)=13q+900` |
| §1.2 #19 | `d=85/0.434≈195.8525 ft` |
| §1.3 #33 | `f(g(1))=11`, `g(f(1))=72` |
| §1.3 #43 | `f(u)=u⁴`, `g(x)=x²+2x` |
| §1.3 #55 | `A(t)=3600πt² cm²` |
| §1.4 #1 | Nearest bracketing secants `−38.8`, `−27.8`; estimate `−33.3 gal/min` |
| §1.4 #2 | Central rate `68.5 beats/min` |
| §1.4 #3 | Tangent slope `1` at `(2,−1)`, tangent `y=x−3` |
| §1.5 #15 | Two-sided limit DNE because `−1≠2` |
| §1.5 #29–30 | Right `+∞`, left `−∞` |
| §1.6 #1 | `−6`, `−8`, `2`, `−6`, *not determined*, `0` |
| §1.6 #10 | Limit `5`, undefined original at `x=2` |
| §1.6 #12 | Limit `3/7`, hole at `x=−3`, asymptote at `x=4` |
| §1.6 #18 | Limit `12` |
| §1.6 #21 | Limit `1/6` |
| §1.6 #35 | Limit `0` |
| §1.7 #7 | Sufficient `δ=.0125` for `ε=.2`; `δ=.00625` for `ε=.1` |
| §1.8 #23 | Define `f(2)=3` |
| §1.8 #39 | Continuous for all real x |
| §1.8 #43 | x=0 right-continuous only; x=1 left-continuous only |
| §1.8 #53 | Root exists in `(1,2)`, approx `1.164035` |

## E. Nonnegotiable rendering and functionality acceptance tests (internal)

1. Exactly 50 exercises slides, 25 two-slide solution pairs, in the order specified above. No silent extra textbook problems or omitted solutions.
2. Chapter 1 Theory stays **50 slides**, and Preview remains **25 slides**. No unexpected changes to existing deck data or shared simulations.
3. Every worked solution is displayed with a readable derivation, not merely a final number.
4. All mathematical typography uses the existing KaTeX-capable renderer; fractions, roots, piecewise definitions, exponents, one-sided limits, and units must appear cleanly on actual slides.
5. Visuals faithfully represent endpoint inclusion, holes, jumps, asymptotes, domain restrictions, signs, and the relationship between measured points and interpolated estimates.
6. No scrolling, overlap, clipped formula, or text overflow at 1366×768 and 1920×1080; simplify each visual layout before making text microscopic.
7. Keyboard navigation, fullscreen, previous/next, and presentation route switching still work; scoped controls do not hijack arrow keys when being adjusted.
8. At least representative checks must include graph-heavy slides 02/04/20/24/26/28/34/40/42/44/46/48/50 and equation-heavy slides 14/30/36/38.
9. **No created audit files.** At the end of coding, Codex responds in its **CLI window only**, in English, using <=180 words: scope, changed files, test/build/browser results, any P0/P1/P2, and verdict.
10. Do not generate additional content Markdown or change this authoritative file. Any mathematical ambiguity should be raised with precise slide/exercise IDs in the CLI audit.

## F. Implementation boundaries (internal)

The author of this document has already handled mathematical selection, detailed solutions, illustrations, and instructional sequencing. The developer must implement this specification in the existing React/TypeScript project with **minimal targeted edits**. Prefer existing slide and SVG/math components. No backend, database, authentication, analytics, new curriculum authoring features, skill installations, or architectural rewrites. Do not delegate exercise drafting to agents. Report work only in the Codex CLI.
