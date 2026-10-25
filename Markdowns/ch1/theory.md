---
id: ch1
kind: theory-presentation
course: Mathematics for Machine Learning
presentation_title: "Chapter 1 — Functions and Limits"
source: "James Stewart, Calculus, Eighth Edition, Chapter 1, printed pp. 9–97; review on pp. 94–97"
source_pdf: "Calculus (James Stewart).pdf"
source_pdf_pages: "41–129 (1-based; printed page = PDF page - 32)"
sections: ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8"]
slide_count: 50
ml_extension_slides: "43–50"
language: en
state: "CONTENT SPECIFICATION; compare against existing Chapter 1 before making localized code changes"
---

# Chapter 1 — Functions and Limits

**Authoritative English content specification for the existing 50-slide browser presentation.** This file is for the implementer, **not an on-screen document**. Preserve the existing, working Chapter 1 and shared Preview simulations; update only material that demonstrably differs from this specification or contains an error. All user-facing slide language must be English. Create original graphs and explanations inspired by the source; do not use captured book pages as slide imagery.

## A. Scope, pedagogy, and integrity

- **Main source:** Stewart, *Calculus*, 8th ed., Chapter 1, Sections 1.1–1.8, including its Review. Source references below use **printed page numbers**, not PDF page indices. The source file's printed page 9 corresponds to PDF page 41.
- **What this is:** one chapter-level mathematics presentation, **50 numbered slides**; slides **43–50** form a clearly connected introductory Machine Learning application (additional to Stewart, not part of the author's Chapter 1).
- **What this is not:** a dashboard, learning-management application, administrative teaching plan, or complete transcription of the textbook. A distinct `exercises.md` will specify the separate solved-exercises presentation; do **not** invent that deck now.
- **Objective:** sufficient definitions, representative worked procedures, graphical interpretation, and key conditions for a **professor-defined passing-level** Chapter 1 assessment. Advanced proof-heavy problems and more complex Stewart exercises require deeper textbook study; do not falsely claim to cover every textbook exercise.
- **Four representations:** repeatedly tie together verbal description, numerical table, graph, and algebraic formula. Use physical examples where they make the abstraction clearer.
- **Term policy:** use the English mathematical/scientific terms *Function, Domain, Range, Slope, Secant Line, Tangent Line, Average Rate of Change, Limit, One-Sided Limit, Vertical Asymptote, Squeeze Theorem, Continuity, Intermediate Value Theorem,* and *Difference Quotient* exactly and consistently. No Albanian captions or bilingual UI.
- **Graph design:** white 16:9 screen, navy text; principal curve teal, secant/alternative blue, significant points amber. Label axes, units (when physical), functions, excluded points (open circles), included points (filled circles), and asymptotes (dashed). Do not draw a line where the function is undefined.
- **Mathematics:** typeset every nontrivial equation with KaTeX or the existing equivalent; use `\frac{...}{...}`, `\lim`, `\to`, `\sqrt{...}`, proper subscripts and clear units. Never show crude formula strings like `v=s/t`. Control rounding; show exact results whenever possible.
- **Student screen only:** show slide title, actual concept, equations, examples, explanations, and directly useful interactions. The `Source`, `Implementation`, `Validation`, `Timing`, and `Teaching note` fields below are **internal**, never marginal badges or visible cards.
- **Progressive reveal:** useful for a derivation, but the complete final state must contain all essential steps. No compulsory exercise answer should be hidden by default in a way the presenter cannot reveal.
- **Physical precision:** average velocity is signed displacement divided by elapsed time; speed is its magnitude in 1-D. In an actual unit-bearing law, show consistent dimensions. The equality between instantaneous velocity and tangent slope is a local mathematical connection, not an assertion that all physical speed is constant.
- **Mathematical precision:** limits concern neighboring input values; point values may differ. `0/0` is indeterminate, **not** the limit. A two-sided finite limit exists only when both finite one-sided limits agree. `\infty` is not a finite real-number limit. Continuity does **not** imply differentiability.
- **Time realism:** these 50 slides are the **chapter presentation and study reference**; it is not mathematically responsible to promise exhaustive §1.1–§1.8 mastery plus eight ML slides in one 90-minute period. Split the full lesson into more than one meeting if students need worked practice. Do not display this pacing caveat to students.

## B. Coverage and slide allocation

| Source | Printed pages | Core coverage | Slides |
|---|---:|---|---|
| Chapter opening / §1.1 | 9–22 | Functions, representations, domain/range, graphs, piecewise behavior, even/odd | 01–12 |
| §1.2 | 23–35 | Modeling, linear/power/polynomial/rational/trig/exponential/logarithmic families | 13–18 |
| §1.3 | 36–44 | Graph transformations, algebraic combinations, compositions | 19–20 |
| §1.4 | 45–49 | Secant/tangent, difference quotient, instantaneous velocity | 21–25 |
| §1.5 | 50–61 | Finite and one-sided limits, nonexistence, infinite limits, numerical pitfalls | 26–32 |
| §1.6 | 62–72 | Limit Laws, direct substitution, algebraic simplification, Squeeze Theorem | 33–36 |
| §1.7 | 72–82 | Precise epsilon–delta definition, elementary demonstration | 37 |
| §1.8 | 82–94 | Continuity, discontinuities, families, IVT | 38–41 |
| Chapter review | 94–97 | Synthesis / conceptual check | 42 |
| Additional ML connection | Beyond Stewart Ch. 1 | Prediction, error, slope of loss, optimization | 43–50 |

### Presentation flow

- 01–12 **Functions:** understand input → output and interpret a mathematical representation.
- 13–20 **Models and function operations:** learn to recognize and manipulate standard function behavior.
- 21–25 **The Tangent and Velocity Problems:** slope becomes local rate of change.
- 26–37 **Limits:** interpret, calculate, distinguish failure modes, understand precision.
- 38–42 **Continuity and synthesis:** determine when behavior at a point agrees with its neighborhood.
- 43–50 **Machine Learning connection:** mathematically apply the same ideas to a predictive model and its loss.

---

## C. Exact slide-by-slide specification

### Slide 01 — Functions and Limits
- **On screen:** Title `Functions and Limits`; subtitle `From input–output relationships to the mathematics of approaching a value.` Main question: `What can a graph tell us that a formula alone cannot?`
- **Visual:** An original labeled plot of a function, with a point at `(a,f(a))` and two neighboring sample points.
- **Implementation:** A clean chapter-opening slide, not an administrative welcome page. **Source:** p. 9.

### Slide 02 — A Function Connects Two Quantities
- **On screen:** `A function assigns exactly one output to each permitted input.` Display `y=f(x)` and `x \longmapsto f(x)`. Context: `Input: time t (s)` → `Output: measured temperature T(t) (°C)`.
- **Visual:** Input → function → output; also a small `T` versus `t` graph. Changing the input updates exactly one output.
- **Check:** A function need not produce different outputs for different inputs. **Source:** §1.1, pp. 10–11.

### Slide 03 — Four Ways to Represent a Function
- **On screen:** `Verbal · Numerical · Visual · Algebraic`. Use **one identical relationship** throughout: `f(x)=2x+1`; table `(0,1),(1,3),(2,5)`; one straight-line plot; verbal description `Double the input, then add one.`
- **Visual:** Four coordinated, clearly labeled views; changing highlighted x keeps views consistent.
- **Check:** All views describe exactly the same function. **Source:** §1.1, pp. 10–13.

### Slide 04 — Domain and Range
- **On screen:** `Domain: all permitted inputs`; `Range: the outputs actually produced.` Example `f(x)=\sqrt{x}` (real-valued). Display `D=[0,\infty)` and `R=[0,\infty)`.
- **Visual:** Graph `y=\sqrt{x}`, defined only for `x\ge0`, with x-domain and y-range projections. Note `x=0` is included.
- **Check:** The codomain supplied by a modeling context is not automatically equal to the range. **Source:** §1.1, pp. 10–12, 14–15.

### Slide 05 — Reading a Graph
- **On screen:** `The point (a,b) on y=f(x) means f(a)=b.` Use a clear graph of `f(x)=x^2-1`. Highlight `f(2)=3` and the two x-intercepts `x=\pm1`.
- **Visual:** Vertical projection from input to curve, horizontal projection to output; colored markers show the points `(2,3)`, `(-1,0)`, `(1,0)`.
- **Check:** The x-axis gives inputs; the y-axis gives outputs. **Source:** §1.1, pp. 11–12.

### Slide 06 — Vertical Line Test
- **On screen:** `A graph represents y=f(x) only if every vertical line intersects it at most once.` Compare `y=x^2` against `x^2+y^2=4` (complete circle).
- **Visual:** Move one vertical line across both curves; on the circle some lines intersect twice.
- **Question:** Why does the full circle fail to define y as a single-valued function of x? **Source:** §1.1, pp. 15–16.

### Slide 07 — A Parabola from a Table
- **On screen:** `f(x)=x^2`; compact table `x=-2,-1,0,1,2` and `f(x)=4,1,0,1,4`. `Domain: \mathbb R; Range: [0,\infty)`.
- **Visual:** Reveal each point, then show a smooth parabola with vertex `(0,0)`. Points are exact; no misleading straight-line approximation to the curve.
- **Check:** Negative x values can have positive outputs. **Source:** §1.1, pp. 11–12.

### Slide 08 — Finding a Domain Algebraically
- **On screen:** Two compact worked examples, distinctly separated:
  1. `f(x)=\sqrt{5-x}`: require `5-x\ge0`, hence `D=(-\infty,5]`.
  2. `g(x)=\frac{1}{x^2-4}`: require `x\ne-2` and `x\ne2`; `D=\mathbb R\setminus\{-2,2\}`.
- **Visual:** Two number lines with valid intervals; mark excluded points open, included endpoint filled.
- **Check:** A square-root radicand may equal zero; a denominator never may. **Source:** §1.1, pp. 14–15.

### Slide 09 — Piecewise-Defined Functions
- **On screen:** `Different rules may apply to different input regions.` Example `f(x)=\begin{cases}x+1,&x<0\\x^2,&x\ge0\end{cases}`. Evaluate `f(-1)=0`, `f(0)=0`, `f(2)=4`.
- **Visual:** Left branch with an OPEN endpoint at `(0,1)`; right branch with a FILLED endpoint at `(0,0)`. No connecting segment.
- **Check:** The definition for x=0 comes from the second branch. **Source:** §1.1, pp. 15–17.

### Slide 10 — Symmetry: Even and Odd Functions
- **On screen:** `Even: f(-x)=f(x)` (y-axis symmetry); `Odd: f(-x)=-f(x)` (origin symmetry). Compare `x^2`, `x^3`, and `x^2+x` (neither).
- **Visual:** Two corresponding reflected point pairs on each graph. Avoid saying all functions must be even or odd.
- **Check:** An odd function defined at zero must satisfy f(0)=0. **Source:** §1.1, pp. 17–18.

### Slide 11 — Building a Function from a Situation
- **On screen:** `Model a quantity before calculating it.` Example: rectangular garden with fixed perimeter `20 m`; width `x` m, length `10-x` m. `A(x)=x(10-x)` in `m^2`; physical domain `0<x<10`.
- **Visual:** Adjustable rectangle, perimeter labels, area-versus-width parabola. Values at x=0 or x=10 represent degenerate, physically excluded gardens.
- **Check:** An algebraic domain and a real-world modeling domain may differ. **Source:** §1.1 modeling approach, pp. 13–15; **original teaching example**.

### Slide 12 — Function Checkpoint (Worked)
- **On screen:** `f(x)=\sqrt{9-x^2}`. (i) Domain? (ii) Range? (iii) What curve does it describe?
- **Solution, progressive reveal:** `9-x^2\ge0` ⇒ `-3\le x\le3`; `0\le f(x)\le3`; `y^2=9-x^2, y\ge0` ⇒ **upper semicircle** of radius 3.
- **Visual:** Number line and upper semicircle only (not the entire circle).
- **Check:** Both endpoints `(-3,0)` and `(3,0)` are present. **Source:** §1.1; **original worked example**.

### Slide 13 — Mathematical Modeling from Data
- **On screen:** `Observe → choose variables → collect measurements → propose a function → compare predictions with evidence.` A model is an approximation, not the phenomenon itself.
- **Visual:** Small, explicitly *illustrative* scatterplot of distance versus time with a candidate straight line. Axes and units visible.
- **Check:** Real measurements need not lie exactly on one formula. **Source:** §1.2, pp. 23–26.

### Slide 14 — Linear Functions: Constant Rate of Change
- **On screen:** `f(x)=mx+b`; `m=\frac{f(x_2)-f(x_1)}{x_2-x_1}` for `x_2\ne x_1`. Explain `m` as output change per input unit and `b` as value at x=0.
- **Worked:** For `f(t)=3t+2`, `\frac{f(5)-f(1)}{5-1}=3`.
- **Visual:** Line with rise/run triangle; display independent-axis units if using a physical context.
- **Check:** Changing b moves the line; changing m changes slope. **Source:** §1.2, pp. 24–27.

### Slide 15 — Polynomial and Power Functions
- **On screen:** `Power function: f(x)=x^a`; `Polynomial: P(x)=a_nx^n+\cdots+a_1x+a_0`. Compare `x`, `x^2`, `x^3` and `x^{-1}` (a power function, not a polynomial).
- **Visual:** Small multiples with shared axes, reasonable scales, distinct labels.
- **Check:** `x^{-1}` is undefined at zero; do not join its branches. **Source:** §1.2, pp. 28–30.

### Slide 16 — Roots, Rational, and Algebraic Functions
- **On screen:** `Root: \sqrt{x}`; `Rational: R(x)=\frac{P(x)}{Q(x)},\;Q(x)\ne0`; `Algebraic functions can combine algebraic operations and roots.` Example `r(x)=\frac{1}{x-1}` has a vertical asymptote at x=1.
- **Visual:** Three clearly separated graph panels. Dash the asymptote; show unconnected branches.
- **Check:** An expression may be algebraic but neither a polynomial nor a rational function. **Source:** §1.2, pp. 29–31.

### Slide 17 — Periodic Functions: Trigonometry and Physics
- **On screen:** `f(t)=A\sin(\omega t+\phi)+c`; `T=\frac{2\pi}{|\omega|}` when `\omega\ne0`. Identify amplitude `|A|`, period T, phase shift, and vertical offset.
- **Physical interpretation:** An idealized oscillating sensor may produce periodic measurements; label vertical-axis units if asserting a physical quantity.
- **Visual:** Slider for A and ω, period markers on a correctly scaled t-axis. **Source:** §1.2, pp. 30–32; formula is an original explanatory extension.

### Slide 18 — Exponential and Logarithmic Models
- **On screen:** `Exponential: f(x)=b^x` and `Logarithmic: g(x)=\log_b x`, with `b>0, b\ne1`. Compare domain/range: exponential D=R, R=(0,∞); logarithmic D=(0,∞), R=R.
- **Visual:** Matched plots for b=2 and their reflection across y=x. Note growth for b>1; decay for 0<b<1.
- **Check:** Do not write log of zero or a negative real number. **Source:** §1.2, pp. 32–33; inverse perspective is a conceptual preview.

### Slide 19 — Transforming Graphs
- **On screen:** Starting from `f(x)=x^2`, compare `f(x)+2`, `f(x-2)`, `-f(x)`, and `2f(x)`. Describe **vertical shift**, **horizontal shift**, **reflection**, and **vertical stretch**.
- **Visual:** One controlled transformation at a time, with original and transformed curves distinguished. x-axis shift direction must be correct: `f(x-2)` shifts RIGHT by 2.
- **Check:** The point (0,0) of the base curve moves to (2,0) for f(x−2). **Source:** §1.3, pp. 36–40.

### Slide 20 — Operations and Composition
- **On screen:** Operations: `(f+g)(x)`, `(fg)(x)`, `\frac{f(x)}{g(x)}` where denominator nonzero. Composition: `(f\circ g)(x)=f(g(x))`.
- **Worked:** Let `f(u)=u^2` and `g(x)=x+1`; then `(f\circ g)(x)=(x+1)^2`, whereas `(g\circ f)(x)=x^2+1`.
- **Visual:** Two function machines in opposite orders. `f\circ g` is generally different from `g\circ f`.
- **Check:** Domains must respect both the inner output and outer input constraints. **Source:** §1.3, pp. 40–44.

### Slide 21 — Slope as Average Rate of Change
- **On screen:** `\text{Average rate of change}=\frac{\Delta y}{\Delta x}=\frac{f(b)-f(a)}{b-a}`, with `a\ne b`.
- **Physical example:** Position `s(t)` measured in meters, t in seconds: secant slope has units m/s.
- **Visual:** Secant between points `(a,f(a))` and `(b,f(b))`, rise/run triangle, clearly labeled units.
- **Check:** A slope can be negative or zero. **Source:** §1.4, pp. 45–49.

### Slide 22 — The Tangent Problem
- **On screen:** `How can one point determine a slope?` Fixed `P=(a,f(a))`, moving `Q=(a+h,f(a+h))`. Secant slope `m_{PQ}(h)=\frac{f(a+h)-f(a)}{h}` for `h\ne0`.
- **Visual:** Interactive **actual** secant line sliding toward a tangent, using the current existing component if correct. Point Q never aliases P computationally while h≠0.
- **Check:** `h=0` is not substituted into the fraction. **Source:** §1.4, pp. 45–47.

### Slide 23 — Derive the Tangent to a Parabola
- **On screen:** At `P=(1,1)` on `f(x)=x^2`:
  1. `m(h)=\frac{(1+h)^2-1}{h}`.
  2. `m(h)=\frac{2h+h^2}{h}=2+h` for `h\ne0`.
  3. `m=\lim_{h\to0}(2+h)=2`.
  4. Tangent line: `y-1=2(x-1)`, hence `y=2x-1`.
- **Visual:** Graph parabola, multiple nearby secants, final tangent; do not imply slope 2 everywhere.
- **Check:** Tangent intersects graph locally at P, may intersect curves elsewhere in other examples. **Source:** §1.4, pp. 45–47; worked directly in spirit of Stewart Example 1.

### Slide 24 — Instantaneous Velocity
- **On screen:** `\bar v=\frac{s(t+h)-s(t)}{h}` and `v(t)=\lim_{h\to0}\frac{s(t+h)-s(t)}{h}`. Use a dimensionally consistent model `s(t)=kt^2`, `k=1\,\mathrm{m/s^2}`.
- **Worked at t=2 s:** Let the time increment be `h` in seconds. Show `\bar v=\frac{k[(2\,\mathrm{s}+h)^2-(2\,\mathrm{s})^2]}{h}=k(4\,\mathrm{s}+h)` for `h\ne0`. With `h=0.5\,\mathrm{s}`, `\bar v=4.5\,\mathrm{m/s}`; in the limit, `v(2\,\mathrm{s})=k(4\,\mathrm{s})=4\,\mathrm{m/s}`.
- **Visual:** Simultaneously update moving object, position–time secant, and numerical velocity. Label position in m, time in s.
- **Check:** If using normalized numerical t values, annotate units cleanly rather than showing a dimensionally invalid expression such as `2+h m/s`. **Source:** §1.4, pp. 47–49; **original physics numbers**.

### Slide 25 — One Idea, Two Problems
- **On screen:** `Tangent slope = instantaneous rate of change.` Compare `\frac{\Delta y}{\Delta x}` and `\frac{\Delta s}{\Delta t}`: the same mathematical limiting process, different measured quantities.
- **Visual:** Side-by-side curve with tangent and position–time graph with velocity readout.
- **Check:** `Speed=|velocity|` for one-dimensional motion; acceleration is a later derivative concept, not required here. **Source:** §1.4, pp. 45–49.

### Slide 26 — What Is a Limit?
- **On screen:** `\lim_{x\to a}f(x)=L` means that f(x) can be made arbitrarily close to L by taking x sufficiently close to a, with x≠a.` Example `\lim_{x\to2}x^2=4`.
- **Visual:** Approach x=2 from both sides, highlight corresponding y-values near 4.
- **Check:** Approaching a value is not the same as assigning a value at the point. **Source:** §1.5, pp. 50–52.

### Slide 27 — Approaching from Two Sides
- **On screen:** `\lim_{x\to a^-}f(x)` and `\lim_{x\to a^+}f(x)`. `The two-sided limit exists if and only if both one-sided limits exist and are equal.`
- **Visual:** Move two points (from left and right) toward `a`; show the same limiting y-coordinate.
- **Check:** An approach from only one side does not establish the ordinary two-sided limit. **Source:** §1.5, pp. 55–56.

### Slide 28 — A Hole Does Not Destroy a Limit
- **On screen:** `f(x)=\begin{cases}x^2,&x\ne2\\7,&x=2\end{cases}`. Thus `\lim_{x\to2}f(x)=4` but `f(2)=7`.
- **Visual:** Parabola with OPEN circle `(2,4)` and FILLED isolated dot `(2,7)`; both have clear labels.
- **Check:** Never accidentally draw filled point at (2,4). **Source:** §1.5, pp. 50–52; original teaching example.

### Slide 29 — When the Limit Does Not Exist: A Jump
- **On screen:** `f(x)=\begin{cases}0,&x<0\\1,&x\ge0\end{cases}`. `\lim_{x\to0^-}f(x)=0`, `\lim_{x\to0^+}f(x)=1`; therefore ordinary two-sided limit **does not exist**.
- **Visual:** Two horizontal branches, open/filled endpoint convention; no vertical line connecting them.
- **Physical note:** Idealized switching signal (Heaviside step) models a sudden change. **Source:** §1.5, pp. 55–56.

### Slide 30 — Infinite Limits and Vertical Asymptotes
- **On screen:** `\lim_{x\to0^-}\frac1x=-\infty`, `\lim_{x\to0^+}\frac1x=+\infty`. `x=0` is a vertical asymptote; the **finite two-sided limit does not exist**.
- **Visual:** Reciprocal function with dashed asymptote, arrows, and distinct left/right behavior. No connecting line across x=0.
- **Check:** `+\infty` and `-\infty` indicate unbounded behavior, not real-valued limiting numbers. **Source:** §1.5, pp. 56–59.

### Slide 31 — Oscillation and Numerical Pitfalls
- **On screen:** `f(x)=\sin(1/x)` for `x\ne0`; as `x\to0` it oscillates without approaching a single number. `Tables and zoomed graphs help, but can mislead.`
- **Visual:** High-fidelity plot with sufficient sampling near 0 and no fake limit. A sparse sample can hide oscillation: explain why.
- **Check:** Never infer a limit solely because some sampled points look close to zero. **Source:** §1.5, pp. 53–55.

### Slide 32 — Limit Interpretation: Mixed Checkpoint
- **On screen:** Show three small original plots: (A) `y=x^2` near x=1; (B) a parabola with a hole but matching two-sided limit; (C) a jump with left/right disagreement. Question: `Which two-sided limits exist? Do their point values have to exist?`
- **Solution:** A: exists and equals point value; B: exists, point value need not match; C: DNE.
- **Visual:** Real function graphs, not icons or generic diagrams.
- **Check:** Point definition is irrelevant to existence of the finite limit. **Source:** §1.5, pp. 50–61.

### Slide 33 — Limit Laws
- **On screen:** Let `\lim_{x\to a}f(x)=L`, `\lim_{x\to a}g(x)=M` be **finite existing limits**. Display compact rules:
  - `\lim(f\pm g)=L\pm M`
  - `\lim(cf)=cL`
  - `\lim(fg)=LM`
  - `\lim(f/g)=L/M` **provided** `M\ne0`.
  - `\lim(f^n)=L^n` (integer n≥1); roots subject to real-domain conditions.
- **Visual:** Operations shown on two converging graphs; avoid literal concatenated LaTeX error.
- **Check:** Do not use Quotient Law with zero denominator limit. **Source:** §1.6, pp. 62–65.

### Slide 34 — Direct Substitution When It Is Valid
- **On screen:** `\lim_{x\to3}(2x^2-x+1)=2(3)^2-3+1=16`.
- **Second example:** `\lim_{x\to2}\frac{x+1}{x+2}=\frac34`; explain continuous rational function and denominator ≠0.
- **Visual:** At least one clearly labeled graph showing predicted limiting y-value.
- **Check:** Substitution is valid here because these functions are continuous at their evaluation point. **Source:** §1.6, pp. 63–65.

### Slide 35 — Indeterminate Form: Factor and Rationalize
- **On screen:** Two worked methods with complete and legible algebra:
  - `\lim_{x\to2}\frac{x^2-4}{x-2}=\lim_{x\to2}(x+2)=4` after factoring, **for x≠2**.
  - `\lim_{x\to4}\frac{\sqrt{x}-2}{x-4}=\lim_{x\to4}\frac1{\sqrt{x}+2}=\frac14` after multiplying by the conjugate, **for x≠4**.
- **Visual:** One removable-hole graph to reinforce that algebraic simplification outside a point preserves the limit.
- **Check:** `0/0` flags need for further reasoning; it is never presented as an evaluated answer. **Source:** §1.6, pp. 65–68; original paired example.

### Slide 36 — The Squeeze Theorem
- **On screen:** If `g(x)\le f(x)\le h(x)` near a (excluding a if necessary) and outer functions have the same limit L, then `\lim_{x\to a}f(x)=L`.
- **Worked:** For `x\ne0`, `-x^2\le x^2\sin(1/x)\le x^2`; since both bounds tend to 0, `\lim_{x\to0}x^2\sin(1/x)=0`.
- **Visual:** Three color-coded curves: bounding envelope `\pm x^2` and oscillating function trapped inside, converging at origin.
- **Check:** `\sin(1/x)` alone does not have a limit at zero; the x² factor controls the product. **Source:** §1.6, pp. 68–70.

### Slide 37 — Precise Limit: Epsilon and Delta
- **On screen:** `\lim_{x\to a}f(x)=L` means:

  `\forall\varepsilon>0\;\exists\delta>0:\quad 0<|x-a|<\delta\ \Longrightarrow\ |f(x)-L|<\varepsilon.`

  Explain: **epsilon controls output error; delta controls input distance.**
- **Complete elementary demonstration:** For `f(x)=3x-1`, `a=2`, `L=5`:
  `|f(x)-5|=3|x-2|`. Choose `\delta=\varepsilon/3`. If `0<|x-2|<\delta`, then `|f(x)-5|<3\delta=\varepsilon`.
- **Visual:** Adjustable epsilon horizontal band and corresponding delta vertical neighborhood, plotted on the straight line. The point x=a is excluded in the hypothesis.
- **Check:** The choice of delta works for **every** epsilon>0; no proof-only assumption like fixed epsilon=0.1.
- **Scope note (internal):** This is a concise formal introduction; Stewart explicitly describes §1.7 as optional in its Preface (printed p. xvi). Advanced epsilon–delta proofs belong in higher-level exercises. **Source:** §1.7, pp. 72–80.

### Slide 38 — Continuity at a Point
- **On screen:** `f is continuous at a iff \lim_{x\to a}f(x)=f(a).` Display the three checks:
  1. `f(a)` is defined.
  2. `\lim_{x\to a}f(x)` exists as a finite number.
  3. The two values are equal.
- **Visual:** Smooth curve and a highlighted point on the graph; compare a nearby hole.
- **Check:** Do not call a function continuous merely because a limit exists. **Source:** §1.8, pp. 82–84.

### Slide 39 — Three Types of Discontinuity
- **On screen:** `Removable` (finite common limit but value missing/wrong); `Jump` (one-sided limits unequal); `Infinite` (unbounded near point).
- **Visual:** Three rigorously distinct graphs with correct open/closed circles and dashed vertical asymptotes. Use example of Slide 28, Slide 29, and Slide 30.
- **Check:** A jump discontinuity cannot be repaired simply by redefining one point; a removable one can. **Source:** §1.8, pp. 83–85, with support from §1.5.

### Slide 40 — Continuity on Intervals and Under Composition
- **On screen:** `A function is continuous on an interval if it is continuous at every interior point and one-sided continuous at any included endpoint.` Familiar polynomials are continuous on R; rational functions on their domains; compositions of continuous functions remain continuous where defined.
- **Worked:** `h(x)=\sqrt{x+2}` is continuous on its domain `[-2,\infty)`; at x=-2 use right-hand continuity.
- **Visual:** Graph starting at closed endpoint `(-2,0)` with annotation `right-hand continuity at the endpoint`.
- **Check:** Do not apply two-sided continuity requiring points outside the domain at a domain endpoint. **Source:** §1.8, pp. 84–89.

### Slide 41 — Intermediate Value Theorem (IVT)
- **On screen:** If f is continuous on `[a,b]`, every number N strictly between `f(a)` and `f(b)` occurs as `f(c)` for at least one c in `(a,b)`.
- **Worked existence test:** `f(x)=x^3+x-1`, `f(0)=-1`, `f(1)=1`; by IVT there is at least one root between 0 and 1. Do not claim the exact root is known from IVT alone.
- **Visual:** Plot crossing y=0, horizontal intermediate level, and location interval `(0,1)`.
- **Check:** Continuity on the **closed** interval is a required hypothesis. **Source:** §1.8, pp. 89–90.

### Slide 42 — Chapter 1: What Can You Now Explain?
- **On screen:** Four linked questions:
  1. `What inputs and outputs define a function?`
  2. `What does the slope between two points measure?`
  3. `How is a limit different from the value at a point?`
  4. `Why does continuity matter?`
- **Worked synthesis:** Present `f(x)=\frac{x^2-1}{x-1}` for x≠1; explain the missing point, `\lim_{x\to1}f(x)=2`, and how defining f(1)=2 removes the discontinuity.
- **Visual:** Original removable-hole graph and its repaired version.
- **Check:** The original expression is undefined at x=1; factoring does not change the original domain. **Source:** Ch.1 Review, pp. 94–97.

### Slide 43 — A Machine Learning Model Is a Function
- **On screen:** `Input x → prediction \hat y = f(x;\theta)`. `The parameter \theta changes how the function behaves.` Compare a physical model `s(t)` with a predictive model `\hat y(x;\theta)`.
- **Visual:** Reuse input-output machine metaphor; add one simple fitted line to illustrative data.
- **Check:** Clearly label this **application beyond Stewart Chapter 1** in internal metadata only, not audience-facing margin text.

### Slide 44 — Linear Prediction
- **On screen:** `\hat y=wx+b`. `x`: input, `\hat y`: predicted output, `w`: slope, `b`: intercept.
- **Worked prediction:** For `x=2, w=1.5, b=1`, `\hat y=4`.
- **Visual:** A line on labeled axes, with sliders for w and b changing the graph and predicted point.
- **Check:** Do not conflate adjustable model parameter w with an input feature x.

### Slide 45 — Predictions and Observations
- **On screen:** `Observed: y`; `Predicted: \hat y`. One simple training observation: `x=1, y=3`. For the constrained model `\hat y=wx` (set b=0), the prediction is w; error `e(w)=\hat y-y=w-3`.
- **Visual:** Vertical residual between predicted point `(1,w)` and observed `(1,3)`; explicit axes and zero-intercept assumption.
- **Check:** This is one-data-point toy model, not a claim about production ML quality.

### Slide 46 — Loss Function: Measure the Error
- **On screen:** `L(w)=(\hat y-y)^2=(w-3)^2`. `Squaring makes positive and negative residuals contribute nonnegative loss.`
- **Worked values:** `L(0)=9`, `L(2)=1`, `L(3)=0`, `L(4)=1`.
- **Visual:** Table and loss parabola using horizontal axis w and vertical axis L(w); distinguish parameter axis from input x axis in preceding slide.
- **Check:** This example uses squared error for a single observation; no implied universal loss definition.

### Slide 47 — Find the Minimum of the Loss
- **On screen:** `L(w)=(w-3)^2\ge0`. `The global minimum is L(3)=0.` Explain symmetry around `w=3` and movement down the curve.
- **Visual:** Highlight points `w=0,2,3,4`, annotate minimum `(3,0)`; use actual plotted curve.
- **Check:** The minimum follows algebraically from a square being nonnegative; differentiability is not required to establish the minimum here.

### Slide 48 — A Slope Can Guide Improvement
- **On screen:** `L'(w)=2(w-3)` (short derivative preview, formally developed in Chapter 2). At `w=0`, `L'(0)=-6`; increasing w locally decreases L. At `w=4`, `L'(4)=2`; decreasing w locally decreases L.
- **Visual:** Tangent line on loss curve and an arrow down the locally descending direction; signs must be consistent.
- **Check:** This is derivative with respect to a **parameter w**, not time. Avoid implying a derivative always guarantees a global optimal step.

### Slide 49 — Gradient Descent: A Numerical Step
- **On screen:** `w_{k+1}=w_k-\eta L'(w_k)`; choose `\eta=0.2`, `w_0=0`. Then:
  `L'(0)=-6`, `w_1=0-0.2(-6)=1.2`, `L(w_1)=(1.2-3)^2=3.24`.
  Optional second step: `L'(1.2)=-3.6`, `w_2=1.92`, `L(w_2)=1.1664`.
- **Visual:** Accurate parameter markers moving on loss curve; one-step button and reset; display both current parameter and current loss.
- **Check:** A step improves this specific example with η=0.2, not necessarily arbitrary loss or η.

### Slide 50 — The Same Mathematical Language
- **On screen:** Four concise connected expressions:
  - `f(x)` — describes a relationship.
  - `\lim_{x\to a}f(x)` — describes behavior near a point.
  - `\frac{f(a+h)-f(a)}{h}` — measures average change; the limit gives local change.
  - `L(w)` — describes model error; its local slope can guide optimization.
- **Final message:** `Functions model. Limits make local behavior precise. Calculus reveals change. Optimization uses that information to improve predictions.`
- **Visual:** One flowing diagram from function curve → tangent → loss curve. No administrative credits, implementation notes, or source badges.

---

## D. Minimal essential exercise coverage for THIS theory deck

The following are *already embedded* as exact worked cases in the storyboard; preserve the correct calculations and do not add a second exam dashboard.

| ID | Slide | Input/problem | Correct final result |
|---|---:|---|---|
| T01 | 08 | Domain of `\sqrt{5-x}` | `(-\infty,5]` |
| T02 | 08 | Domain of `1/(x^2-4)` | `\mathbb R\setminus\{-2,2\}` |
| T03 | 11 | Garden 20-m perimeter | `A(x)=x(10-x)`, `0<x<10` |
| T04 | 12 | Domain/range of `\sqrt{9-x^2}` | `[-3,3]`, `[0,3]` |
| T05 | 20 | `f\circ g` vs `g\circ f` | `(x+1)^2` vs `x^2+1` |
| T06 | 23 | Tangent to y=x² at (1,1) | slope `2`, line `y=2x-1` |
| T07 | 24 | Position `s(t)=kt^2`, k=1m/s², at 2s | `4\,\mathrm{m/s}` |
| T08 | 28 | Discontinuous value f(2)=7 on parabola | limit `4`, point value `7` |
| T09 | 34 | Polynomial limit at x=3 | `16` |
| T10 | 35 | Factoring 0/0 | `4` |
| T11 | 35 | Rationalizing square root | `1/4` |
| T12 | 36 | Squeeze `x^2\sin(1/x)` | `0` |
| T13 | 37 | epsilon–delta for 3x−1 at x=2 | `\delta=\varepsilon/3` works |
| T14 | 41 | IVT for x³+x−1 on [0,1] | at least one root in (0,1) |
| T15 | 42 | Removable point of (x²−1)/(x−1) | limit `2`, fill f(1)=2 |
| T16 | 49 | GD η=.2, w₀=0 | `w₁=1.2`, `L₁=3.24` |

**Important:** The separate `Markdowns/ch1/exercises.md` will contain a larger chapter exercise selection, difficulty ladder, step-by-step solutions, and book exercise numbers. Do not create or silently populate it in this phase.

## E. Minimal visual and functional testing contract

Check exactly these behaviors when implementing or validating Chapter 1:

1. **Slide count:** 50; the final 8 are slides 43–50. Preview remains exactly 25 and is not modified.
2. **Audience mode:** only slide content, unobtrusive 50-slide navigation, proper white background; no source metadata or plan labels visible.
3. **English:** all slide titles, visible textual explanations, graph annotations, sliders and buttons.
4. **Formula:** KaTeX displays limits, fraction bars, square roots, parameter subscripts, one-sided superscripts, and `\varepsilon`, `\delta` properly. No overflow at 1366×768 or 1920×1080.
5. **Graph physics:** `s(t)=kt²` demo returns 4 m/s at t=2s; no unit errors; input slider does not interfere with next/previous slide keyboard navigation.
6. **Graph limits:** hole and filled point on slide 28 distinct; mismatch on slide 29 reported DNE; x=0 branches on slide 30 not connected; oscillation slide 31 does not draw a fake limit.
7. **Continuity:** Slide 38 explicitly checks all 3 conditions, Slide 41 IVT invokes closed-interval continuity.
8. **Gradient Descent:** w₁=1.2 and loss decreases 9→3.24 for η=0.2; sliding η/parameters updates calculation rather than a decorative prerecorded animation.
9. **Source consistency:** Ch.1 content maps to Stewart §1.1–§1.8; later ML extension does not claim to be in Stewart.
10. **Code preservation:** no unnecessary package, routing, framework, or architecture rewrites. Keep the existing verified Preview implementation intact.

## F. Codex hand-off boundary (internal only)

- The author supplies this `.md` file. **Codex implements it; Codex does not rewrite the Markdown.**
- Before editing existing 50-slide Chapter 1, compare the present code and existing slide content against this specification; report or patch only substantive discrepancies.
- Do not create new audit `.md` or `.txt` files. Return an **English CLI-only audit under 250 words**: changed files, implementation coverage, `npm test`, `npm run build`, visual checks actually performed, any P0/P1/P2 findings, and verdict. Explicitly distinguish tests **run** from tests **not run**.
- Default Codex settings for this work: **GPT-6.1 Sol / Medium**, if available; no subagents unless a specific parallel task demonstrably saves work; only pre-installed frontend/browser-testing skills if they add concrete value. Avoid overengineering and token-heavy investigation.
