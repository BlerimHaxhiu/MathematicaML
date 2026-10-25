---
id: ch2
kind: theory-presentation
course: Mathematics for Machine Learning
presentation_title: "Chapter 2 — Derivatives"
source: "James Stewart, Calculus, Eighth Edition, Chapter 2, printed pages 105–199; sections 2.1–2.9 and review"
source_pdf: "Calculus (James Stewart).pdf"
source_pdf_pages: "137–231 (1-based; printed page = PDF page - 32)"
slide_count: 60
language: en
status: "AUTHORITATIVE CONTENT SPECIFICATION — NOT APPLICATION CODE"
related_exercises_spec: "Markdowns/ch2/exercises.md (to be authored separately; approximately 100 slides, based on problem complexity)"
---

# Chapter 2 — Derivatives

**Authoritative, English-only, slide-by-slide mathematical specification for the browser presentation.** This is not a prose textbook and is not intended to appear as a document in the UI. Implementers must faithfully build the individual student-facing slides defined below, without changing mathematical content, inventing extra slides, or adding non-audience metadata.

## A. Scope and mathematical integrity

- **Source:** Stewart, *Calculus*, 8th ed., Chapter 2, §2.1–§2.9, printed pp. 105–194; chapter review pp. 195–199. Section references identify mathematical subject matter, not text to be copied. All slide text and diagrams below are original pedagogical formulations.
- **Slide total:** **exactly 60 numbered slides** in this chapter theory presentation. A 6-minute break after slide 33 is an unnumbered presenter interruption, not slide 34.
- **Coverage:** definition and interpretation of the derivative; derivative as a function; differentiability; higher derivatives; differentiation rules including product/quotient; trigonometric derivatives; the Chain Rule; implicit differentiation; rates in physics, biology and economics; related rates; linear approximation and differentials; synthesis and introductory ML applications.
- **No crowding:** one main mathematical claim per slide, with worked calculations revealed line-by-line on the SAME slide. Content should remain legible on a 16:9 projector; never make an equation microscopic to satisfy a fixed slide count.
- **Mathematical display:** KaTeX-quality typesetting, not ASCII approximations. Use `\frac`, `\lim`, `\left`, `\right`, `\sqrt`, `\mathrm` and scientific units; distinguish `d/dx` from finite differences, `\Delta y` from `dy`, position from displacement and velocity from speed. Show exact answers before optional decimal approximations.
- **All audience-facing words in English**, including axes, toggle labels, formulas, interactive controls, problem statements, hints and slide endings. No Albanian translation. Internal fields beginning **Visual**, **Reveal**, **Validation**, **Source** and **Implementation** must never appear on-screen.
- **Visual language:** preserve existing white/near-white canvas, restrained navy labels, teal primary curves, blue auxiliary geometry, amber focus markers and crisp SVG math. Axis labels, graph domains, marked open/closed endpoints, physical dimensions and units must be correct. Interactions must compute actual values, not simulate fake equations.
- **Existing project:** preserve Preview (25 slides), Chapter 1 Theory (50) and Chapter 1 Exercises (50). Chapter 2 Theory is a new route in the existing presentation engine. Avoid global style changes, unnecessary dependencies, backend, LMS functions, agents or UI modes.
- **Pedagogical pacing:** 60 slides constitute a chapter-level lecture/study resource, not a claim that all material can be mastered in one 90-minute meeting. Prefer accurate derivations and several lectures over dropping essential prerequisites.
- **Original adaptation:** figures should be created anew, not screenshots of Stewart's pages. Three textbook project themes may be noted as examples (roller-coaster smoothness, aircraft descent, Taylor-polynomial approximation), but do not reproduce their full assignment prompts within this theory deck.

## B. Coverage plan

| Section | Printed pages | Slides | Central idea |
|---|---:|---:|---|
| 2.1 Derivatives and Rates of Change | 106–116 | 01–07 | A local rate is a limit of average rates |
| 2.2 The Derivative as a Function | 117–129 | 08–13 | Every point can have its own slope; differentiability has conditions |
| 2.3 Differentiation Formulas | 130–143 | 14–21 | Efficient, justified algebraic rules |
| 2.4 Derivatives of Trigonometric Functions | 144–151 | 22–26 | Angular change, radians, oscillation |
| 2.5 The Chain Rule | 152–160 | 27–33 | Differentiate compositions from outside to inside |
| 2.6 Implicit Differentiation | 161–168 | 34–39 | Related variables can be differentiated without isolating one |
| 2.7 Rates of Change in Natural and Social Sciences | 169–180 | 40–45 | Context and units determine a derivative's meaning |
| 2.8 Related Rates | 181–187 | 46–51 | Differentiate a constraint with respect to time |
| 2.9 Linear Approximations and Differentials | 188–194 | 52–57 | Locally, the tangent approximates the curve |
| Synthesis + supplemental ML connection | — | 58–60 | Derivatives connect rate, sensitivity and training |

### Interaction budget — reuse existing tools before building any others

- **Essential:** one shared secant-to-tangent/difference-quotient graph (§2.1), a paired `f` and `f'` plot (§2.2), a composition/Chain Rule visual (§2.5), an implicit circle tangent (§2.6), one related-rates geometric animation (§2.8), and a local linearization overlay (§2.9).
- **Optional only if cheaply reusable:** an oscillating particle trace, a marginal-cost plot, and a simple loss-descent marker.
- **Accessibility:** every slider/toggle must have a descriptive English label and a sensible default; diagrams must have a meaningful static state and not rely on animation for mathematical comprehension.

## C. Exact slide storyboard

### Slide 01 — Derivatives: Measuring Change
- **On screen:** `A derivative measures how fast one quantity changes with respect to another.` Display `\text{average change}\ \longrightarrow\ \text{instantaneous change}` and the question `How can we calculate a rate at a single instant?`
- **Visual:** side-by-side position–time curve and a magnified point with tangent; slope rises with steeper local change.
- **Source:** Chapter 2 opening, p. 105.

### Slide 02 — Average Rate of Change
- **On screen:** `Between two inputs, average rate of change is the slope of a secant.`
  $$m_{PQ}=\frac{f(b)-f(a)}{b-a},\qquad a\ne b.$$
- **Worked numbers:** for `f(t)=t^2` and `[1,3]`, `m=(9-1)/(3-1)=4` output units per input unit.
- **Visual:** the secant between `P(1,1)` and `Q(3,9)` on `y=t^2`; independently label horizontal `\Delta t=2` and vertical `\Delta f=8`.
- **Validation:** slope = 4, not slope of the tangent at t=1.

### Slide 03 — The Difference Quotient
- **On screen:** `Let the second point approach the first.`
  $$m(h)=\frac{f(a+h)-f(a)}{h},\qquad h\ne0.$$
- **Visual/interaction:** move `Q` toward fixed `P` via an `h` slider, supporting both positive and negative `h`; show the real-time secant and numerical slope.
- **Important:** `h=0` makes the quotient undefined even when its limit exists.

### Slide 04 — Definition of the Derivative at a Point
- **On screen:** `The derivative is the limiting slope of nearby secants.`
  $$f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}.$$
- **Equivalent form:** `f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}`. Both require the finite two-sided limit to exist.
- **Visual:** secant becomes tangent; no claim that one can substitute `h=0` into the quotient.

### Slide 05 — Worked Derivative from First Principles
- **On screen:** `Find the slope of y=x^2 at x=3.`
- **Reveal steps:**
  $$\begin{aligned}f'(3)&=\lim_{h\to0}\frac{(3+h)^2-9}{h}\\&=\lim_{h\to0}\frac{6h+h^2}{h}\\&=\lim_{h\to0}(6+h)=6.\end{aligned}$$
- **Visual:** parabola with point `(3,9)` and tangent `y-9=6(x-3)`; compare secants for `h=1,0.5,0.1,-0.1`.
- **Check:** at `h=-0.1`, secant slope `5.9`; all slopes approach 6.

### Slide 06 — Velocity: A Physical Derivative
- **On screen:** `Position changes with time. Velocity is its instantaneous rate of change.`
  $$v(t)=\lim_{\Delta t\to0}\frac{s(t+\Delta t)-s(t)}{\Delta t}=s'(t).$$
- **Example:** `s(t)=t^2+2t` (m), `t` (s). `v(t)=2t+2` (m/s), `v(2)=6\ \mathrm{m/s}`.
- **Visual:** synchronized moving particle and slope on `s`-versus-`t`; label `position (m)` and `time (s)`.
- **Caution:** velocity is signed; speed is its magnitude for 1-D motion.

### Slide 07 — Rate of Change in Any Context
- **On screen:** `The same limiting idea works for temperature, populations, electrical charge and costs.`
  $$\frac{dT}{dt}\ [^\circ\mathrm C/\mathrm{min}],\qquad\frac{dQ}{dt}\ [\mathrm A].$$
- **Explanation:** derivatives inherit units **output units per input unit**. A negative derivative means the output is locally decreasing as the input increases.
- **Visual:** four minimal labeled sparklines or curves, not generic icons. **Source:** §2.1.

### Slide 08 — The Derivative Is Also a Function
- **On screen:** `Every differentiable input x has a slope f'(x).`
  $$f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}.$$
- **Visual:** paired aligned plots `f(x)` and `f'(x)` with a shared x-cursor; top tangent slope updates the lower marker height.

### Slide 09 — A Complete Derivative Function from Its Definition
- **On screen:** `Differentiate f(x)=x^2 at a general x.`
  $$\begin{aligned}f'(x)&=\lim_{h\to0}\frac{(x+h)^2-x^2}{h}\\&=\lim_{h\to0}(2x+h)=2x.\end{aligned}$$
- **Visual:** `y=x^2` above and `y=2x` below; shared x-cursor at `x=0,1,2` giving slopes `0,2,4`.

### Slide 10 — Reading f′ from the Shape of f
- **On screen:** `Positive slope ⇒ f'(x)>0. Negative slope ⇒ f'(x)<0. Horizontal tangent ⇒ f'(x)=0.`
- **Example:** `f(x)=x^3-3x` and `f'(x)=3x^2-3`, with horizontal tangents at `x=-1` and `x=1`.
- **Visual:** aligned original plots and sign-shaded intervals; graph must respect `f'<0` between `-1` and `1` and `f'>0` outside.

### Slide 11 — When a Derivative Does Not Exist
- **On screen:** `A corner, cusp, vertical tangent, or discontinuity may prevent a finite derivative.`
- **Worked counterexample:** `f(x)=|x|` at `x=0`:
  $$\lim_{h\to0^-}\frac{|h|}{h}=-1,\qquad\lim_{h\to0^+}\frac{|h|}{h}=1.$$
- **Conclusion:** `f'(0)` does not exist because the one-sided slopes differ.
- **Visual:** an exact V-shaped plot with different left/right tangent directions; do not draw one smooth tangent at the corner.

### Slide 12 — Differentiability Implies Continuity
- **On screen:** `If f is differentiable at a, it is continuous at a.`
- **Reasoning:** `f(a+h)-f(a)=h\,\frac{f(a+h)-f(a)}{h}`; if the quotient tends to a finite value, the difference tends to zero, so `f(a+h)\to f(a)`.
- **Warning:** the converse is false; `|x|` is continuous at 0 but not differentiable there.
- **Visual:** smooth curve versus continuous corner, labeled correctly.

### Slide 13 — Second and Higher Derivatives
- **On screen:** `The derivative can itself be differentiated.`
  $$f''(x)=\frac{d}{dx}f'(x),\qquad s'(t)=v(t),\qquad s''(t)=a(t).$$
- **Example:** `s(t)=2t^3-3t^2` (m) gives `v(t)=6t^2-6t` (m/s) and `a(t)=12t-6` (m/s²).
- **Visual:** aligned position, velocity, acceleration plots, with axes and units; the last plot is linear.

### Slide 14 — Why Differentiation Rules Matter
- **On screen:** `The limit defines the derivative. Differentiation rules compute it efficiently.`
- **Example overview:** `d(c)/dx=0`, `d(x^n)/dx=nx^{n-1}` (where defined), linearity and products/quotients.
- **Visual:** left: difference quotient for `x^3`; right: a single power-rule step. State that rules follow from limit properties.

### Slide 15 — Constant, Identity and Power Rules
- **On screen:**
  $$\frac{d}{dx}(c)=0,\qquad\frac{d}{dx}(x)=1,\qquad\frac{d}{dx}(x^n)=nx^{n-1}.$$
- **Worked examples:** `d(5x^4)/dx=20x^3`; `d(x^{-2})/dx=-2x^{-3}` for `x\ne0`; `d(\sqrt{x})/dx=1/(2\sqrt{x})` for `x>0`.
- **Caution:** at domain boundaries, derivative existence must be checked; this slide does not assert a two-sided derivative for `\sqrt{x}` at zero.

### Slide 16 — Sum and Constant-Multiple Rules
- **On screen:**
  $$\frac{d}{dx}[af(x)+bg(x)]=af'(x)+bg'(x).$$
- **Example:** `p(x)=4x^3-3x^2+7x-10` yields `p'(x)=12x^2-6x+7`.
- **Visual:** annotate which term contributes which derivative; show constants disappearing rather than retaining extraneous terms.

### Slide 17 — From Polynomial to Tangent Line
- **On screen:** `Find the tangent line to f(x)=x^3-2x at x=2.`
- **Reveal:** `f(2)=4`; `f'(x)=3x^2-2`; `f'(2)=10`; hence
  $$y-4=10(x-2).$$
- **Visual:** accurate cubic `y=x^3-2x`, marked `(2,4)`, tangent slope 10; avoid an inappropriately flattened graph scale.

### Slide 18 — The Product Rule
- **On screen:**
  $$\frac{d}{dx}[f(x)g(x)]=f'(x)g(x)+f(x)g'(x).$$
- **Example:** `y=(x^2+1)(x^3-2x)` gives
  $$y'=2x(x^3-2x)+(x^2+1)(3x^2-2)=5x^4-3x^2-2.$$
- **Visual:** two factors colored independently; match the four elements in the formula. **Common error:** `(fg)'\ne f'g'` in general.

### Slide 19 — The Quotient Rule
- **On screen:**
  $$\left(\frac{f}{g}\right)'=\frac{g f'-f g'}{g^2},\qquad g(x)\ne0.$$
- **Example:** for `y=(x^2+1)/(x-1)`,
  $$y'=\frac{(x-1)(2x)-(x^2+1)}{(x-1)^2}=\frac{x^2-2x-1}{(x-1)^2},\quad x\ne1.$$
- **Visual:** rational graph with vertical asymptote at `x=1`; never join its two branches.

### Slide 20 — Choosing the Efficient Rule
- **On screen:** `Simplify first when it saves work; otherwise use Product or Quotient Rule.`
- **Comparison:** `y=x^2(x+1)=x^3+x^2`, hence `y'=3x^2+2x`. Via Product Rule: `2x(x+1)+x^2(1)=3x^2+2x`.
- **Visual:** side-by-side algebraic paths ending in the same answer. Highlight that simplification must preserve the original function's domain.

### Slide 21 — Units and Numerical Sensitivity
- **On screen:** `f'(a) describes the local response to a small input change.`
  $$\Delta y\approx f'(a)\,\Delta x\qquad\text{for sufficiently small }\Delta x.$$
- **Example:** `f(x)=x^2`, at `a=3` with `\Delta x=0.01`, predicted change `6(0.01)=0.06`; exact change `3.01^2-9=0.0601`.
- **Interpretation:** derivative is a local sensitivity, a bridge to later ML discussions. **Do not claim the approximation is exact.**

### Slide 22 — Why Trigonometric Derivatives Matter
- **On screen:** `Periodic motion is described by sine and cosine; derivatives measure its changing motion.`
- **Visual:** a point moving around the unit circle aligned with `y=\sin x` and `y=\cos x` plots; horizontal axis in **radians**, not degrees.
- **Key condition:** standard trigonometric derivative identities require angle input measured in radians.

### Slide 23 — Derivatives of Sine and Cosine
- **On screen:**
  $$\frac{d}{dx}\sin x=\cos x,\qquad\frac{d}{dx}\cos x=-\sin x.$$
- **Proof idea:** expand `\sin(x+h)` and apply `\lim_{h\to0}\sin h/h=1` and `\lim_{h\to0}(\cos h-1)/h=0`; assumptions use radians.
- **Visual:** curve/slope relationship and phase shift; mark `\sin'(0)=1`, `\cos'(0)=0`.

### Slide 24 — Other Trigonometric Derivatives
- **On screen:**
  $$\begin{aligned}\frac{d}{dx}\tan x&=\sec^2x,&\frac{d}{dx}\cot x&=-\csc^2x,\\\frac{d}{dx}\sec x&=\sec x\tan x,&\frac{d}{dx}\csc x&=-\csc x\cot x.\end{aligned}$$
- **Reveal:** obtain `(\tan x)'` by Quotient Rule on `\sin x/\cos x`, giving `1/\cos^2x`.
- **Domain warning:** do not plot across a pole or claim derivatives where the original trigonometric function is undefined.

### Slide 25 — Product Rule with Trigonometric Functions
- **On screen:** `Differentiate f(x)=x^2\sin x.`
  $$f'(x)=2x\sin x+x^2\cos x.$$
- **Extension:** `f''(x)=2\sin x+4x\cos x-x^2\sin x`.
- **Visual:** align `f` and `f'` and emphasize oscillatory modulation by the factor `x^2`.

### Slide 26 — Harmonic Motion: Velocity and Acceleration
- **On screen:** `For a one-dimensional oscillator with position s(t)=A\cos(\omega t):`
  $$v(t)=-A\omega\sin(\omega t),\qquad a(t)=-A\omega^2\cos(\omega t)=-\omega^2s(t).$$
- **Visual:** spring–mass position with synchronized `s`, `v`, `a` plots, label `A` (m), `t` (s), `\omega` (rad/s). Explanatory relationship: acceleration points toward equilibrium for nonzero displacement.
- **Clarification:** derivatives require the Chain Rule; preview it without treating `\omega` as a variable.

### Slide 27 — Composed Functions
- **On screen:** `One function can operate on the output of another.`
  $$y=F(u),\qquad u=g(x),\qquad y=F(g(x)).$$
- **Example:** `y=(3x^2+1)^5`; inner `u=3x^2+1`, outer `F(u)=u^5`.
- **Visual:** input `x` → inner transformation `u` → outer power `y`, with actual values updated for one or two chosen x values.

### Slide 28 — The Chain Rule
- **On screen:**
  $$\frac{dy}{dx}=\frac{dy}{du}\frac{du}{dx},\qquad [F(g(x))]'=F'(g(x))g'(x).$$
- **Explanation:** differentiate the **outer** function while keeping the inner expression, then multiply by the derivative of the **inner** function.
- **Visual:** colored factor pairing, outer vs inner arrows. **Note:** `dy/du\cdot du/dx` represents a theorem, not permission to cancel arbitrary differentials without conditions.

### Slide 29 — Worked Chain Rule: A Power of a Polynomial
- **On screen:** `Differentiate y=(3x^2+1)^5.`
- **Reveal:** `u=3x^2+1`, `du/dx=6x`, `dy/du=5u^4`, so
  $$\frac{dy}{dx}=5(3x^2+1)^4(6x)=30x(3x^2+1)^4.$$
- **Visual:** temporary color underline of the inner derivative `6x`; never omit it.

### Slide 30 — Chain Rule with Square Roots
- **On screen:** `Differentiate y=\sqrt{1+x^2}=(1+x^2)^{1/2}.`
  $$y'=\frac12(1+x^2)^{-1/2}(2x)=\frac{x}{\sqrt{1+x^2}}.$$
- **Visual:** top graph of function and lower graph of derivative; show derivative tends toward ±1 as x becomes large in magnitude.

### Slide 31 — Trigonometry and the Chain Rule
- **On screen:**
  $$\frac{d}{dx}\sin(g(x))=\cos(g(x))g'(x).$$
- **Example:** `y=\sin(x^2)`, so `y'=2x\cos(x^2)`.
- **Second example:** `y=\cos(3x)`, so `y'=-3\sin(3x)`.
- **Visual:** plot `\sin(x^2)` over a limited interval; show increased oscillation density away from 0. Label radians.

### Slide 32 — Nested Compositions: Work Outward to Inward
- **On screen:** `Differentiate y=[1+\sin(x^2)]^3.`
  $$\begin{aligned}y'&=3[1+\sin(x^2)]^2\cdot\cos(x^2)\cdot2x\\&=6x[1+\sin(x^2)]^2\cos(x^2).\end{aligned}$$
- **Visual:** three nested boxes labeled `x²`, `sin`, `cube`; each newly revealed factor corresponds to a box.
- **Pitfall:** no dropped inner factor.

### Slide 33 — Chain Rule as Local Sensitivity
- **On screen:** `Small upstream changes propagate through composed relationships.`
  $$\frac{dy}{dx}=\underbrace{\frac{dy}{du}}_{\text{output sensitivity}}\underbrace{\frac{du}{dx}}_{\text{input sensitivity}}.$$
- **Mini-case:** `u=2x`, `y=u^2`, so `dy/dx=2u\cdot2=8x`; at `x=1`, slope `8`.
- **Connection:** the same multiplication of sensitivities reappears in the mathematics underlying Machine Learning; do not yet introduce full backpropagation.
- **Break:** **6-minute break after this slide; NOT a numbered slide**.

### Slide 34 — Curves Without an Explicit y=f(x)
- **On screen:** `An equation can relate x and y without isolating y.` Example:
  $$x^2+y^2=25.$$
- **Interpretation:** this circle is **not globally** a single-valued function `y=f(x)`; locally, its upper and lower branches can be treated as functions where appropriate.
- **Visual:** circle radius 5, both upper/lower branches, and a selected point `(3,4)` on the upper arc.

### Slide 35 — Differentiating an Implicit Relation
- **On screen:** `Differentiate both sides with respect to x, treating y as a function of x.`
  $$\frac{d}{dx}(x^2+y^2)=\frac{d}{dx}(25)$$
  $$2x+2y\frac{dy}{dx}=0.$$
- **Key:** `d(y^2)/dx=2y\,dy/dx`; forgetting `dy/dx` is an incorrect application of the Chain Rule.
- **Visual:** show the changing y-coordinate as x moves around the upper arc.

### Slide 36 — Implicit Derivative and Tangent to a Circle
- **On screen:** `Solve for the local slope:`
  $$\frac{dy}{dx}=-\frac{x}{y}\quad(y\ne0).$$
- **Worked point:** at `(3,4)`, slope is `-3/4`, so the tangent is
  $$y-4=-\frac34(x-3).$$
- **Visual/interaction:** movable point on the circle with tangent and radius; visually establish perpendicularity. At `(±5,0)`, the derivative `dy/dx` is not finite: show a vertical tangent rather than dividing by zero.

### Slide 37 — A More Complex Implicit Curve
- **On screen:** `Differentiate x³+y³=6xy.`
  $$3x^2+3y^2y'=6y+6xy'$$
  $$y'=\frac{2y-x^2}{y^2-2x}\quad\text{when }y^2-2x\ne0.$$
- **Worked point:** `(3,3)` is on the curve; `y'(3,3)=(6-9)/(9-6)=-1`.
- **Visual:** original curve branch with a tangent of slope `-1` at `(3,3)`; avoid showing the entire implicit set as the graph of a single `y=f(x)`.

### Slide 38 — Implicit Differentiation: Second Derivatives
- **On screen:** `Differentiate the relation again rather than trying to isolate y.`
- **Worked example:** for `x²+y²=25`, first derivative `2x+2yy'=0`; differentiate again:
  $$2+2(y')^2+2yy''=0,$$
  $$y''=-\frac{1+(y')^2}{y}=-\frac{25}{y^3},\qquad y\ne0.$$
- **Check:** at `(3,4)`, `y''=-25/64`.
- **Visual:** local concavity on upper circle; note second derivative exists on smooth local branches away from vertical tangencies.

### Slide 39 — Implicit Functions in Physics and Geometry
- **On screen:** `Constraints connect quantities even when one cannot easily be expressed as an explicit function of the other.`
  $$x^2+y^2=R^2\quad\Longrightarrow\quad y'=-\frac{x}{y}.$$
- **Interpretation:** the slope is dictated by a geometric constraint; this approach generalizes to physically linked quantities.
- **Visual:** circle with radial constraint and annotated tangent; include one short question: `What happens to the tangent as y→0?` Answer revealed: it becomes vertical (where a finite `dy/dx` fails).

### Slide 40 — Interpreting a Derivative Requires Units
- **On screen:** `A number becomes meaningful only when we know what changed and with respect to what.`
  $$\frac{ds}{dt}\ [\mathrm{m/s}],\quad\frac{d^2s}{dt^2}\ [\mathrm{m/s^2}],\quad\frac{dQ}{dt}\ [\mathrm{C/s}].$$
- **Visual:** matching mathematical rate to a physical measurement (position, acceleration, electric charge); current `I=dQ/dt` uses C/s = A.
- **Validation:** never call `ds/dt` speed unless taking its magnitude in 1-D or using nonnegative distance traveled.

### Slide 41 — Motion: Velocity, Speed and Acceleration
- **On screen:** `Given position s(t), velocity is s'(t), acceleration is s''(t), and speed in one dimension is |s'(t)|.`
- **Worked example:** for `s(t)=t²−4t` (m),
  $$v(t)=2t-4\ \mathrm{m/s},\qquad a(t)=2\ \mathrm{m/s^2}.$$
  At `t=1\ \mathrm{s}`, `v=-2\ \mathrm{m/s}`, speed `=2\ \mathrm{m/s}`; the particle moves in the negative direction.
- **Visual:** 1-D position marker with direction arrow, and aligned `v(t)` graph crossing zero at `t=2`.

### Slide 42 — Temperature and Reaction Rates
- **On screen:** `A temperature curve's slope tells whether warming is accelerating or slowing.`
- **Worked model:** `T(t)=20+3t-0.1t²` in °C for t in minutes. Then
  $$\frac{dT}{dt}=3-0.2t\quad[{}^\circ\mathrm C/\mathrm{min}],\qquad\frac{dT}{dt}\bigg|_{t=5}=2\ ^\circ\mathrm C/\mathrm{min}.$$
- **Visual:** temperature curve and tangent at 5 min. Do not imply this polynomial model remains physically valid for all time.

### Slide 43 — Population Change
- **On screen:** `The derivative of population with respect to time measures net growth or decline.`
- **Illustrative model:** `P(t)=1000+80t-2t²` individuals, `t` in years, for a limited interval. Then
  $$P'(t)=80-4t\quad[\text{individuals/year}],\qquad P'(10)=40\quad\text{individuals/year}.$$
- **Interpretation:** positive rate means the population is increasing at t=10; it does **not** mean the population is 40.
- **Visual:** graph of `P(t)` and corresponding tangent slope.

### Slide 44 — Marginal Cost and Economics
- **On screen:** `Marginal cost is the derivative of total cost with respect to output quantity.`
- **Illustrative model:** `C(q)=100+5q+0.02q²` dollars for q units. Then
  $$C'(q)=5+0.04q\quad[\$/\text{unit}],\qquad C'(50)=7\quad[\$/\text{unit}].$$
- **Explanation:** producing one additional unit near q=50 costs **approximately** $7, not necessarily exactly $7 for a discrete jump.
- **Visual:** tangent to cost curve at 50 and a shaded local change in cost.

### Slide 45 — Local Sensitivity Across Disciplines
- **On screen:** `A derivative is a local sensitivity measurement.`
  $$\Delta y\approx f'(x)\Delta x.$$
- **Connections:** temperature response to time; cost response to quantity; prediction response to a parameter. **Interpret units separately** in each case.
- **Visual:** three plots with a short tangent segment, emphasizing identical mathematics and distinct interpretations.

### Slide 46 — Related Rates: One Variable Changes Another
- **On screen:** `When two quantities are linked by a constraint, their rates are linked too.`
- **Method shown on slide:** `1. Sketch and label. 2. Write the constraint. 3. Differentiate with respect to time. 4. Substitute the instant's measurements. 5. State units and sign.`
- **Visual:** a right triangle with legs `x(t)` and `y(t)`, hypotenuse `L`; only meaningful geometry.

### Slide 47 — A Sliding Ladder: The Constraint
- **On screen:** `A rigid 5-ft ladder leans against a vertical wall.` Horizontal foot distance `x(t)` and vertical top height `y(t)` satisfy
  $$x(t)^2+y(t)^2=25\ \mathrm{ft^2}.$$
- **Problem:** `When x=3 ft and the foot moves away at dx/dt=2 ft/s, how fast does the top descend?`
- **Visual/interaction:** correct 5-ft ladder, perpendicular ground/wall, marked `(x,y)=(3,4)`; animated position consistent with constant ladder length.

### Slide 48 — A Sliding Ladder: Solve the Rate
- **On screen:** `Differentiate x²+y²=25 with respect to t:`
  $$2x\frac{dx}{dt}+2y\frac{dy}{dt}=0,$$
  $$\frac{dy}{dt}=-\frac{x}{y}\frac{dx}{dt}=-\frac34(2)=-1.5\ \mathrm{ft/s}.$$
- **Interpretation:** the top moves **down** at 1.5 ft/s. Negative sign refers to the decreasing height.
- **Visual:** downward velocity arrow on the wall; prevent the animation from suggesting a different velocity.

### Slide 49 — An Inflating Sphere: Volume Rate
- **On screen:** `An inflating spherical balloon obeys V=(4/3)πr³.`
  $$\frac{dV}{dt}=4\pi r^2\frac{dr}{dt}.$$
- **Problem and answer:** when `r=2 cm` and `dV/dt=8π cm³/s`,
  $$\frac{dr}{dt}=\frac{8\pi}{4\pi(2)^2}=0.5\ \mathrm{cm/s}.$$
- **Visual:** original SVG circle/sphere schematic with r and a slowly increasing radius; show volume rate and radius rate with distinct units.

### Slide 50 — Expanding Circular Area
- **On screen:** `Area A=πr² changes as the radius changes.`
  $$\frac{dA}{dt}=2\pi r\frac{dr}{dt}.$$
- **Worked check:** for `r=10 m`, `dr/dt=0.2 m/s`,
  $$\frac{dA}{dt}=4\pi\ \mathrm{m^2/s}.$$
- **Visual:** two concentric circles, thin growing annulus, radius velocity arrow. **Correct interpretation:** area changes quadratically with radius but its instantaneous rate is the expression above.

### Slide 51 — Related-Rates Errors to Avoid
- **On screen:** `Do not substitute a snapshot before differentiating a time-dependent relation.`
- **Worked contrast:** Starting from `x²+y²=25`, differentiation gives `2x x'+2y y'=0`. Replacing x by 3 and y by 4 *before* differentiation turns the relation into `9+16=25`, which loses the rates entirely.
- **Visual:** a two-column correct/incorrect comparison with the numerical substitution shown only after differentiation.
- **Question:** `Why does the sign of dy/dt matter?` Reveal: it identifies the direction of motion.

### Slide 52 — From a Curve to Its Tangent Approximation
- **On screen:** `Near x=a, a differentiable function is approximately linear.`
  $$f(x)\approx f(a)+f'(a)(x-a).$$
- **Visual/interaction:** `y=f(x)` and tangent `L(x)` with movable x and adjustable local zoom; show divergence farther from a. Use `f(x)=\sqrt{x}` near a=4 or a smooth polynomial.
- **Important:** local approximation, not an assertion of equality for every x.

### Slide 53 — Linearization: A Named Function
- **On screen:** `The linearization of f at a is the tangent line function.`
  $$L(x)=f(a)+f'(a)(x-a).$$
- **Worked setup:** `f(x)=\sqrt{x}`, `a=4`; then `f(4)=2`, `f'(4)=1/4` and
  $$L(x)=2+\frac{x-4}{4}.$$
- **Visual:** overlay square-root curve and `L(x)` with both touching at `(4,2)`, matching slopes there.

### Slide 54 — Estimate a Square Root Without a Calculator
- **On screen:** `Estimate \sqrt{4.1} using the tangent at x=4.`
  $$\sqrt{4.1}\approx L(4.1)=2+\frac{0.1}{4}=2.025.$$
- **Check:** the actual value is approximately `2.0248457`, so the approximation is higher by about `0.0001543`.
- **Visual:** zoomed interval near x=4.0 and x=4.1; the tiny vertical error must be shown with a visibly declared exaggerated y-scale or magnification, never misleadingly without scale information.

### Slide 55 — Differentials vs Actual Finite Changes
- **On screen:** `The differential predicts a small change from the tangent.`
  $$dy=f'(x)\,dx,\qquad\Delta y=f(x+\Delta x)-f(x).$$
- **Example:** for `f(x)=x²`, at `x=3` and `dx=\Delta x=0.1`, `dy=2(3)(0.1)=0.6`; actual `\Delta y=(3.1)^2-9=0.61`.
- **Visual:** distinguish true curved rise `\Delta y` from tangent rise `dy` on the same zoomed graphic, with labels and arrows.
- **Caution:** `dy` is not generally equal to `\Delta y`.

### Slide 56 — Using Differentials to Estimate Measurement Error
- **On screen:** `For a sphere V=(4/3)πr³, relative measurement errors approximately scale by three.`
  $$dV=4\pi r^2\,dr,\qquad\frac{dV}{V}=3\frac{dr}{r}\quad(r>0).$$
- **Worked estimate:** for `r=10 cm` and small maximum radius error `|dr|\le0.1 cm`, estimated maximum relative volume error `\lesssim3(0.1/10)=0.03=3%`.
- **Visual:** sphere outline with uncertainty band; distinguish first-order error estimate from an exact bound.

### Slide 57 — Tangent Approximations in Scientific Computing
- **On screen:** `Differentials convert a nonlinear function into a locally tractable estimate.`
- **Example:** `\sin\theta\approx\theta` when `\theta` is **near zero and in radians**, because `\sin0=0` and `(\sin\theta)'|_{\theta=0}=1`.
- **Second relationship:** `\cos\theta\approx1` near zero to first order because its derivative at 0 is 0.
- **Visual:** compare sine curve with tangent `y=\theta` and cosine curve with tangent `y=1`, using an appropriately narrow interval around 0. Avoid claiming exact equalities.

### Slide 58 — Derivatives: A Conceptual Map
- **On screen:** `One definition connects many applications.`
  $$\boxed{f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}}$$
- **Visible associations:** `Tangent slope → velocity → acceleration → sensitivity → related rates → linear approximation`.
- **Visual:** an original central equation surrounded by six carefully labeled examples; no extra developer/teaching metadata.
- **Review question:** `When does the derivative fail to exist?` Reveal: at points where the necessary finite two-sided difference-quotient limit fails (for example, at `|x|`'s corner).

### Slide 59 — Machine Learning: Differentiating Model Error
- **On screen:** `An ML model adjusts parameters to reduce a loss function.`
  $$L(w)=(w-3)^2,\qquad\frac{dL}{dw}=2(w-3).$$
- **Worked values:** `L(0)=9`, `L'(0)=-6`, `L(3)=0`, `L'(3)=0`.
- **Visual:** exact parabola in `(w,L)` coordinates with marked `w=0` and minimum `w=3`; display tangent slope at a movable w. Emphasize that the derivative is with respect to the **parameter** w, not time.
- **Note:** this simple quadratic loss is an additional pedagogical ML application, **not** a result claimed from Stewart §2.9.

### Slide 60 — Gradient Descent: Follow the Negative Slope
- **On screen:** `A derivative indicates a local direction of change. A learning step moves in the opposite direction of the loss slope.`
  $$w_{k+1}=w_k-\eta\,L'(w_k).$$
- **Worked step:** for `L(w)=(w-3)^2`, `w_0=0`, `\eta=0.2`:
  $$L'(0)=-6,\qquad w_1=0-0.2(-6)=1.2,$$
  $$L(w_0)=9,\qquad L(w_1)=(1.2-3)^2=3.24.$$
- **Visual/optional existing interaction:** a marker moves on the exact loss curve from `(0,9)` to `(1.2,3.24)`. Optional next step: `L'(1.2)=-3.6`, `w_2=1.92`, `L(w_2)=1.1664`.
- **Limit of interpretation:** a single successful step does not prove that every step size or every nonconvex objective will improve; call this the one-variable version of gradient descent. Conclude: `Calculus turns change into something we can measure, predict, and optimize.`

---

## D. Mathematical verification cases (internal; no on-screen test report)

Check at least the following exact relations against implementation behavior:

| Slides | Assertion | Expected result |
|---|---|---|
| 02 | `(9-1)/(3-1)` | `4` |
| 05 | `((3+h)^2-9)/h`, h≠0 | `6+h`, limit `6` |
| 06 | `s(t)=t²+2t` | `v(2)=6 m/s` |
| 09 | derivative of `x²` | `2x` |
| 10 | `(x³-3x)'` | `3x²-3`; zeros `±1` |
| 11 | derivative of `|x|` at zero | DNE (one-sided slopes `-1` and `+1`) |
| 13 | `s(t)=2t³-3t²` | `v=6t²-6t`, `a=12t-6` |
| 17 | `f=x³-2x`, a=2 | `f(2)=4`, `f'(2)=10` |
| 18 | `(x²+1)(x³-2x)` | derivative `5x⁴-3x²-2` |
| 19 | `(x²+1)/(x-1)` | derivative `(x²-2x-1)/(x-1)²` |
| 21 | `(3.01)²-9` | `0.0601` |
| 25 | `x² sin x` | `f'=2x sin x+x² cos x` |
| 26 | `s=A cos(ωt)` | `a=-ω²s` |
| 29 | `(3x²+1)^5` | `30x(3x²+1)^4` |
| 30 | `√(1+x²)` | `x/√(1+x²)` |
| 32 | `[1+sin(x²)]³` | `6x[1+sin(x²)]²cos(x²)` |
| 33 | `u=2x`, `y=u²` | `dy/dx=8x` |
| 36 | circle tangent at `(3,4)` | `y'=-3/4` |
| 37 | `x³+y³=6xy` at `(3,3)` | `y'=-1` |
| 38 | circle second derivative | `y''=-25/y³`; `(3,4)` is `-25/64` |
| 41 | `s=t²-4t` at t=1 | velocity `-2 m/s`, speed `2 m/s` |
| 42 | `T=20+3t-0.1t²` at t=5 | `2 °C/min` |
| 43 | `P=1000+80t-2t²` at t=10 | `40 individuals/year` |
| 44 | `C=100+5q+0.02q²` at q=50 | `7 $/unit` |
| 48 | x=3, y=4, dx/dt=2 | `dy/dt=-1.5 ft/s` |
| 49 | r=2, dV/dt=8π | `dr/dt=0.5 cm/s` |
| 50 | r=10, dr/dt=0.2 | `dA/dt=4π m²/s` |
| 54 | tangent approximation to √4.1 | `2.025`; actual `≈2.0248457` |
| 55 | x=3, dx=0.1 for x² | `dy=0.6`, `Δy=0.61` |
| 56 | sphere relative error, dr/r=0.01 | first-order estimate `≈3%` |
| 59–60 | `L(w)=(w-3)²`, w0=0, η=0.2 | `w1=1.2`, loss `9→3.24` |

**Negative tests:** never remove domain restrictions; never draw a continuous graph across `x=1` for the quotient-rule example; `f'(0)` for `|x|` must be undefined; vertical circle tangents do not have a finite `dy/dx`; `dy≠Δy` in general; display correct physical units; the tan/sec curves must exclude their poles; gradient descent should respond to the chosen learning rate rather than a hard-coded animation.

## E. Codex implementation boundary (internal)

- **Project route:** add Chapter 2 `Theory` to the existing landing page; follow the same routing pattern as Chapter 1. Leave the separate Chapter 2 Exercises link unavailable until `ch2/exercises.md` is implemented. No placeholder empty lesson.
- **Authoritative content:** implement only what this document specifies. Content editing or generation belongs to the author of this Markdown, not Codex. Resolve technical ambiguity using existing components. Report an actual mathematical contradiction rather than silently changing an equation.
- **Skills:** if an installed frontend/browser-testing skill is relevant, use it; otherwise work directly. No skills installation, no subagents by default.
- **Scope guard:** minimize source changes; prefer existing KaTeX, SVG, styles, slide shell, interactive components. Do not change Preview or Chapter 1 presentations. Do not add databases, new third-party plotting frameworks, a lesson management UI or developer metadata.
- **Testing:** check exactly 60 slides, valid navigation/fullscreen, each essential interaction, English-only user-facing content, mathematical assertions, and no overflow at 1366×768 and 1920×1080. Run available tests/typecheck/build. Do not claim browser verification if no browser was used.
- **Audit:** final Codex CLI response only, **≤180 words**, with scope, changed files, mathematical checks, test/build/browser results, remaining P0/P1/P2, verdict. **Do not create audit files**.
- **Exercise deck policy:** in a separate future document, target approximately **100 slides** for carefully chosen Stewart problems, but use more or fewer when required to explain strategy, calculations, domain checks, diagrams and final interpretation without cramming. Problem count and steps determine the slide count, not an arbitrary target. Do not implement this deck during the theory task.
