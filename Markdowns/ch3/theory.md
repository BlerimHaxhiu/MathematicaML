---
id: ch3
kind: theory-presentation
course: Mathematics for Machine Learning
presentation_title: "Chapter 3 — Applications of Differentiation"
source: "James Stewart, Calculus, Eighth Edition, Chapter 3, printed pages 203–289; sections 3.1–3.9"
source_pdf: "Calculus (James Stewart).pdf"
source_pdf_pages: "235–321 (1-based; printed page = PDF page - 32)"
slide_count: 60
language: en
status: "AUTHORITATIVE MATHEMATICAL AND VISUAL SPECIFICATION — NOT APPLICATION CODE"
exercises_spec: "Markdowns/ch3/exercises.md (separate future deliverable; approximately 100 or more slides as mathematically necessary)"
---

# Chapter 3 — Applications of Differentiation

**Implementation contract:** This file is the complete, authoritative, English-language storyboard for 60 slides in the existing browser presentation. Mathematical text is original educational wording following Stewart's section order. Developer instructions and source/page references are **never displayed to students**. Codex implements this document; Codex does not author, shorten, reorganize or silently correct it.

## A. Content, design, and precision rules

1. **Exactly 60 numbered slides**. An unnumbered six-minute break follows slide 34. Do not create a numbered break slide. This is a chapter-level resource that may require multiple teaching sessions.
2. Preserve all previous routes, contents, slide counts, interactions, homepage, and global Light/Dark system. In particular, **every graph plotting panel stays light in both themes**; graph axes, ticks and text stay dark within it.
3. All visible copy, axis labels, control labels and mathematical annotations are **English only**. Use the current KaTeX renderer for actual mathematics; no ASCII approximations for important formulas, no flattened equations and no forced tiny type.
4. Use the established white/light academic presentation style in Light Mode; adapt slide shell, equations and surrounding content in Dark Mode while keeping actual plots light. Reuse the existing SVG/plotting components, slide shell, animations and controls. Do not recreate 60 separate simulation engines.
5. **Four representations whenever useful:** state the idea verbally, demonstrate with exact algebra, add a small numerical check, and draw a faithful graph. Show derivations one meaningful line at a time, using the existing reveal mechanism. Do not hide essential derivations in presenter notes.
6. Keep rigorous theorem hypotheses: continuity, differentiability, open versus closed intervals; critical numbers require a point in the domain; a zero second derivative does not prove an inflection; a stationary point is not automatically an extremum; Newton's method requires a nonzero derivative at each iteration.
7. Use correct domains, endpoint inclusion, open circles, asymptotes, zoom limits, signs, dimensions, units and legends. A 3D illustration can be a simple accurate SVG/isometric diagram; no 3D library required.
8. All textbook page references and internal labels **Source / Visual / Interaction / Reveal / Check / Note** below are *implementation guidance only*. Never put those words or project metadata on student-facing slides.
9. Introduce machine-learning analogies as **supplemental contemporary applications**, not as material attributed to Stewart. The book is the source for the core calculus topics. Graphs and worked numbers here are newly written, not copied textbook figure images.
10. The Theory deck provides representative complete calculations, but the dedicated `exercises.md` deck will later contain many additional carefully explained textbook exercises. Do not prematurely implement Chapter 3 Exercises.

## B. Coverage and slides

| Stewart section | Printed pages | Slides | Core mathematical achievement |
|---|---|---|---|
| 3.1 Maximum and Minimum Values | 204–212 | 01–07 | Locate and compare candidates for absolute/local extrema |
| 3.2 The Mean Value Theorem | 215–220 | 08–13 | Understand hypotheses and consequences of the MVT |
| 3.3 How Derivatives Affect the Shape of a Graph | 221–230 | 14–22 | Use first/second derivatives to reason about shape |
| 3.4 Limits at Infinity; Horizontal Asymptotes | 231–243 | 23–28 | Distinguish end behavior and asymptotes |
| 3.5 Summary of Curve Sketching | 244–250 | 29–34 | Complete a mathematically defensible curve analysis |
| 3.6 Graphing with Calculus and Calculators | 251–258 | 35–39 | Use tools to explore without confusing images for proofs |
| 3.7 Optimization Problems | 258–271 | 40–48 | Formulate, solve and validate constrained optima |
| 3.8 Newton's Method | 272–277 | 49–53 | Approximate roots by repeated tangent intersections |
| 3.9 Antiderivatives + synthesis | 278–285 | 54–60 | Recover a function from its derivative; synthesize with ML |

**Interaction budget (prefer reuse):** one extrema/critical-point plot, one secant-to-parallel-tangent MVT plot, one sign-and-concavity explorer, one horizontal/vertical asymptote plot, one existing graph-family parameter slider, one optimization rectangle/cylinder (simple SVG), one Newton iteration plot, one antiderivative-slope pairing. Supplemental ML loss marker may reuse the existing loss curve. Static mathematically exact figures are better than incomplete interactive figures.

## C. Exact slide storyboard

### Slide 01 — Derivatives Help Us Make Decisions
- **Student-facing text:** "A derivative does more than measure a slope. Its sign and size help us locate peaks, explain motion, optimize designs, and approximate solutions."
- **Display:** `Increasing? Decreasing? Best possible value? Root of an equation?`
- **Visual:** three small accurate graphs: a peak, a curve with tangent, a cost curve with its minimum. Avoid implying every function has a maximum and minimum.
- **Source:** chapter introduction, p. 203; §3.1, p. 204.

### Slide 02 — Absolute and Local Extreme Values
- **Definition:** "An **absolute maximum** is the greatest function value on its entire domain; a **local maximum** is at least as great as sufficiently nearby domain values." Analogous minimum definitions.
- **Formula:** $$f(c)\ge f(x)\quad \text{for all }x\text{ in the domain (absolute maximum).}$$
- **Visual:** plot a smooth curve with one local peak lower than its absolute peak; distinctly label **value** `f(c)` and **location** `c`. Endpoints may achieve absolute extrema.
- **Note:** local extrema can occur at endpoints under a relative-to-domain convention, but Fermat's interior differentiable-point statement must not be misapplied to endpoint extrema.

### Slide 03 — The Extreme Value Theorem
- **Statement:** "If `f` is continuous on a closed, bounded interval `[a,b]`, then `f` attains both an absolute maximum and an absolute minimum there."
- **Display:** $$f\text{ continuous on }[a,b]\ \Longrightarrow\ \exists\,c,d\in[a,b]:\quad f(c)\le f(x)\le f(d).$$
- **Worked contrast:** `f(x)=x` on `[0,1]` attains min `0` and max `1`. On `(0,1)`, it has neither absolute maximum nor minimum.
- **Visual:** aligned graphs with solid endpoints for `[0,1]` and open endpoints for `(0,1)`.
- **Caution:** EVT ensures existence, not the coordinates or derivative conditions.

### Slide 04 — Fermat's Theorem: A Necessary Condition
- **Statement:** "If `f` has a local extreme at an **interior** point `c` and `f'(c)` exists, then `f'(c)=0`."
- **Formula:** $$\text{interior differentiable local extremum}\ \Longrightarrow\ f'(c)=0.$$
- **Mini proof idea:** at a maximum, the nearby difference quotient is nonpositive for `h>0`, nonnegative for `h<0`; equal one-sided limits, when they exist, must be `0`.
- **Visual:** moving tangent at a smooth peak; contrast a sharp corner where derivative does not exist.
- **Check:** converse is false: `f(x)=x^3` has `f'(0)=0` but no extremum.

### Slide 05 — Critical Numbers: The Complete Candidate List
- **Definition:** "A critical number `c` is a number **in the domain** of `f` for which `f'(c)=0` or `f'(c)` does not exist."
- **Worked examples:** for `f(x)=x^3-3x`, `f'(x)=3x^2-3=0` gives critical numbers `-1,1`. For `g(x)=|x|`, `0` is critical because `g` is defined there but `g'(0)` does not exist.
- **Counterexample:** `x=0` is **not** a critical number of `1/x`, since `f(0)` is undefined.
- **Visual:** paired smooth turning points, cusp, and a hole at an excluded domain value.

### Slide 06 — Closed Interval Method: A Complete Example
- **Problem:** "Find the absolute extrema of `f(x)=x^3-3x` on `[-2,3]`."
- **Reveal:** $$f'(x)=3x^2-3=3(x-1)(x+1),\qquad x=-1,1.$$ $$\begin{array}{c|rrrr}x&-2&-1&1&3\\\hline f(x)&-2&2&-2&18\end{array}$$
- **Conclusion:** absolute maximum value `18` at `x=3`; absolute minimum value `-2` attained at **both** `x=-2` and `x=1`.
- **Visual:** exact graph over the closed interval with endpoints and both minima highlighted.
- **Method:** evaluate endpoints and all interior critical numbers, then compare *actual function values*.

### Slide 07 — What the First Derivative Cannot Tell Us Alone
- **Message:** "A horizontal tangent identifies a candidate, not necessarily a maximum or minimum."
- **Compare:** `x^2` at `0` (minimum), `-x^2` at `0` (maximum), `x^3` at `0` (neither); all have zero derivative at `0`.
- **Visual:** three synchronized plots with horizontal tangent `y=0`; show neighboring function values to justify each classification.
- **Concept check:** "Do we need to examine interval endpoints for absolute extrema?" Answer revealed: "Yes, even when the derivative is not zero there."

### Slide 08 — Rolle's Theorem
- **Statement:** "If `f` is continuous on `[a,b]`, differentiable on `(a,b)`, and `f(a)=f(b)`, then there is a `c` in `(a,b)` such that `f'(c)=0`."
- **Worked case:** `f(x)=x^2-1`, `[a,b]=[-1,1]`. Since `f(-1)=f(1)=0` and `f'(x)=2x`, `c=0` works.
- **Visual:** curve connecting equal-height endpoints and a horizontal interior tangent.
- **Check:** conditions are hypotheses, not afterthoughts.
- **Source:** §3.2, pp. 215–216.

### Slide 09 — Why Rolle's Hypotheses Matter
- **Contrast:** `f(x)=|x|` on `[-1,1]` is continuous, has equal endpoint values, but is **not differentiable at zero**; no point inside has derivative zero.
- **Another contrast:** an abrupt jump violates continuity and may also invalidate the conclusion.
- **Visual:** left panel `|x|` with corner and two one-sided slopes; right panel a smooth comparison satisfying the theorem.
- **On-screen question:** "Which hypothesis fails in this example?" Reveal: "Differentiability on the open interval."

### Slide 10 — The Mean Value Theorem (MVT)
- **Statement:** "If `f` is continuous on `[a,b]` and differentiable on `(a,b)`, there exists `c\in(a,b)` whose tangent slope equals the endpoint secant slope."
- **Formula:** $$\boxed{f'(c)=\frac{f(b)-f(a)}{b-a}},\qquad a<c<b.$$
- **Visual/interaction:** fixed secant `A B` across a differentiable curve and a movable tangent; visually mark where the two are parallel. Clearly distinguish the existential statement from a claim of uniqueness.
- **Source:** §3.2, pp. 216–217.

### Slide 11 — Find the MVT Point Exactly
- **Problem:** "Find the point guaranteed by MVT for `f(x)=x^2` on `[1,3]`."
- **Reveal:** $$\frac{f(3)-f(1)}{3-1}=\frac{9-1}{2}=4,\qquad f'(x)=2x.$$ $$2c=4\quad\Longrightarrow\quad c=2\in(1,3).$$
- **Visual:** parabola `y=x²`, secant from `(1,1)` to `(3,9)`, and parallel tangent at `(2,4)`.
- **Check:** `c=2` lies strictly inside the interval.

### Slide 12 — MVT as a Statement About Motion
- **Problem:** "A vehicle changes position from `s(0)=0 m` to `s(4)=24 m` over four seconds. What is guaranteed if its position is continuous and differentiable?"
- **Reveal:** $$v_{\mathrm{avg}}=\frac{24-0}{4-0}=6\ \mathrm{m/s}.$$ "At least one instant `c` between 0 and 4 seconds has instantaneous **signed velocity** `v(c)=6 m/s`."
- **Visual:** arbitrary smooth position–time curve through `(0,0)` and `(4,24)` with a parallel tangent; no fictional actual speed profile unless a specific `s(t)` is given.
- **Distinction:** theorem ensures an instantaneous *velocity* equal to the average velocity; it does not say the vehicle maintained that speed throughout.

### Slide 13 — MVT Consequences: Constant and Equal Derivatives
- **Statement:** "On an interval, if `f'(x)=0` everywhere, `f` is constant. If `f'(x)=g'(x)` everywhere, `f-g` is constant."
- **Proof idea:** apply MVT to any two points `a<b`: `f(b)-f(a)=f'(c)(b-a)=0`.
- **Worked example:** `f'(x)=2x` and `g'(x)=2x` give `f(x)-g(x)=C` on a connected interval; e.g. `x²+7` and `x²-3` differ by 10.
- **Visual:** two vertically shifted parabolas with identical tangent slopes at the same `x`.
- **Note:** an interval/domain-connectivity assumption is essential when claiming one global constant.

### Slide 14 — Increasing and Decreasing from f'(x)
- **Criterion:** "Where `f'(x)>0` throughout an interval, `f` increases; where `f'(x)<0`, `f` decreases."
- **Display:** $$f'(x)>0\Rightarrow f\text{ increasing},\qquad f'(x)<0\Rightarrow f\text{ decreasing}.$$
- **Visual:** linked plots of a curve and its derivative; shade only intervals where a single sign is established.
- **Logic:** these are interval conclusions justified by MVT; a single positive value of `f'` does not certify an entire interval.
- **Source:** §3.3, pp. 221–223.

### Slide 15 — Build a First-Derivative Sign Chart
- **Example:** `f(x)=x³-3x`.
- **Reveal:** $$f'(x)=3(x-1)(x+1).$$ $$\begin{array}{c|ccc}\text{Interval}&(-\infty,-1)&(-1,1)&(1,\infty)\\\hline\operatorname{sign}(f')&+&-&+\\f&\nearrow&\searrow&\nearrow\end{array}$$
- **Visual:** the exact cubic with markers at `x=-1,1`, and a separate clean sign-line graphic. No vertical asymptote should be drawn at critical numbers.

### Slide 16 — First Derivative Test
- **Rule:** "At a critical point, a derivative sign change `+` to `−` gives a local maximum; `−` to `+` gives a local minimum. No sign change gives neither under the usual sign-test hypotheses."
- **Worked example:** for `x³-3x`, `f(-1)=2` is a local maximum; `f(1)=-2` a local minimum.
- **Visual:** focused zoom with directional arrows and sign labels on either side of both critical points.
- **Important:** this local test does not by itself determine global extrema on an unbounded domain.

### Slide 17 — Concavity: How the Slope Changes
- **On screen:** "A curve is **concave upward** where its slopes are increasing; **concave downward** where its slopes are decreasing."
- **Relation:** $$f''(x)>0\Rightarrow\text{concave up},\qquad f''(x)<0\Rightarrow\text{concave down}.$$
- **Visual:** two curves with moving tangents; show tangent slope getting larger versus smaller as x increases.
- **Note:** a graph can be decreasing and still concave upward (example `e^{-x}`), so do not conflate slope sign with concavity.

### Slide 18 — Inflection Point: A Genuine Concavity Change
- **Problem:** "Identify the inflection point of `f(x)=x³-3x`."
- **Reveal:** $$f'(x)=3x^2-3,\qquad f''(x)=6x.$$ "For `x<0`, `f''<0` (concave down); for `x>0`, `f''>0` (concave up). The inflection point is `(0,0)`."
- **Visual:** color the two concavity regions differently on one continuous cubic; mark `(0,0)` at the concavity change.
- **Caution:** `f''(c)=0` alone is not sufficient: `x^4` has `f''(0)=0` but stays concave upward on both sides.

### Slide 19 — Second Derivative Test
- **Rule:** "At an interior critical point `c` where `f'(c)=0`, `f''(c)>0` implies a local minimum; `f''(c)<0` implies a local maximum. If `f''(c)=0`, the test is inconclusive."
- **Examples:** `x²` at 0: minimum; `-x²` at 0: maximum; `x⁴` at 0: `f''(0)=0` but minimum (use the first derivative test or direct comparison).
- **Visual:** magnified U and inverted U with convexity arrows; show an "inconclusive" case without mislabeling it as neither.

### Slide 20 — Worked Shape Analysis: A Quartic
- **Problem:** "Analyze `f(x)=x^4-4x^2` for local extrema."
- **Reveal:** $$f'(x)=4x(x^2-2),\quad x\in\{-\sqrt2,0,\sqrt2\}.$$ $$f''(x)=12x^2-8.$$ "At `x=0`, `f''(0)=-8<0`: local maximum `f(0)=0`. At `x=\pm\sqrt2`, `f''=16>0`: local minima `f(\pm\sqrt2)=-4`."
- **Visual:** symmetric W-shaped quartic with correctly labeled points and a horizontal tangent at each critical point.

### Slide 21 — Curvature and Inflection Points in the Quartic
- **Continue:** `f(x)=x⁴-4x²`.
- **Reveal:** $$f''(x)=12x^2-8=0\quad\Longrightarrow\quad x=\pm\sqrt{\frac23}.$$ "Concave up for `|x|>\sqrt{2/3}`, concave down for `|x|<\sqrt{2/3}`; both boundaries are inflection points."
- **Coordinates:** $$\left(\pm\sqrt{\frac23},-\frac{20}{9}\right).$$
- **Visual:** connect `f`, `f'`, and `f''` in coordinated panels; show actual concavity sign changes.
- **Check:** an inflection point need not be a local maximum or minimum.

### Slide 22 — Motion: When Is Speed Increasing?
- **Student-facing:** "Velocity tells us direction; acceleration tells us how velocity changes. Speed increases when velocity and acceleration have the same nonzero sign."
- **Example:** $$s(t)=t^3-3t^2\ (\mathrm m),\quad v(t)=3t(t-2)\ (\mathrm{m/s}),\quad a(t)=6t-6\ (\mathrm{m/s^2}),\quad t>0.$$
- **Interpretation:** `0<t<1`: both negative, **speed increases**; `1<t<2`: velocity negative but acceleration positive, **speed decreases**; `t>2`: both positive, **speed increases**. At `t=2`, velocity is zero, so treat the turning point separately.
- **Visual:** sign table for `v` and `a` and a moving one-dimensional particle; never equate negative velocity with negative speed.

### Slide 23 — Limits at Infinity Describe End Behavior
- **Definition:** "`lim_{x→∞}f(x)=L` means output approaches `L` as input becomes arbitrarily large."
- **Example:** $$f(x)=\frac{2x^2+1}{x^2+1}=2-\frac{1}{x^2+1}\quad\Longrightarrow\quad\lim_{x\to\infty}f(x)=2.$$
- **Visual:** curve leveling off near dashed `y=2`; animate widening x-range rather than an artificial finite destination marked "infinity".
- **Source:** §3.4, pp. 231–243.

### Slide 24 — Horizontal Asymptotes: Two Directions
- **Definition:** "`y=L` is a horizontal asymptote when at least one of `lim_{x→∞}f(x)` or `lim_{x→−∞}f(x)` equals the finite number `L`."
- **Worked example:** $$f(x)=\frac{x}{\sqrt{x^2+1}},\quad\lim_{x\to\infty}f(x)=1,\quad\lim_{x\to-\infty}f(x)=-1.$$
- **Visual:** accurate increasing curve between `y=-1` and `y=1` with two separate dashed asymptotes. Note `\sqrt{x^2}=|x|`, **not** `x` for negative x.

### Slide 25 — A Graph Can Cross Its Horizontal Asymptote
- **Example:** $$f(x)=\frac{x^2+x}{x^2+1},\qquad \lim_{x\to\pm\infty}f(x)=1,\qquad f(1)=1.$$
- **Message:** "A horizontal asymptote describes behavior far away; the curve is allowed to cross that line at finite x."
- **Visual:** plot exact rational function, dashed `y=1`, and crossing `(1,1)`; do not turn the asymptote into a forbidden barrier.
- **Check:** denominator is always positive; the function is defined for every real x.

### Slide 26 — Vertical and Horizontal Asymptotes Are Different
- **Example:** $$g(x)=\frac{x}{x-1}=1+\frac{1}{x-1}.$$
- **Reveal:** $$\lim_{x\to1^-}g(x)=-\infty,\quad \lim_{x\to1^+}g(x)=+\infty,\quad \lim_{x\to\pm\infty}g(x)=1.$$
- **Visual:** two disconnected branches; vertical dashed `x=1`, horizontal dashed `y=1`, with correct open domain at x=1. Never draw a continuous stroke through the vertical asymptote.

### Slide 27 — Rational Functions: Compare Highest Powers
- **Student-facing:** "For rational functions, divide numerator and denominator by the highest relevant power of x to determine finite end limits."
- **Three examples:** $$\lim_{x\to\infty}\frac{3x^2-2}{x^2+4}=3,$$ $$\lim_{x\to\infty}\frac{2x+1}{x^2+1}=0,$$ $$\lim_{x\to\infty}\frac{x^2+1}{x+1}=+\infty.$$
- **Visual:** three small separate graphs; mark horizontal asymptotes only for the first two. The last has **no horizontal asymptote** at positive infinity; it has oblique end behavior.
- **Scope:** this is an end-limit shortcut for polynomial ratios, not a general rule for every function.

### Slide 28 — Infinite Limits, Large Inputs, and Modeling
- **Compare:** $$\lim_{x\to 2^+}\frac{1}{x-2}=+\infty,\qquad\lim_{x\to\infty}\frac{1}{x-2}=0.$$
- **Student-facing:** "Approaching a finite input is not the same process as sending input to infinity."
- **Visual/interaction:** toggle **Near the pole** versus **Far to the right** on one exact graph, adapting its window while keeping `x=2` as the same excluded point.
- **Supplemental modeling note:** a saturating model may have a horizontal asymptote representing a limiting response; asymptotic behavior alone is not evidence that the model describes every real system.

### Slide 29 — Curve Sketching: A Reliable Checklist
- **Student-facing:** "A credible sketch comes from function properties, not artistic guesswork."
- **Show six short stages:** domain; intercepts and symmetry; asymptotes/end behavior; first derivative/critical numbers; second derivative/inflection; combine on correctly labeled axes.
- **Visual:** six compact icons matched to one example curve; no generic progress dashboard or instructor metadata.
- **Source:** §3.5, pp. 244–250.

### Slide 30 — Sketching Step 1: Domain and Intercepts
- **Model:** $$f(x)=x^3-3x=x(x^2-3).$$
- **Reveal:** domain `\mathbb R`; x-intercepts at `-\sqrt3`, `0`, `\sqrt3`; y-intercept `(0,0)`; odd symmetry `f(-x)=-f(x)`.
- **Visual:** bare axes and only confirmed features first; reveal the curve after its mathematical features have been assembled.

### Slide 31 — Sketching Step 2: Stationary Points and Monotonicity
- **Continue:** $$f'(x)=3(x^2-1),\qquad x=\pm 1.$$
- **Reveal:** increasing on `(-∞,-1)` and `(1,∞)`, decreasing on `(-1,1)`; local max `(-1,2)` and local min `(1,-2)`.
- **Visual:** arrows along x-intervals, stationary markers, a clean first-derivative sign table.

### Slide 32 — Sketching Step 3: Concavity and End Behavior
- **Continue:** $$f''(x)=6x.$$ "Concave downward on `(-∞,0)`, concave upward on `(0,∞)`; inflection at `(0,0)`."
- **End behavior:** $$\lim_{x\to\infty}f(x)=+\infty,\qquad\lim_{x\to-\infty}f(x)=-\infty.$$
- **Visual:** finish the cubic with mathematically justified shape; no false horizontal or vertical asymptotes.

### Slide 33 — Rational Function Sketching: A Different Challenge
- **Model:** $$g(x)=\frac{x+1}{x-2}=1+\frac{3}{x-2}.$$
- **Reveals:** domain `x\ne2`; x-intercept `(-1,0)`; y-intercept `(0,-1/2)`; vertical asymptote `x=2`; horizontal asymptote `y=1`.
- **Derivative analysis:** $$g'(x)=-\frac{3}{(x-2)^2}<0\quad(x\ne2).$$
- **Visual:** two separate decreasing branches with correct behavior on each side of `x=2`. Never draw a line connecting them.

### Slide 34 — Complete the Rational Sketch: Concavity
- **Continue:** $$g''(x)=\frac{6}{(x-2)^3}.$$
- **Conclusion:** concave down on `(-∞,2)`, concave up on `(2,∞)`; **no inflection point at `x=2`**, because the function is not defined there. Neither branch has a local extremum.
- **Visual:** overlay all verified features: intercepts, two asymptotes, decreasing arrows, concavity shading. Show an optional summary reveal with domain and branches.
- **Six-minute break:** starts **after** slide 34, outside the numbered deck.

### Slide 35 — Technology Can Suggest; Calculus Can Justify
- **On screen:** "A graphing device samples and renders a function. Derivatives and limits explain why the shape occurs."
- **Worked comparison:** `f(x)=x³-3x`: computed zeros of `f'` at `±1`; a graphing window is useful for inspecting the turning points but does not replace the analytic proof.
- **Visual:** side-by-side accurate graph and first-derivative sign line.
- **Source:** §3.6, pp. 251–258.

### Slide 36 — Choosing a Graphing Window
- **Message:** "A poorly chosen viewing rectangle may hide a root, an extremum, or the end behavior."
- **Example:** $$f(x)=(x-10)^2+1.$$ "A window with `-2\le x\le2` cannot show the minimum at `(10,1)`."
- **Interaction:** two presets **Narrow window** and **Relevant window**; retain the same mathematical function and display explicit axis bounds in both.

### Slide 37 — Families of Curves: One Parameter, Different Shapes
- **Model:** $$f_c(x)=x^3-3cx,\qquad f_c'(x)=3(x^2-c).$$
- **Reveal:** `c>0`: critical points `\pm\sqrt c`, one local max and one local min; `c=0`: stationary point at zero but no extremum; `c<0`: derivative strictly positive everywhere, so no turning points.
- **Interaction:** slider `c\in[-2,2]` with real-time f and critical markers only when they exist. For `c=0`, show a horizontal stationary tangent but **do not** label it a minimum.

### Slide 38 — Numerical Graphing and Approximate Roots
- **On screen:** "Some roots are not simple rational numbers. A numerical graph gives an initial estimate; a numerical method can improve it."
- **Example:** $$\cos x=x,\qquad x\approx0.739085.$$
- **Visual:** plot `y=\cos x` and `y=x` together, show approximate intersection with appropriately labeled numeric precision; angles in **radians**.
- **Caution:** the decimal is approximate, not an exact symbolic expression. Preview the idea of Newton's Method, developed in §3.8.

### Slide 39 — Graphing Artifacts and Discontinuities
- **Warning:** "Connecting sampled points across a discontinuity can suggest an entirely false line."
- **Example:** $$f(x)=\tan x,\qquad x\ne\frac\pi2+k\pi.$$
- **Visual:** demonstrate correct branch separation at `x=\pi/2` and contrast with a deliberately incorrect straight interpolation labeled **Incorrect rendering**. Interactive plot must implement correct domain gaps; do not actually use fake interpolation in the main mathematical graph.
- **Takeaway:** interpret graphs together with domains, limits, and analytic checks.

### Slide 40 — Optimization: Translate a Real Problem into a Function
- **Workflow:** "Choose a variable → express the objective → use the constraint → establish the domain → differentiate → test candidates → interpret the answer."
- **On-screen contrast:** `Objective: maximize area` versus `Constraint: limited material`.
- **Visual:** dimensioned rectangle with movable sides; display physical constraints rather than a generic downward arrow.
- **Source:** §3.7, pp. 258–271.

### Slide 41 — Worked Optimization: Largest Rectangle with Fixed Perimeter
- **Problem:** "A rectangle has perimeter 40 units. Which dimensions maximize area?"
- **Model:** $$2\ell+2w=40\ \Longrightarrow\ w=20-\ell,\qquad A(\ell)=\ell(20-\ell),\quad0<\ell<20.$$
- **Reveal:** $$A'(\ell)=20-2\ell=0\ \Longrightarrow\ \ell=10,\ w=10,\ A_{\max}=100\ \text{square units}.$$
- **Verification:** `A''(\ell)=-2<0`; area approaches zero at either boundary. The maximum is a square.
- **Visual/interaction:** drag side length while preserving perimeter, updating the true rectangle and parabola `A(\ell)` simultaneously.

### Slide 42 — A Closed Cylindrical Can: Set Up the Model
- **Problem inspired by Stewart §3.7:** "For a closed cylindrical can holding `1 L`, minimize total metal surface area."
- **Units:** `1 L=1000 cm³`.
- **Constraint:** $$V=\pi r^2h=1000\quad\Longrightarrow\quad h=\frac{1000}{\pi r^2},\qquad r>0.$$
- **Objective:** $$S=2\pi r^2+2\pi rh=2\pi r^2+\frac{2000}{r}.$$
- **Visual:** a simply drawn closed cylinder with two circular ends and the curved side; label `r`, `h`, `V`, all in centimeters. Do not use the formula for an open-top can.

### Slide 43 — The Can: Differentiate and Prove the Minimum
- **Continue:** $$S'(r)=4\pi r-\frac{2000}{r^2}=0\quad\Longrightarrow\quad r^3=\frac{500}{\pi}.$$
- **Exact conclusion:** $$\boxed{r=\left(\frac{500}{\pi}\right)^{1/3}},\qquad \boxed{h=2r}.$$
- **Numerical:** `r≈5.4193 cm`, `h≈10.8385 cm`.
- **Verification:** $$S''(r)=4\pi+\frac{4000}{r^3}>0\quad(r>0),$$ and `S(r)→∞` both as `r→0+` and `r→∞`; the critical point is the **unique global minimum**.
- **Visual:** surface-area curve with movable r marker and a proportional cylinder; labels must update from the same r.

### Slide 44 — Open-Top Box: A Constrained Volume Problem
- **Problem:** "Cut equal squares of side `x` from the corners of a `12 cm × 12 cm` sheet; fold up the sides to form an open-top box. Maximize its volume."
- **Model:** $$V(x)=x(12-2x)^2,\qquad 0<x<6\quad(\mathrm{cm}).$$
- **Reveal:** $$V'(x)=(12-2x)(12-6x).$$ "The only interior critical number is `x=2 cm`; there `V=2(8)^2=128 cm³`. As `x→0+` or `6−`, volume tends to zero, so this is the global maximum."
- **Visual:** unfolded net and folded box, with cut size and edge lengths kept accurate. A lightweight CSS/SVG fold illustration is sufficient.

### Slide 45 — Optimization with a Three-Sided Fence
- **Problem:** "A straight river forms one edge of a rectangular enclosure. You have `100 m` of fencing for the other three sides. Find the maximum area."
- **Model:** $$2x+y=100,\qquad y=100-2x,\qquad A(x)=x(100-2x),\quad0<x<50.$$
- **Reveal:** $$A'(x)=100-4x=0\ \Longrightarrow\ x=25\ \mathrm m,\quad y=50\ \mathrm m.$$ $$A_{\max}=1250\ \mathrm{m^2}.$$
- **Visual:** label river boundary **unfenced**, the two equal perpendicular fences `x`, and opposite side `y`; link a slider to area with consistent units.

### Slide 46 — Optimization in Economics: Marginal Quantities
- **Model:** $$C(q)=100+5q+0.02q^2\quad(\text{currency units}),\qquad q\ge0.$$
- **Derivative:** $$C'(q)=5+0.04q.$$
- **Worked interpretation:** at `q=50`, `C'(50)=7` currency units per additional unit of output. "For a sufficiently small increase `\Delta q`, `\Delta C\approx C'(50)\Delta q`."
- **Visual:** total cost curve and its tangent at `q=50`; show slope as **marginal cost**, not incorrectly as total cost.
- **Caution:** differential estimate applies locally and does not equal a discrete unit-cost change exactly in a nonlinear model.

### Slide 47 — Machine Learning Is Also an Optimization Problem
- **Supplemental modern application:** "Training can be framed as minimizing an error or loss function over a model parameter."
- **Model:** $$L(w)=(w-3)^2,\qquad L'(w)=2(w-3),\qquad L''(w)=2>0.$$
- **Reveal:** `L'(w)=0` at `w=3`. Since `L(w)≥0` everywhere and `L(3)=0`, this is the **unique global minimum**.
- **Visual/interaction:** exact `(w,L)` parabola with movable w, instantaneous tangent slope and minimum marker; reuse the existing loss graph if available.
- **Source boundary:** this loss function is **not** claimed to be an exercise from Stewart.

### Slide 48 — An Optimization Answer Must Be Defensible
- **On screen:** "Solving `f'(x)=0` finds candidates. It does not automatically find the required optimum."
- **Checklist presented as mathematical questions:** "Is the point in the feasible domain? Are boundaries included? Are there other critical points? Do derivative signs or concavity confirm the result? Can the objective diverge at an open boundary? Are the units meaningful?"
- **Quick checks:** `x³` at zero: no minimum; open-top box `x=2 cm`: feasible and maximal; can model `h=2r`: applies to a **closed** cylinder with specified volume.
- **Visual:** compact comparison of a stationary inflection, a constrained maximum, and a confirmed global minimum; no false universal claim that `f''>0` at a point alone establishes a global minimum.

### Slide 49 — Newton's Method: Turning Tangents into Root Estimates
- **Question:** "How can we solve `f(x)=0` when a closed-form root is difficult to obtain?"
- **Idea:** "Starting at `x_n`, replace the curve locally by its tangent; use that tangent's x-intercept as the next approximation."
- **Visual/interaction:** graph `f(x)=x²-2` with tangent at an initial guess `x_0`; reveal its x-intercept as `x_1`. Keep root target `\sqrt2` marked only after the construction.
- **Source:** §3.8, pp. 272–277.

### Slide 50 — Derive the Newton Iteration
- **At current approximation `x_n`:** $$y=f(x_n)+f'(x_n)(x-x_n).$$
- **Set the tangent's y-coordinate to zero:** $$0=f(x_n)+f'(x_n)(x_{n+1}-x_n).$$
- **Solve:** $$\boxed{x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}}\quad\text{provided }f'(x_n)\ne0.$$
- **Visual:** label `f(x_n)`, tangent slope, horizontal correction and next x-intercept; avoid presenting a finite difference as the derivative.

### Slide 51 — Newton's Method: Two Accurate Iterations
- **Problem:** "Estimate `\sqrt2` by solving `f(x)=x²-2=0` with `x_0=1.5`."
- **Reveal:** $$x_{n+1}=x_n-\frac{x_n^2-2}{2x_n}=\frac12\left(x_n+\frac2{x_n}\right).$$ $$x_1=\frac12\left(\frac32+\frac43\right)=\frac{17}{12}\approx1.416666667.$$ $$x_2=\frac12\left(\frac{17}{12}+\frac{24}{17}\right)=\frac{577}{408}\approx1.414215686.$$
- **Check:** `\sqrt2≈1.414213562`, so the second iteration is very close.
- **Visual:** two tangent-to-intercept constructions on the actual parabola; slider/stepper **Iteration 0/1/2** only if easily reusable.

### Slide 52 — Newton's Method Can Fail or Cycle
- **Counterexample:** $$f(x)=x^3-2x+2,\quad f'(x)=3x^2-2.$$ "From `x_0=0`, Newton gives `x_1=1`; from `x_1=1`, Newton gives `x_2=0`. It cycles."
- **Reveal:** $$x_1=0-\frac{2}{-2}=1,\qquad x_2=1-\frac{1}{1}=0.$$
- **Other failure:** if `f'(x_n)=0`, division is undefined.
- **Visual:** tangent steps bouncing between `0` and `1` on the exact cubic; label **Cycle**, not **Convergence**.
- **Caution:** convergence depends on the starting point and function; never promise that Newton always succeeds.

### Slide 53 — A Link to Optimization: Root Finding for the Derivative
- **Idea:** "To find a stationary point of a differentiable loss, solve `L'(w)=0`. Newton's root-finding iteration applied to `L'` yields a curvature-sensitive update."
- **Display:** $$w_{n+1}=w_n-\frac{L'(w_n)}{L''(w_n)}\quad\text{when }L''(w_n)\ne0.$$
- **Example:** for `L(w)=(w-3)²`, from `w_0=0`, $$w_1=0-\frac{-6}{2}=3.$$
- **Visual:** compare one derivative-based Newton update with the existing loss parabola. Explicitly label **Supplemental optimization connection** in internal notes only; audience copy can say **Optimization with Newton's Method**.
- **Safety:** solving `L'=0` does not ensure a minimum, and Newton updates need not lower the loss for every objective.

### Slide 54 — Reverse the Derivative: Antiderivatives
- **Definition:** "An **antiderivative** of `f` on an interval is a differentiable function `F` whose derivative is `f`."
- **Formula:** $$F'(x)=f(x).$$
- **Example:** since `d(x³)/dx=3x²`, any `F(x)=x³+C` is an antiderivative of `f(x)=3x²` on the real line.
- **Visual:** several vertically shifted cubics `x³+C` alongside the unchanged derivative `3x²`.
- **Source:** §3.9, pp. 278–284.

### Slide 55 — Families of Antiderivatives and the Constant C
- **Rule:** $$\frac{d}{dx}\left(\frac{x^{n+1}}{n+1}+C\right)=x^n,\qquad n\ne-1,$$ on any interval where the powers are defined and differentiable.
- **Worked examples:** $$\frac{d}{dx}\left(\frac{x^4}{4}+C\right)=x^3;\qquad \frac{d}{dx}(-\cos x+C)=\sin x;\qquad \frac{d}{dx}(\sin x+C)=\cos x.$$
- **Important:** `x^{-1}` is excluded from the displayed power antiderivative rule; its special logarithmic treatment belongs to Chapter 6. On disconnected domains, integration constants can differ between components.
- **Visual:** emphasize identical slopes across vertical shifts without claiming identical function values.

### Slide 56 — Use an Initial Condition to Determine C
- **Problem:** "Find `F` if `F'(x)=6x-4` and `F(1)=5`."
- **Reveal:** $$F(x)=3x^2-4x+C.$$ $$5=F(1)=3-4+C=-1+C\quad\Longrightarrow\quad C=6.$$ $$\boxed{F(x)=3x^2-4x+6}.$$
- **Check:** `F'(x)=6x-4`; `F(1)=5`.
- **Visual:** show the whole parabola family vertically shifting, with the specific curve chosen to pass through `(1,5)`.

### Slide 57 — Recover Position from Acceleration
- **Physical problem:** "A projectile moves vertically with constant acceleration `a(t)=-9.8 m/s²`, initial velocity `v(0)=20 m/s`, and initial position `s(0)=0 m`. Ignore air resistance."
- **Reveal:** $$v'(t)=-9.8\ \Longrightarrow\ v(t)=20-9.8t\ (\mathrm{m/s}).$$ $$s'(t)=v(t)\ \Longrightarrow\ s(t)=20t-4.9t^2\ (\mathrm m).$$
- **Physical interpretation:** top reached when `v=0`, at `t=20/9.8≈2.0408 s`; maximum height `20²/(2\cdot9.8)≈20.408 m` above launch position.
- **Visual:** parabolic height–time plot and a rising/falling projectile with correct axes and units. Do not confuse acceleration with velocity.

### Slide 58 — Reconstruct the Graph of F from the Graph of f
- **Given:** $$F'(x)=f(x)=x^2-1,\qquad F(0)=0.$$
- **Recover:** $$F(x)=\frac{x^3}{3}-x.$$
- **Qualitative prediction before revealing F:** `f>0` when `x<-1` or `x>1`, so `F` increases there; `f<0` for `-1<x<1`, so `F` decreases there. `F` has a local maximum at `(-1,2/3)` and a local minimum at `(1,-2/3)`.
- **Visual/interaction:** paired graphs of `f` and `F` with vertical shared x-guide; reveal exact recovered F only after qualitative slope reasoning.

### Slide 59 — Differentiation and Optimization: A Final Comparison
- **Supplemental Machine Learning application:** $$L(w)=(w-3)^2,\quad L'(w)=2(w-3),\quad L''(w)=2.$$
- **Three linked questions:** "What is the slope at `w`?" (first derivative); "Is the stationary point a minimum?" (`L''>0`, plus `L≥0`); "How do we improve an initial parameter?" (numerical update).
- **Visual:** one loss curve with derivative sign `−` for `w<3` and `+` for `w>3`, and a tangent at movable `w`.
- **Caution:** single-variable optimization is an introduction; multivariable gradients and curvature will be studied later in Stewart Chapter 14.

### Slide 60 — Two Ways to Improve a Model Parameter
- **Compare, same objective and same start:** $$L(w)=(w-3)^2,\qquad w_0=0.$$
- **Gradient descent with `\eta=0.2`:** $$w_1=w_0-\eta L'(w_0)=0-0.2(-6)=1.2,\qquad L(w_1)=3.24.$$
- **Newton update for the stationary point:** $$w_1^{\mathrm{Newton}}=w_0-\frac{L'(w_0)}{L''(w_0)}=3,\qquad L(3)=0.$$
- **Accurate conclusion:** "For this quadratic and chosen settings, Newton reaches the minimum in one step, while gradient descent moves partway. Neither method is universally guaranteed to improve arbitrary functions without appropriate conditions."
- **Visual:** on the same light graph, mark `w=0`, `w=1.2`, and `w=3` using distinct legend entries. Do not mix the two methods' trajectories.
- **Closing line:** "Derivatives reveal a function's behavior; calculus helps us use that behavior to solve real problems."

---

## D. Required mathematical checks (internal; never a student-facing QA table)

| Slide | Test | Expected result |
|---|---|---|
| 03 | EVT applies to `x` on closed `[0,1]` | min 0, max 1; not attained on `(0,1)` |
| 04 | stationary point of `x³` at 0 | `f'(0)=0` but no local extremum |
| 05 | derivative of `x³-3x` | `3x²-3`; critical `±1` |
| 06 | all candidates for cubic on `[-2,3]` | `-2,2,-2,18`; global min −2 attained twice |
| 08 | Rolle for `x²−1`, `[-1,1]` | `c=0` |
| 09 | Rolle `|x|` | differentiability hypothesis fails at 0 |
| 11 | MVT for `x²` on `[1,3]` | secant slope 4, `c=2` |
| 12 | `s(4)−s(0)=24 m` over `4 s` | mean signed velocity 6 m/s |
| 15–16 | `x³−3x` | inc/decrease/inc; local max `(−1,2)`, min `(1,−2)` |
| 18 | `f''=6x` | inflection `(0,0)` from genuine sign change |
| 20 | `x⁴−4x²` | local max at `0`, local minima at `±√2`, value −4 |
| 21 | `f''=12x²−8` | inflections `(±√(2/3),−20/9)` |
| 22 | `s=t³−3t²` for `t>0` | speed up on `(0,1)` and `(2,∞)`; down `(1,2)` |
| 23 | `(2x²+1)/(x²+1)` | limit 2 at both ends |
| 24 | `x/√(x²+1)` | `+1` at +∞, `−1` at −∞ |
| 25 | `(x²+x)/(x²+1)` | horizontal asymptote 1 crossed at `(1,1)` |
| 26 | `x/(x−1)` | vertical x=1, horizontal y=1, correct one-sided signs |
| 27 | three rational end limits | 3, 0, +∞ |
| 30–32 | `x³−3x` complete sketch | domain ℝ; zeros `0,±√3`; extrema `±1`; inflection 0 |
| 33–34 | `(x+1)/(x−2)` | zeros at −1; y intercept −1/2; `g'<0`; concavity changes across excluded x=2, **not** an inflection |
| 37 | `x³−3cx` | critical points only for `c≥0`, extrema only for `c>0` |
| 38 | intersection `cos x=x` | root approx 0.739085 radians |
| 41 | 40-unit perimeter rectangle | 10×10, maximum area 100 |
| 42–43 | closed 1000 cm³ cylinder | `r=(500/π)^(1/3)≈5.41926 cm`, `h=2r`, global min |
| 44 | 12-cm-square open-top box | `x=2 cm`, maximum volume 128 cm³ |
| 45 | 100-m 3-sided fence | `x=25 m`, `y=50 m`, area 1250 m² |
| 46 | marginal cost at q=50 | 7 currency units per output unit |
| 47 | `(w−3)²` | unique global min at w=3 |
| 50 | Newton formula | denominator `f'(x_n)` must be nonzero |
| 51 | Newton for `x²−2` | `x1=17/12`, `x2=577/408≈1.414215686` |
| 52 | Newton cycle for `x³−2x+2` from 0 | `0→1→0` |
| 53 | Newton optimizer for quadratic loss from 0 | new parameter 3 |
| 55 | power antiderivative | `n≠−1`, valid intervals, +C |
| 56 | derivative 6x−4 with F(1)=5 | `F=3x²−4x+6` |
| 57 | projectile acceleration and initial conditions | `v=20−9.8t`, `s=20t−4.9t²`, t_peak≈2.0408 s, h_peak≈20.408 m |
| 58 | f=x²−1, F(0)=0 | `F=x³/3−x`, extrema `(−1,2/3)`,`(1,−2/3)` |
| 59–60 | L=(w−3)² and w0=0 | GD η=.2: w1=1.2, loss=3.24; Newton: w1=3, loss=0 |

**Negative checks:** never use Fermat's theorem to assert a derivative must vanish at a nondifferentiable interior extremum or an endpoint; `f''=0` is not automatically an inflection; no fake asymptote at a removable/finite hole; no line across `x=2` for `(x+1)/(x−2)`; do not claim MVT when hypotheses fail; a tangent horizontal at `x=0` on `x³` is not a max/min; Newton's update must guard zero derivative and handle cycles; *speed* cannot be negative; differentiated cost is not total cost; all constraints and units must remain visible.

## E. Implementation scope and final audit (internal)

- **Route:** use existing chapter route pattern for Chapter 3 Theory (recommended `/chapter-3`) and enable Theory in the homepage chapter card. Chapter 3 Solved Exercises must remain **Coming soon**.
- **Preservation:** Preview 25, Chapter 1 Theory 50, Chapter 1 Exercises 50, Chapter 2 Theory 60 and Chapter 2 Exercises 108. Preserve current Home, 17-chapter homepage, theme toggles, plot backgrounds, navigation, fullscreen, reveals and six-minute breaks. Do not alter existing Markdown files.
- **Efficient implementation:** inspect the current reusable components once. Add only the necessary slide data and graphics. Reuse the same chart, formula and reveal infrastructure. No new framework, database, auth, backend, state library, complex 3D engine, agents or speculative abstraction.
- **Presentation verification:** exactly 60 slides, unnumbered six-minute break after slide 34, English-only audience copy, mathematical checks above, clear equations and legible graphs, no overflow at 1366×768 or 1920×1080 in both themes, no console errors, working Home, keyboard and fullscreen.
- **Codex terminal audit only:** summarize changed files, slide counts, validated mathematical samples, test/build/browser results, actual P0/P1/P2 issues and verdict in **≤180 words** directly in CLI. **Never write a report Markdown, TXT, JSON or PROGRESS file.** Do not claim checks that did not run.
- **Later exercises:** `ch3/exercises.md` is a separate author-prepared specification; use around 100+ slides and prioritize full step-by-step problem explanations over a fixed slide count. Do not generate that file in Codex.
