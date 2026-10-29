---
id: ch2
kind: solved-exercises-presentation
course: Mathematics for Machine Learning
presentation_title: "Chapter 2 — Derivatives: Solved Exercises"
source: "James Stewart, Calculus, Eighth Edition, Chapter 2, §§2.1–2.9"
source_pdf: "Calculus (James Stewart).pdf"
problem_count: 27
slide_count: 108
slides_per_problem: 4
language: en
status: "AUTHORITATIVE EDUCATIONAL CONTENT — CODEX MUST IMPLEMENT, NOT REAUTHOR"
---

# Chapter 2 — Derivatives: Solved Exercises

## 1. Mandate

This is an original, fully worked, English-language **slide specification** for 27 selected exercises spanning Stewart §§2.1–2.9. Source numbers and print/PDF page anchors were checked against the uploaded Eighth Edition. Problem statements are instructional restatements. The mathematics and diagrams are authored for this presentation; **do not paste textbook screenshots**.

- **Exactly 108 numbered slides, four per exercise**, presented sequentially: Problem → Strategy → Detailed Solution → Independent Verification / Interpretation.
- **Full and accurate reasoning** matters more than brevity. On long equations, use sequential reveals within the same slide or mathematically faithful split panels, not microscopic typesetting. Do not skip algebra, signs, domain constraints, chain-rule factors, units or intermediate values.
- Each problem must stand alone for students who are using the deck to learn, not merely assess prior knowledge.
- All visible language, controls, captions and axes in **English only**. Use KaTeX/LaTeX syntax for every important expression.
- All diagram labels must match the stated geometry, and curve sampling must use real formulas rather than arbitrary animated paths.
- Preserve the application's global Light/Dark theme. **Graph/plot surfaces always remain light**, with dark legible axis/point labels in either theme.
- Reuse existing React slide engine, layouts, math renderer and SVG plot components. No new study mode, LMS, third-party charting package, backend, auth, or extra content documents.
- Preserve Intro Preview 25, Chapter 1 Theory 50, Chapter 1 Exercises 50, Chapter 2 Theory 60, homepage and every existing route. Add only the Chapter 2 Exercises route and corresponding homepage submenu option.
- Keep required metadata (exercise number, textbook page, internal validation) in source, **not in the visible slide**. The student should see the problem itself, not development instructions.
- A **6-minute unnumbered break after Slide 056**; the exercise slideshow resumes at Slide 057. It is not a numbered slide.
- Do not allow the entire problem+solution to be immediately visible on its opening slide. Maintain a purposeful progression from inquiry to reasoning to result.
- Mathematical text must remain readable at 1366×768 and 1920×1080 with no scroll/clipping; equations may use multiple aligned display lines but not decreased to unreadable sizes.
- Use graphical/interactive treatment when it illuminates the mathematical reasoning (secants, tangents, movement, implicit curves, related-rates geometry, differentials); **do not build 27 elaborate new animations**. Static honest math graphics are preferable to fake motion.

## 2. Textbook coverage and slide allocation

| # | Section | Stewart exercise | Printed page | Slides | Problem |
|---:|:--:|:--:|---:|:--:|---|
| 01 | 2.1 | 14 | 114 | 001–004 | A Rock on Mars — Velocity and Impact |
| 02 | 2.1 | 16 | 114 | 005–008 | Average Velocity Versus Instantaneous Velocity |
| 03 | 2.1 | 28 | 114 | 009–012 | First-Principles Tangent to a Quartic |
| 04 | 2.2 | 17 | 127 | 013–016 | Discover the Derivative Graphically |
| 05 | 2.2 | 29 | 127 | 017–020 | Differentiate x⁴ from the Definition |
| 06 | 2.2 | 32 | 127 | 021–024 | Differentiate a Function with a Hole in Its Domain |
| 07 | 2.3 | 5 | 140 | 025–028 | Product Rule: Two Polynomial Factors |
| 08 | 2.3 | 23 | 140 | 029–032 | Product Rule or Expand First? |
| 09 | 2.3 | 33 | 140 | 033–036 | Quotient Rule with Restricted Domain |
| 10 | 2.4 | 1 | 150 | 037–040 | Product Rule with a Trigonometric Factor |
| 11 | 2.4 | 2 | 150 | 041–044 | Trigonometric Sum with a Product |
| 12 | 2.5 | 2 | 158 | 045–048 | Chain Rule: Fourth Power of a Polynomial |
| 13 | 2.5 | 10 | 158 | 049–052 | Chain Rule: A Fractional Power |
| 14 | 2.5 | 18 | 158 | 053–056 | Product Rule and Chain Rule Together |
| 15 | 2.5 | 69 | 159 | 057–060 | Nested Chain Rule from Given Derivative Data |
| 16 | 2.6 | 1 | 166 | 061–064 | Implicit Differentiation and Two Explicit Branches |
| 17 | 2.6 | 5 | 166 | 065–068 | Collecting y-Prime Terms Correctly |
| 18 | 2.6 | 27 | 167 | 069–072 | Tangent to an Implicit Hyperbola |
| 19 | 2.7 | 17 | 179 | 073–076 | Linear Mass Density of a Metal Rod |
| 20 | 2.7 | 19 | 179 | 077–080 | Electric Current as the Rate of Charge Flow |
| 21 | 2.7 | 20 | 179 | 081–084 | Gravity and Sensitivity to Distance |
| 22 | 2.8 | 15 | 186 | 085–088 | Streetlight, Walking Person, Moving Shadow |
| 23 | 2.8 | 17 | 186 | 089–092 | Two Cars Moving at Right Angles |
| 24 | 2.8 | 29 | 186 | 093–096 | Growing Conical Pile of Gravel |
| 25 | 2.9 | 19 | 193 | 097–100 | Actual Change Versus Differential |
| 26 | 2.9 | 23 | 193 | 101–104 | Linear Approximation of 1.999⁴ |
| 27 | 2.9 | 32 | 193 | 105–108 | Measurement Error in the Area of a Disk |

## 3. Solution quality rules (must be enforced)

1. **Separate data, target and model.** Display relevant units and the domain of the independent variable.
2. **Explain every chosen rule.** For example, name Product Rule and show both terms; name Chain Rule and show both inner and outer derivatives; for related rates, establish geometry before differentiating.
3. **State assumptions.** For one-dimensional velocity, signed derivative is velocity; speed is absolute value. For a fraction, exclude zero denominator. For an implicit curve, check whether a singular denominator occurs on the curve.
4. **Validate the answer** by direct substitution, alternative algebra, a plotted tangent, units, or an appropriate local approximation. Use exact form before decimal approximations.
5. **Avoid hidden calculations**: a student must be able to reproduce the result from the visible sequence of equalities and explanations without guessing unstated steps.
6. Never label slope in m/s when the axes are in feet and seconds; never present m/s as dimensionless. Radian convention is mandatory for trigonometric derivative formulas.
7. In linear approximation slides, distinguish the actual finite change $\Delta y$ from the differential $dy$; in physics distinguish derivative with respect to time from derivative with respect to position.
8. Include exercises from the book with their actual source anchors; do not replace them with invented problems or different numerical inputs during development.
9. Correct an apparent source/specification conflict only after checking it; if unresolved, retain the intended specification and report the discrepancy succinctly in CLI instead of silently altering content.

## 4. Exact slide-by-slide specification

### Slide 001 — A Rock on Mars — Velocity and Impact — Problem and Given Data

**Audience-visible heading:** A Rock on Mars — Velocity and Impact

**Audience-visible body:**

A rock moves vertically on Mars with height (metres) $H(t)=10t-1.86t^2$, where $t$ is in seconds, $t\ge0$. Find (a) its velocity at $t=1$, (b) its velocity at a general time $t=a$, (c) its positive return time to the launch height, and (d) its impact velocity.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show a rising/falling particle alongside a height–time parabola; mark launch, vertex, and return to ground. The velocity–time line crosses zero at the apex. Keep metres and seconds visible.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 14, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 002 — A Rock on Mars — Velocity and Impact — Plan: Translate and Choose a Method

**Audience-visible heading:** A Rock on Mars — Velocity and Impact

**Audience-visible body:**

**Known:** $H(t)$ gives position, not velocity. **Unknown:** $v(t)=H'(t)$, then solve $H(t)=0$ for $t>0$. The sign of $v$ distinguishes upward from downward movement. $H'(t)$ can be computed from the limit definition or the power rule. The quadratic $H(t)=t(10-1.86t)$ has two roots; one is the launch instant, not impact.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show a rising/falling particle alongside a height–time parabola; mark launch, vertex, and return to ground. The velocity–time line crosses zero at the apex. Keep metres and seconds visible.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 14, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 003 — A Rock on Mars — Velocity and Impact — Complete Step-by-Step Solution

**Audience-visible heading:** A Rock on Mars — Velocity and Impact

**Audience-visible body:**

$$v(t)=\frac{dH}{dt}=10-2(1.86)t=10-3.72t\quad(\mathrm{m/s}).$$
$$v(1)=10-3.72=6.28\ \mathrm{m/s},\qquad v(a)=10-3.72a\ \mathrm{m/s}.$$
$$H(t)=0\iff t(10-1.86t)=0\iff t=0\ \text{or}\ t=\frac{10}{1.86}=\frac{500}{93}\ \mathrm s.$$
$$v\!\left(\frac{500}{93}\right)=10-3.72\left(\frac{500}{93}\right)=-10\ \mathrm{m/s}.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Show a rising/falling particle alongside a height–time parabola; mark launch, vertex, and return to ground. The velocity–time line crosses zero at the apex. Keep metres and seconds visible.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 14, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 004 — A Rock on Mars — Velocity and Impact — Verification and Interpretation

**Audience-visible heading:** A Rock on Mars — Velocity and Impact

**Audience-visible body:**

The launch and impact heights are equal, but the velocities have opposite signs. At $t=1$ the upward velocity is positive; at impact it is negative (downward). Differentiate $v(t)$ once more to obtain $a=-3.72\ \mathrm{m/s^2}$. Do **not** report the impact speed as negative: speed is $|v|=10\ \mathrm{m/s}$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show a rising/falling particle alongside a height–time parabola; mark launch, vertex, and return to ground. The velocity–time line crosses zero at the apex. Keep metres and seconds visible.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 14, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 005 — Average Velocity Versus Instantaneous Velocity — Problem and Given Data

**Audience-visible heading:** Average Velocity Versus Instantaneous Velocity

**Audience-visible body:**

A particle has position (feet) $s(t)=12t^2-6t+23$, with $t$ in seconds. Compute its average velocities on $[4,8]$, $[6,8]$, $[8,10]$, and $[8,12]$, then its instantaneous velocity at $t=8$. Compare secant and tangent slopes.

**Graphic or interactive treatment (internal instruction; do not display this label):** Parabola $s$ vs. $t$ with selectable four secants and tangent at $t=8$; show slope values side by side, not misleading unitless speeds.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 16, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 006 — Average Velocity Versus Instantaneous Velocity — Plan: Translate and Choose a Method

**Audience-visible heading:** Average Velocity Versus Instantaneous Velocity

**Audience-visible body:**

Average velocity on $[a,b]$ is $\bar v=\frac{s(b)-s(a)}{b-a}$. For a quadratic, factor the difference of squares before substituting: $s(b)-s(a)=12(b^2-a^2)-6(b-a)$. The tangent slope at $t=8$ is $s'(8)$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Parabola $s$ vs. $t$ with selectable four secants and tangent at $t=8$; show slope values side by side, not misleading unitless speeds.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 16, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 007 — Average Velocity Versus Instantaneous Velocity — Complete Step-by-Step Solution

**Audience-visible heading:** Average Velocity Versus Instantaneous Velocity

**Audience-visible body:**

$$\bar v_{[a,b]}=\frac{12(b^2-a^2)-6(b-a)}{b-a}=12(a+b)-6\quad(\mathrm{ft/s}).$$
$$\begin{array}{c|c|c} [a,b] & a+b &\bar v\ (\mathrm{ft/s})\\\hline [4,8]&12&138\\[6,8]&14&162\\[8,10]&18&210\\[8,12]&20&234\end{array}$$
$$s'(t)=24t-6,\qquad v(8)=24(8)-6=186\ \mathrm{ft/s}.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Parabola $s$ vs. $t$ with selectable four secants and tangent at $t=8$; show slope values side by side, not misleading unitless speeds.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 16, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 008 — Average Velocity Versus Instantaneous Velocity — Verification and Interpretation

**Audience-visible heading:** Average Velocity Versus Instantaneous Velocity

**Audience-visible body:**

The four averages differ because the time intervals sample different portions of an accelerating trajectory. Taking symmetric intervals $[8-h,8+h]$ yields $\bar v=12(16)-6=186\ \mathrm{ft/s}$ for every $h>0$ in the domain. Thus symmetry gives an exact midpoint slope for this quadratic, but not for arbitrary functions.

**Graphic or interactive treatment (internal instruction; do not display this label):** Parabola $s$ vs. $t$ with selectable four secants and tangent at $t=8$; show slope values side by side, not misleading unitless speeds.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 16, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 009 — First-Principles Tangent to a Quartic — Problem and Given Data

**Audience-visible heading:** First-Principles Tangent to a Quartic

**Audience-visible body:**

For $g(x)=x^4-2$, find $g'(1)$ and an equation of the tangent line at $(1,-1)$. Use the limit definition, not merely a memorized power rule.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $g(x)=x^4-2$, $P=(1,-1)$, variable secant $Q=(1+h,g(1+h))$, and final tangent $y=4x-5$; keep dynamic $h
e0$.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 28, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 010 — First-Principles Tangent to a Quartic — Plan: Translate and Choose a Method

**Audience-visible heading:** First-Principles Tangent to a Quartic

**Audience-visible body:**

Start with $g'(1)=\lim_{h\to0}\frac{g(1+h)-g(1)}h$. Expand $(1+h)^4$ carefully, cancel the constant term, then divide by $h$ only while $h\ne0$. The tangent through $(x_0,y_0)$ has equation $y-y_0=m(x-x_0)$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $g(x)=x^4-2$, $P=(1,-1)$, variable secant $Q=(1+h,g(1+h))$, and final tangent $y=4x-5$; keep dynamic $h
e0$.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 28, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 011 — First-Principles Tangent to a Quartic — Complete Step-by-Step Solution

**Audience-visible heading:** First-Principles Tangent to a Quartic

**Audience-visible body:**

$$\begin{aligned}g'(1)&=\lim_{h\to0}\frac{(1+h)^4-2-(-1)}h\\&=\lim_{h\to0}\frac{1+4h+6h^2+4h^3+h^4-1}{h}\\&=\lim_{h\to0}(4+6h+4h^2+h^3)=4.\end{aligned}$$
$$y-(-1)=4(x-1)\quad\Longrightarrow\quad\boxed{y=4x-5}. $$

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $g(x)=x^4-2$, $P=(1,-1)$, variable secant $Q=(1+h,g(1+h))$, and final tangent $y=4x-5$; keep dynamic $h
e0$.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 28, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 012 — First-Principles Tangent to a Quartic — Verification and Interpretation

**Audience-visible heading:** First-Principles Tangent to a Quartic

**Audience-visible body:**

Substitute $x=1$ into the tangent line: $y=4-5=-1$, so the line passes through the prescribed point. The derivative $g'(x)=4x^3$ independently predicts $g'(1)=4$. The tangent is a *local linear approximation*, not the same curve as $x^4-2$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $g(x)=x^4-2$, $P=(1,-1)$, variable secant $Q=(1+h,g(1+h))$, and final tangent $y=4x-5$; keep dynamic $h
e0$.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.1, Exercise 28, printed p. 114 (PDF p. 146). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 013 — Discover the Derivative Graphically — Problem and Given Data

**Audience-visible heading:** Discover the Derivative Graphically

**Audience-visible body:**

Given $f(x)=x^2$, estimate tangent slopes at $x=0,\frac12,1,2$ from a zoomed graph, use symmetry to predict slopes at their negative counterparts, guess a formula for $f'(x)$, and prove it from the definition.

**Graphic or interactive treatment (internal instruction; do not display this label):** Two synchronized panels: $y=x^2$ and $y=2x$; draggable x-marker, live tangent slope; a vertical guide aligns same $x$ across panels.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 17, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 014 — Discover the Derivative Graphically — Plan: Translate and Choose a Method

**Audience-visible heading:** Discover the Derivative Graphically

**Audience-visible body:**

A parabola has a horizontal tangent at the origin, upward slope for positive $x$, and downward slope for negative $x$. Use a secant with displacement $h$ to find a symbolic slope; then make $h\to0$. Anticipate that $f'$ is an odd function because $f$ is even and differentiable.

**Graphic or interactive treatment (internal instruction; do not display this label):** Two synchronized panels: $y=x^2$ and $y=2x$; draggable x-marker, live tangent slope; a vertical guide aligns same $x$ across panels.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 17, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 015 — Discover the Derivative Graphically — Complete Step-by-Step Solution

**Audience-visible heading:** Discover the Derivative Graphically

**Audience-visible body:**

$$\begin{aligned}\frac{f(x+h)-f(x)}h&=\frac{(x+h)^2-x^2}{h}\\&=\frac{2xh+h^2}{h}=2x+h\quad(h\ne0),\\ f'(x)&=\lim_{h\to0}(2x+h)=\boxed{2x}.\end{aligned}$$
$$\begin{array}{c|rrrrrrr}x&-2&-1&-\tfrac12&0&\tfrac12&1&2\\\hline f'(x)&-4&-2&-1&0&1&2&4\end{array}$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Two synchronized panels: $y=x^2$ and $y=2x$; draggable x-marker, live tangent slope; a vertical guide aligns same $x$ across panels.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 17, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 016 — Discover the Derivative Graphically — Verification and Interpretation

**Audience-visible heading:** Discover the Derivative Graphically

**Audience-visible body:**

Plot $f'$ as the line $y=2x$. Its sign correctly predicts whether the original parabola falls or rises. The derivative $f'$ is defined everywhere on $\mathbb R$. Students should see that **one function produces another function** through differentiation.

**Graphic or interactive treatment (internal instruction; do not display this label):** Two synchronized panels: $y=x^2$ and $y=2x$; draggable x-marker, live tangent slope; a vertical guide aligns same $x$ across panels.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 17, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 017 — Differentiate x⁴ from the Definition — Problem and Given Data

**Audience-visible heading:** Differentiate x⁴ from the Definition

**Audience-visible body:**

Find $f'(x)$ for $f(x)=x^4$ from the definition of derivative. State the domain of $f$ and of $f'$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show $y=x^4$ and $y=4x^3$ with linked cursor; compare slope at $x=-1,0,1$.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 29, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 018 — Differentiate x⁴ from the Definition — Plan: Translate and Choose a Method

**Audience-visible heading:** Differentiate x⁴ from the Definition

**Audience-visible body:**

Use $f'(x)=\lim_{h\to0}\frac{(x+h)^4-x^4}{h}$. Expand the binomial before dividing by $h$. Identify the factor of $h$ shared by all numerator terms; never replace $h$ by zero while it is still in a denominator.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show $y=x^4$ and $y=4x^3$ with linked cursor; compare slope at $x=-1,0,1$.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 29, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 019 — Differentiate x⁴ from the Definition — Complete Step-by-Step Solution

**Audience-visible heading:** Differentiate x⁴ from the Definition

**Audience-visible body:**

$$\begin{aligned}(x+h)^4&=x^4+4x^3h+6x^2h^2+4xh^3+h^4,\\\frac{(x+h)^4-x^4}{h}&=4x^3+6x^2h+4xh^2+h^3,\\ f'(x)&=\lim_{h\to0}(4x^3+6x^2h+4xh^2+h^3)=\boxed{4x^3}.\end{aligned}$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Show $y=x^4$ and $y=4x^3$ with linked cursor; compare slope at $x=-1,0,1$.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 29, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 020 — Differentiate x⁴ from the Definition — Verification and Interpretation

**Audience-visible heading:** Differentiate x⁴ from the Definition

**Audience-visible body:**

Domain $f=\mathbb R$ and domain $f'=\mathbb R$. Check at $x=0$: $f'(0)=0$ (flat tangent). At $x=-1$, $f'(-1)=-4$ (downward tangent). The algebra explains why the power rule works in this particular case.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show $y=x^4$ and $y=4x^3$ with linked cursor; compare slope at $x=-1,0,1$.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 29, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 021 — Differentiate a Function with a Hole in Its Domain — Problem and Given Data

**Audience-visible heading:** Differentiate a Function with a Hole in Its Domain

**Audience-visible body:**

For $f(x)=x+\frac1x$, find $f'(x)$ and state both the function domain and the derivative domain. Connect the result to the original graph.

**Graphic or interactive treatment (internal instruction; do not display this label):** Two-branch graph with a visible vertical asymptote; derivative curve $1-1/x^2$ never crosses the asymptote.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 32, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 022 — Differentiate a Function with a Hole in Its Domain — Plan: Translate and Choose a Method

**Audience-visible heading:** Differentiate a Function with a Hole in Its Domain

**Audience-visible body:**

The input $x=0$ is excluded before any differentiation. Apply either the reciprocal rule or the difference quotient. When combining fractions in the difference quotient, carefully handle the nonzero product $x(x+h)$ and assume $x+h\ne0$ within the domain.

**Graphic or interactive treatment (internal instruction; do not display this label):** Two-branch graph with a visible vertical asymptote; derivative curve $1-1/x^2$ never crosses the asymptote.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 32, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 023 — Differentiate a Function with a Hole in Its Domain — Complete Step-by-Step Solution

**Audience-visible heading:** Differentiate a Function with a Hole in Its Domain

**Audience-visible body:**

$$\begin{aligned}\frac{f(x+h)-f(x)}h&=1+\frac{\frac1{x+h}-\frac1x}{h}\\&=1+\frac{x-(x+h)}{hx(x+h)}\\&=1-\frac1{x(x+h)},\\ f'(x)&=\boxed{1-\frac1{x^2}},\qquad x\ne0.\end{aligned}$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Two-branch graph with a visible vertical asymptote; derivative curve $1-1/x^2$ never crosses the asymptote.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 32, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 024 — Differentiate a Function with a Hole in Its Domain — Verification and Interpretation

**Audience-visible heading:** Differentiate a Function with a Hole in Its Domain

**Audience-visible body:**

Both domains are $(-\infty,0)\cup(0,\infty)$. A derivative cannot be assigned at an input where the original function does not exist. Solving $f'(x)=0$ gives $x=\pm1$; those points have horizontal tangents. Vertical asymptote $x=0$ must remain visible on the graph.

**Graphic or interactive treatment (internal instruction; do not display this label):** Two-branch graph with a visible vertical asymptote; derivative curve $1-1/x^2$ never crosses the asymptote.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.2, Exercise 32, printed p. 127 (PDF p. 159). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 025 — Product Rule: Two Polynomial Factors — Problem and Given Data

**Audience-visible heading:** Product Rule: Two Polynomial Factors

**Audience-visible body:**

Differentiate $f(x)=(5x^2-2)(x^3+3x)$ using the Product Rule. Confirm the answer by expanding the product first.

**Graphic or interactive treatment (internal instruction; do not display this label):** Area-style strips showing two contributions to derivative (optional reuse); otherwise factor cards and simplified polynomial; no heavy simulation.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 5, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 026 — Product Rule: Two Polynomial Factors — Plan: Translate and Choose a Method

**Audience-visible heading:** Product Rule: Two Polynomial Factors

**Audience-visible body:**

Let $u=5x^2-2$, $v=x^3+3x$. Apply $(uv)'=u'v+uv'$. Differentiate the two factors independently before simplifying. Then multiply the original factors to provide an algebraically independent check.

**Graphic or interactive treatment (internal instruction; do not display this label):** Area-style strips showing two contributions to derivative (optional reuse); otherwise factor cards and simplified polynomial; no heavy simulation.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 5, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 027 — Product Rule: Two Polynomial Factors — Complete Step-by-Step Solution

**Audience-visible heading:** Product Rule: Two Polynomial Factors

**Audience-visible body:**

$$u'=10x,\quad v'=3x^2+3.$$
$$\begin{aligned}f'(x)&=10x(x^3+3x)+(5x^2-2)(3x^2+3)\\&=10x^4+30x^2+15x^4+9x^2-6\\&=\boxed{25x^4+39x^2-6}.\end{aligned}$$
$$f(x)=5x^5+13x^3-6x\ \Longrightarrow\ f'(x)=25x^4+39x^2-6.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Area-style strips showing two contributions to derivative (optional reuse); otherwise factor cards and simplified polynomial; no heavy simulation.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 5, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 028 — Product Rule: Two Polynomial Factors — Verification and Interpretation

**Audience-visible heading:** Product Rule: Two Polynomial Factors

**Audience-visible body:**

At $x=0$, the derivative is $-6$ even though $u'(0)=0$: the second contribution $u(0)v'(0)=-6$ remains. Stress that $(uv)'\ne u'v$ and $(uv)'\ne uv'$ in general. Both differentiation routes must agree for all real $x$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Area-style strips showing two contributions to derivative (optional reuse); otherwise factor cards and simplified polynomial; no heavy simulation.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 5, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 029 — Product Rule or Expand First? — Problem and Given Data

**Audience-visible heading:** Product Rule or Expand First?

**Audience-visible body:**

For $f(x)=(1+2x^2)(x^2-x-2)$, differentiate in two ways: using the Product Rule, then multiplying the factors first. Verify the answers are equivalent.

**Graphic or interactive treatment (internal instruction; do not display this label):** Visualize a two-column proof with term grouping; highlight corresponding $x^3,x^2,x,1$ terms and equality.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 23, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 030 — Product Rule or Expand First? — Plan: Translate and Choose a Method

**Audience-visible heading:** Product Rule or Expand First?

**Audience-visible body:**

First method: $u=1+2x^2$ and $v=x^2-x-2$. Second method: distribute $2x^2$ across the second factor, then add the untouched second factor. Use the same final polynomial derivative to confirm consistency.

**Graphic or interactive treatment (internal instruction; do not display this label):** Visualize a two-column proof with term grouping; highlight corresponding $x^3,x^2,x,1$ terms and equality.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 23, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 031 — Product Rule or Expand First? — Complete Step-by-Step Solution

**Audience-visible heading:** Product Rule or Expand First?

**Audience-visible body:**

$$\begin{aligned}f'(x)&=4x(x^2-x-2)+(1+2x^2)(2x-1).\end{aligned}$$
$$\begin{aligned}f(x)&=2x^4-2x^3-3x^2-x-2,\\\frac{df}{dx}&=\boxed{8x^3-6x^2-6x-1}.\end{aligned}$$
$$4x(x^2-x-2)+(1+2x^2)(2x-1)=8x^3-6x^2-6x-1.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Visualize a two-column proof with term grouping; highlight corresponding $x^3,x^2,x,1$ terms and equality.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 23, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 032 — Product Rule or Expand First? — Verification and Interpretation

**Audience-visible heading:** Product Rule or Expand First?

**Audience-visible body:**

At $x=1$, evaluate both forms to obtain $f'(1)=8-6-6-1=-5$. The product and expanded forms are identical; the Product Rule becomes especially valuable when multiplying factors would be cumbersome.

**Graphic or interactive treatment (internal instruction; do not display this label):** Visualize a two-column proof with term grouping; highlight corresponding $x^3,x^2,x,1$ terms and equality.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 23, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 033 — Quotient Rule with Restricted Domain — Problem and Given Data

**Audience-visible heading:** Quotient Rule with Restricted Domain

**Audience-visible body:**

Differentiate $f(t)=\frac{t^3+3t}{t^2-4t+3}$ and state where the function and derivative are defined.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show quotient-rule numerator in two colors; plot vertical asymptotes at $t=1,3$ only after validating their true behavior.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 33, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 034 — Quotient Rule with Restricted Domain — Plan: Translate and Choose a Method

**Audience-visible heading:** Quotient Rule with Restricted Domain

**Audience-visible body:**

Use $u=t^3+3t$, $v=t^2-4t+3$, and $(u/v)'=(u'v-uv')/v^2$. Factor the denominator: $v=(t-1)(t-3)$, so $t=1,3$ are excluded *before* differentiation. Keep parentheses around the entire numerator to avoid a sign error.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show quotient-rule numerator in two colors; plot vertical asymptotes at $t=1,3$ only after validating their true behavior.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 33, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 035 — Quotient Rule with Restricted Domain — Complete Step-by-Step Solution

**Audience-visible heading:** Quotient Rule with Restricted Domain

**Audience-visible body:**

$$u'=3t^2+3,\qquad v'=2t-4.$$
$$f'(t)=\frac{(3t^2+3)(t^2-4t+3)-(t^3+3t)(2t-4)}{(t^2-4t+3)^2}.$$
$$\boxed{f'(t)=\frac{t^4-8t^3+6t^2+9}{(t-1)^2(t-3)^2}},\quad t\ne1,3.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Show quotient-rule numerator in two colors; plot vertical asymptotes at $t=1,3$ only after validating their true behavior.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 33, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 036 — Quotient Rule with Restricted Domain — Verification and Interpretation

**Audience-visible heading:** Quotient Rule with Restricted Domain

**Audience-visible body:**

Check at $t=0$: $f'(0)=9/(1\cdot9)=1$. This matches the Quotient Rule evaluation $u'(0)=3$, $v(0)=3$, $u(0)=0$, giving $f'(0)=3\cdot3/3^2=1$. The zeros of the original denominator remain excluded even if algebraic simplification occurs.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show quotient-rule numerator in two colors; plot vertical asymptotes at $t=1,3$ only after validating their true behavior.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.3, Exercise 33, printed p. 140 (PDF p. 172). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 037 — Product Rule with a Trigonometric Factor — Problem and Given Data

**Audience-visible heading:** Product Rule with a Trigonometric Factor

**Audience-visible body:**

Differentiate $f(x)=x^2\sin x$. Express the answer exactly, then evaluate the slope at $x=\pi/2$. Use radians.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $x^2\sin x$ around $0$ to $\pi$, show tangent at $x=\pi/2$ of slope $\pi$; x-axis in radians.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.4, Exercise 1, printed p. 150 (PDF p. 182). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 038 — Product Rule with a Trigonometric Factor — Plan: Translate and Choose a Method

**Audience-visible heading:** Product Rule with a Trigonometric Factor

**Audience-visible body:**

Both $x^2$ and $\sin x$ depend on $x$, so the Product Rule is required. The derivative $(\sin x)'=\cos x$ assumes that $x$ is measured in radians. Keep the product factored unless evaluation benefits from expansion.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $x^2\sin x$ around $0$ to $\pi$, show tangent at $x=\pi/2$ of slope $\pi$; x-axis in radians.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.4, Exercise 1, printed p. 150 (PDF p. 182). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 039 — Product Rule with a Trigonometric Factor — Complete Step-by-Step Solution

**Audience-visible heading:** Product Rule with a Trigonometric Factor

**Audience-visible body:**

$$f'(x)=(x^2)'\sin x+x^2(\sin x)'=\boxed{2x\sin x+x^2\cos x}.$$
$$f'\left(\frac\pi2\right)=2\left(\frac\pi2\right)\sin\frac\pi2+\left(\frac\pi2\right)^2\cos\frac\pi2=\boxed{\pi}. $$

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $x^2\sin x$ around $0$ to $\pi$, show tangent at $x=\pi/2$ of slope $\pi$; x-axis in radians.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.4, Exercise 1, printed p. 150 (PDF p. 182). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 040 — Product Rule with a Trigonometric Factor — Verification and Interpretation

**Audience-visible heading:** Product Rule with a Trigonometric Factor

**Audience-visible body:**

At $x=0$, $f'(0)=0$; near $x=0$, $\sin x\approx x$, so $f(x)\approx x^3$ and the flat tangent is reasonable. At $x=\pi/2$, $f$ is still changing even though the cosine term vanishes: the derivative from $x^2$ remains.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $x^2\sin x$ around $0$ to $\pi$, show tangent at $x=\pi/2$ of slope $\pi$; x-axis in radians.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.4, Exercise 1, printed p. 150 (PDF p. 182). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 041 — Trigonometric Sum with a Product — Problem and Given Data

**Audience-visible heading:** Trigonometric Sum with a Product

**Audience-visible body:**

Differentiate $f(x)=x\cos x+2\tan x$ on its natural domain.

**Graphic or interactive treatment (internal instruction; do not display this label):** Overlay differentiated contributions in a term-by-term panel; plot on a bounded interval avoiding tangent discontinuities.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.4, Exercise 2, printed p. 150 (PDF p. 182). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 042 — Trigonometric Sum with a Product — Plan: Translate and Choose a Method

**Audience-visible heading:** Trigonometric Sum with a Product

**Audience-visible body:**

Treat the sum term-by-term. Differentiate $x\cos x$ using the Product Rule and $2\tan x$ using the constant multiple rule. Domain restriction: $\tan x$ is undefined when $\cos x=0$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Overlay differentiated contributions in a term-by-term panel; plot on a bounded interval avoiding tangent discontinuities.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.4, Exercise 2, printed p. 150 (PDF p. 182). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 043 — Trigonometric Sum with a Product — Complete Step-by-Step Solution

**Audience-visible heading:** Trigonometric Sum with a Product

**Audience-visible body:**

$$\begin{aligned}\frac{d}{dx}[x\cos x]&=(1)\cos x+x(-\sin x)=\cos x-x\sin x,\\\frac{d}{dx}[2\tan x]&=2\sec^2x,\\\therefore\ f'(x)&=\boxed{\cos x-x\sin x+2\sec^2x}.\end{aligned}$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Overlay differentiated contributions in a term-by-term panel; plot on a bounded interval avoiding tangent discontinuities.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.4, Exercise 2, printed p. 150 (PDF p. 182). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 044 — Trigonometric Sum with a Product — Verification and Interpretation

**Audience-visible heading:** Trigonometric Sum with a Product

**Audience-visible body:**

The domain is $\mathbb R\setminus\{\pi/2+k\pi:k\in\mathbb Z\}$. At $x=0$, $f'(0)=1+0+2=3$. Graphs should not connect across the vertical asymptotes of $\tan x$; radians must be explicit.

**Graphic or interactive treatment (internal instruction; do not display this label):** Overlay differentiated contributions in a term-by-term panel; plot on a bounded interval avoiding tangent discontinuities.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.4, Exercise 2, printed p. 150 (PDF p. 182). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 045 — Chain Rule: Fourth Power of a Polynomial — Problem and Given Data

**Audience-visible heading:** Chain Rule: Fourth Power of a Polynomial

**Audience-visible body:**

Write $y=(2x^3+5)^4$ as a composition and compute $dy/dx$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Composition boxes $x\mapsto u=2x^3+5\mapsto u^4$ with two sensitivity arrows; no separate app simulation needed.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 2, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 046 — Chain Rule: Fourth Power of a Polynomial — Plan: Translate and Choose a Method

**Audience-visible heading:** Chain Rule: Fourth Power of a Polynomial

**Audience-visible body:**

Name the *inner* function $u(x)=2x^3+5$ and the *outer* function $F(u)=u^4$. First find $dF/du$ and $du/dx$. Multiply the derivatives; do not differentiate the inner expression as though it were merely $x$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Composition boxes $x\mapsto u=2x^3+5\mapsto u^4$ with two sensitivity arrows; no separate app simulation needed.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 2, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 047 — Chain Rule: Fourth Power of a Polynomial — Complete Step-by-Step Solution

**Audience-visible heading:** Chain Rule: Fourth Power of a Polynomial

**Audience-visible body:**

$$u=2x^3+5,\quad\frac{du}{dx}=6x^2,\quad\frac{dF}{du}=4u^3.$$
$$\frac{dy}{dx}=\frac{dF}{du}\frac{du}{dx}=4(2x^3+5)^3(6x^2)=\boxed{24x^2(2x^3+5)^3}. $$

**Graphic or interactive treatment (internal instruction; do not display this label):** Composition boxes $x\mapsto u=2x^3+5\mapsto u^4$ with two sensitivity arrows; no separate app simulation needed.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 2, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 048 — Chain Rule: Fourth Power of a Polynomial — Verification and Interpretation

**Audience-visible heading:** Chain Rule: Fourth Power of a Polynomial

**Audience-visible body:**

At $x=0$, $dy/dx=0$ because the inner function is locally flat ($u'(0)=0$). A common wrong result is $4(2x^3+5)^3$—it omits the essential inner derivative $6x^2$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Composition boxes $x\mapsto u=2x^3+5\mapsto u^4$ with two sensitivity arrows; no separate app simulation needed.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 2, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 049 — Chain Rule: A Fractional Power — Problem and Given Data

**Audience-visible heading:** Chain Rule: A Fractional Power

**Audience-visible body:**

Differentiate $g(x)=(2-\sin x)^{3/2}$ and state whether it has a real-valued domain restriction.

**Graphic or interactive treatment (internal instruction; do not display this label):** Use nested colored brackets to show outer power and inner trigonometric expression; optional curve $g$ with tangent at $\pi/2$.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 10, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 050 — Chain Rule: A Fractional Power — Plan: Translate and Choose a Method

**Audience-visible heading:** Chain Rule: A Fractional Power

**Audience-visible body:**

Let $u=2-\sin x$. Because $-1\le\sin x\le1$, we have $u\ge1>0$, so the real fractional power is defined for every real $x$. Apply $\frac{d}{dx}u^{3/2}=\frac32u^{1/2}u'$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Use nested colored brackets to show outer power and inner trigonometric expression; optional curve $g$ with tangent at $\pi/2$.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 10, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 051 — Chain Rule: A Fractional Power — Complete Step-by-Step Solution

**Audience-visible heading:** Chain Rule: A Fractional Power

**Audience-visible body:**

$$u'= -\cos x.$$
$$\begin{aligned}g'(x)&=\frac32(2-\sin x)^{1/2}(-\cos x)\\&=\boxed{-\frac32\cos x\sqrt{2-\sin x}}.\end{aligned}$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Use nested colored brackets to show outer power and inner trigonometric expression; optional curve $g$ with tangent at $\pi/2$.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 10, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 052 — Chain Rule: A Fractional Power — Verification and Interpretation

**Audience-visible heading:** Chain Rule: A Fractional Power

**Audience-visible body:**

At $x=\pi/2$, $\cos x=0$, so $g'(\pi/2)=0$. The negative sign originates from differentiating $-\sin x$; dropping it reverses the predicted local direction of change. Both $g$ and $g'$ have domain $\mathbb R$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Use nested colored brackets to show outer power and inner trigonometric expression; optional curve $g$ with tangent at $\pi/2$.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 10, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 053 — Product Rule and Chain Rule Together — Problem and Given Data

**Audience-visible heading:** Product Rule and Chain Rule Together

**Audience-visible body:**

Differentiate $g(x)=(x+1)^3(x+2)^6$ and factor the result.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $g$ on an appropriate local y-scale, label $x=-2,-4/3,-1$ and indicate stationary points; avoid overflow from sixth powers.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 18, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 054 — Product Rule and Chain Rule Together — Plan: Translate and Choose a Method

**Audience-visible heading:** Product Rule and Chain Rule Together

**Audience-visible body:**

This is a product of two composite functions. Differentiate each factor with the Chain Rule, then combine using the Product Rule. Factor the common $(x+1)^2(x+2)^5$ before simplifying the remaining bracket.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $g$ on an appropriate local y-scale, label $x=-2,-4/3,-1$ and indicate stationary points; avoid overflow from sixth powers.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 18, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 055 — Product Rule and Chain Rule Together — Complete Step-by-Step Solution

**Audience-visible heading:** Product Rule and Chain Rule Together

**Audience-visible body:**

$$\begin{aligned}g'(x)&=3(x+1)^2(x+2)^6+6(x+1)^3(x+2)^5\\&=(x+1)^2(x+2)^5\big[3(x+2)+6(x+1)\big]\\&=\boxed{3(x+1)^2(x+2)^5(3x+4)}.\end{aligned}$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $g$ on an appropriate local y-scale, label $x=-2,-4/3,-1$ and indicate stationary points; avoid overflow from sixth powers.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 18, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 056 — Product Rule and Chain Rule Together — Verification and Interpretation

**Audience-visible heading:** Product Rule and Chain Rule Together

**Audience-visible body:**

At $x=-1$ and $x=-2$, the derivative is zero and the original product is zero; at $x=-4/3$ the derivative is zero even though the function is not zero. This illustrates why a factored derivative is useful for detecting horizontal tangents. Confirm that $3(x+2)+6(x+1)=9x+12=3(3x+4)$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph $g$ on an appropriate local y-scale, label $x=-2,-4/3,-1$ and indicate stationary points; avoid overflow from sixth powers.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 18, printed p. 158 (PDF p. 190). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 057 — Nested Chain Rule from Given Derivative Data — Problem and Given Data

**Audience-visible heading:** Nested Chain Rule from Given Derivative Data

**Audience-visible body:**

Let $r(x)=f(g(h(x)))$. Given $h(1)=2$, $g(2)=3$, $h'(1)=4$, $g'(2)=5$, and $f'(3)=6$, find $r'(1)$. (The book denotes the middle function by $t$; here it is named $g$ to avoid confusion with time.)

**Graphic or interactive treatment (internal instruction; do not display this label):** Show a three-stage computational chain with numerical node values $1\to2\to3$ and multiplicative derivative weights $4,5,6$; meaningful standalone visualization.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 69, printed p. 159 (PDF p. 191). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 058 — Nested Chain Rule from Given Derivative Data — Plan: Translate and Choose a Method

**Audience-visible heading:** Nested Chain Rule from Given Derivative Data

**Audience-visible body:**

Read the composition from inside out. At $x=1$, $h(1)=2$ and then $g(h(1))=g(2)=3$. Differentiate the nested expression: $r'(x)=f'(g(h(x)))g'(h(x))h'(x)$. Evaluate each factor at the correct input; the three derivative values are supplied at *different* points.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show a three-stage computational chain with numerical node values $1\to2\to3$ and multiplicative derivative weights $4,5,6$; meaningful standalone visualization.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 69, printed p. 159 (PDF p. 191). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 059 — Nested Chain Rule from Given Derivative Data — Complete Step-by-Step Solution

**Audience-visible heading:** Nested Chain Rule from Given Derivative Data

**Audience-visible body:**

$$r'(1)=f'\big(g(h(1))\big)\,g'\big(h(1)\big)\,h'(1).$$
$$\begin{aligned}h(1)&=2,\\g(h(1))&=g(2)=3,\\r'(1)&=f'(3)g'(2)h'(1)=6\cdot5\cdot4=\boxed{120}.\end{aligned}$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Show a three-stage computational chain with numerical node values $1\to2\to3$ and multiplicative derivative weights $4,5,6$; meaningful standalone visualization.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 69, printed p. 159 (PDF p. 191). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 060 — Nested Chain Rule from Given Derivative Data — Verification and Interpretation

**Audience-visible heading:** Nested Chain Rule from Given Derivative Data

**Audience-visible body:**

The function value $f(3)$ is **not** required: the derivative formula needs only $f'(3)$. Explain that $f'(1)g'(1)h'(1)$ is not generally valid. In graphically chained models, local sensitivities multiply along the computational path—an important precursor to ML backpropagation.

**Graphic or interactive treatment (internal instruction; do not display this label):** Show a three-stage computational chain with numerical node values $1\to2\to3$ and multiplicative derivative weights $4,5,6$; meaningful standalone visualization.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.5, Exercise 69, printed p. 159 (PDF p. 191). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 061 — Implicit Differentiation and Two Explicit Branches — Problem and Given Data

**Audience-visible heading:** Implicit Differentiation and Two Explicit Branches

**Audience-visible body:**

For the implicitly defined curve $9x^2-y^2=1$, (a) find $dy/dx$ implicitly, (b) solve explicitly for $y$ on the real domain and differentiate each branch, (c) compare the answers.

**Graphic or interactive treatment (internal instruction; do not display this label):** Plot the full implicit hyperbola $9x^2-y^2=1$ with both square-root branches; show vertical tangents at $(±1/3,0)$.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 1, printed p. 166 (PDF p. 198). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 062 — Implicit Differentiation and Two Explicit Branches — Plan: Translate and Choose a Method

**Audience-visible heading:** Implicit Differentiation and Two Explicit Branches

**Audience-visible body:**

Treat $y$ as a differentiable function of $x$ locally. Applying $d/dx$ to $y^2$ gives $2yy'$, **not** $2y$. Then solve $y^2=9x^2-1$ and remember both square-root branches. Vertical tangents may occur where the implicit denominator vanishes.

**Graphic or interactive treatment (internal instruction; do not display this label):** Plot the full implicit hyperbola $9x^2-y^2=1$ with both square-root branches; show vertical tangents at $(±1/3,0)$.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 1, printed p. 166 (PDF p. 198). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 063 — Implicit Differentiation and Two Explicit Branches — Complete Step-by-Step Solution

**Audience-visible heading:** Implicit Differentiation and Two Explicit Branches

**Audience-visible body:**

$$18x-2y\frac{dy}{dx}=0\quad\Longrightarrow\quad\boxed{\frac{dy}{dx}=\frac{9x}{y}},\quad y\ne0.$$
$$y_\pm(x)=\pm\sqrt{9x^2-1},\qquad |x|\ge\frac13.$$
$$y_\pm'(x)=\pm\frac{9x}{\sqrt{9x^2-1}}=\frac{9x}{y_\pm(x)}\quad(|x|>1/3).$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Plot the full implicit hyperbola $9x^2-y^2=1$ with both square-root branches; show vertical tangents at $(±1/3,0)$.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 1, printed p. 166 (PDF p. 198). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 064 — Implicit Differentiation and Two Explicit Branches — Verification and Interpretation

**Audience-visible heading:** Implicit Differentiation and Two Explicit Branches

**Audience-visible body:**

The branches meet at $(\pm1/3,0)$ and have vertical tangent behavior there; the expression $9x/y$ is undefined exactly at $y=0$. Do **not** claim a finite derivative at those points. Graph both upper and lower branches and label the excluded central strip $|x|<1/3$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Plot the full implicit hyperbola $9x^2-y^2=1$ with both square-root branches; show vertical tangents at $(±1/3,0)$.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 1, printed p. 166 (PDF p. 198). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 065 — Collecting y-Prime Terms Correctly — Problem and Given Data

**Audience-visible heading:** Collecting y-Prime Terms Correctly

**Audience-visible body:**

For $x^2-4xy+y^2=4$, compute $dy/dx$ implicitly and identify where the resulting formula does not give a finite slope.

**Graphic or interactive treatment (internal instruction; do not display this label):** Plot the implicit curve using contour tracing or direct algebra where available; use live tangent slope at a valid point and highlight why off-curve algebraic zeros do not count.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 5, printed p. 166 (PDF p. 198). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 066 — Collecting y-Prime Terms Correctly — Plan: Translate and Choose a Method

**Audience-visible heading:** Collecting y-Prime Terms Correctly

**Audience-visible body:**

Differentiate $x^2$ directly, the product $xy$ using $(xy)'=y+xy'$, and $y^2$ using $2yy'$. Gather **all** terms containing $y'$ on one side, then divide by its coefficient, which may be zero at some curve points.

**Graphic or interactive treatment (internal instruction; do not display this label):** Plot the implicit curve using contour tracing or direct algebra where available; use live tangent slope at a valid point and highlight why off-curve algebraic zeros do not count.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 5, printed p. 166 (PDF p. 198). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 067 — Collecting y-Prime Terms Correctly — Complete Step-by-Step Solution

**Audience-visible heading:** Collecting y-Prime Terms Correctly

**Audience-visible body:**

$$2x-4\big(y+xy'\big)+2yy'=0.$$
$$(-4x+2y)y'=4y-2x.$$
$$\boxed{y'=\frac{4y-2x}{2y-4x}=\frac{2y-x}{y-2x}},\qquad y\ne2x.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Plot the implicit curve using contour tracing or direct algebra where available; use live tangent slope at a valid point and highlight why off-curve algebraic zeros do not count.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 5, printed p. 166 (PDF p. 198). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 068 — Collecting y-Prime Terms Correctly — Verification and Interpretation

**Audience-visible heading:** Collecting y-Prime Terms Correctly

**Audience-visible body:**

The denominator is zero along $y=2x$. Intersecting with the original curve gives $x^2-8x^2+4x^2=4$, i.e. $-3x^2=4$, so **there are no real curve points with $y=2x$**. Consequently the slope formula has no real zero-denominator point *on this particular curve*. This is an important check before announcing vertical tangents.

**Graphic or interactive treatment (internal instruction; do not display this label):** Plot the implicit curve using contour tracing or direct algebra where available; use live tangent slope at a valid point and highlight why off-curve algebraic zeros do not count.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 5, printed p. 166 (PDF p. 198). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 069 — Tangent to an Implicit Hyperbola — Problem and Given Data

**Audience-visible heading:** Tangent to an Implicit Hyperbola

**Audience-visible body:**

Find the tangent line to $x^2-xy-y^2=1$ at the specified point $(2,1)$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Local implicit curve with $(2,1)$ highlighted and tangent slope 3/4; show linear approximation around the contact point.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 27, printed p. 167 (PDF p. 199). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 070 — Tangent to an Implicit Hyperbola — Plan: Translate and Choose a Method

**Audience-visible heading:** Tangent to an Implicit Hyperbola

**Audience-visible body:**

First verify the point lies on the curve: $2^2-(2)(1)-1^2=1$. Then differentiate while remembering that both $x$ and $y$ vary. Apply the Product Rule to $xy$ and the Chain Rule to $y^2$. Only after finding $y'$ substitute $(2,1)$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Local implicit curve with $(2,1)$ highlighted and tangent slope 3/4; show linear approximation around the contact point.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 27, printed p. 167 (PDF p. 199). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 071 — Tangent to an Implicit Hyperbola — Complete Step-by-Step Solution

**Audience-visible heading:** Tangent to an Implicit Hyperbola

**Audience-visible body:**

$$2x-\big(y+xy'\big)-2yy'=0.$$
$$\big(x+2y\big)y'=2x-y\quad\Longrightarrow\quad y'=\frac{2x-y}{x+2y}.$$
$$m=\left.\frac{2x-y}{x+2y}\right|_{(2,1)}=\frac{4-1}{2+2}=\frac34.$$
$$\boxed{y-1=\frac34(x-2)}.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Local implicit curve with $(2,1)$ highlighted and tangent slope 3/4; show linear approximation around the contact point.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 27, printed p. 167 (PDF p. 199). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 072 — Tangent to an Implicit Hyperbola — Verification and Interpretation

**Audience-visible heading:** Tangent to an Implicit Hyperbola

**Audience-visible body:**

The tangent passes through $(2,1)$ and has positive slope $3/4$. Warn students not to differentiate $-xy$ as $-xy'$ alone; the missing $-y$ changes the result. Plot the hyperbola locally with a numerically faithful tangent; no misleading straight-line replacement of the curve.

**Graphic or interactive treatment (internal instruction; do not display this label):** Local implicit curve with $(2,1)$ highlighted and tangent slope 3/4; show linear approximation around the contact point.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.6, Exercise 27, printed p. 167 (PDF p. 199). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 073 — Linear Mass Density of a Metal Rod — Problem and Given Data

**Audience-visible heading:** Linear Mass Density of a Metal Rod

**Audience-visible body:**

The mass between the left end of a metal rod and position $x$ metres is $M(x)=3x^2$ kilograms. Find its linear density at $x=1,2,3$ metres; compare where it is largest and smallest among those positions.

**Graphic or interactive treatment (internal instruction; do not display this label):** Rod drawn with color/mark density increasing toward larger $x$; plot $M(x)$ and slope $\lambda(x)=6x$ with distinct units.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 17, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 074 — Linear Mass Density of a Metal Rod — Plan: Translate and Choose a Method

**Audience-visible heading:** Linear Mass Density of a Metal Rod

**Audience-visible body:**

Mass over a small segment $[x,x+\Delta x]$ is $\Delta M\approx M'(x)\Delta x$. The *linear density* $\lambda(x)=dM/dx$ has units $\mathrm{kg/m}$, not $\mathrm{kg}$ and not $\mathrm{kg/m^3}$. Differentiate before evaluating.

**Graphic or interactive treatment (internal instruction; do not display this label):** Rod drawn with color/mark density increasing toward larger $x$; plot $M(x)$ and slope $\lambda(x)=6x$ with distinct units.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 17, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 075 — Linear Mass Density of a Metal Rod — Complete Step-by-Step Solution

**Audience-visible heading:** Linear Mass Density of a Metal Rod

**Audience-visible body:**

$$\lambda(x)=\frac{dM}{dx}=6x\quad (\mathrm{kg/m}),\quad x\ge0.$$
$$\begin{array}{c|c} x\ (\mathrm m)&\lambda(x)\ (\mathrm{kg/m})\\\hline1&6\\2&12\\3&18\end{array}$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Rod drawn with color/mark density increasing toward larger $x$; plot $M(x)$ and slope $\lambda(x)=6x$ with distinct units.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 17, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 076 — Linear Mass Density of a Metal Rod — Verification and Interpretation

**Audience-visible heading:** Linear Mass Density of a Metal Rod

**Audience-visible body:**

Among the three specified points, density is smallest at $x=1$ and largest at $x=3$. Example: a narrow section of length $0.1\ \mathrm m$ near $x=2$ has approximate mass $12(0.1)=1.2\ \mathrm{kg}$. This is a local estimate, not the entire rod's mass.

**Graphic or interactive treatment (internal instruction; do not display this label):** Rod drawn with color/mark density increasing toward larger $x$; plot $M(x)$ and slope $\lambda(x)=6x$ with distinct units.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 17, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 077 — Electric Current as the Rate of Charge Flow — Problem and Given Data

**Audience-visible heading:** Electric Current as the Rate of Charge Flow

**Audience-visible body:**

The charge that passes a point in a wire is $Q(t)=t^3-2t^2+6t+2$ coulombs, where time $t$ is in seconds. Find the current at $t=0.5$ and $t=1$, and determine when the current is smallest for $t\ge0$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph charge $Q(t)$ and current $I(t)$, labeled axes; mark current minimum at $(2/3,14/3)$.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 19, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 078 — Electric Current as the Rate of Charge Flow — Plan: Translate and Choose a Method

**Audience-visible heading:** Electric Current as the Rate of Charge Flow

**Audience-visible body:**

The electric current is $I(t)=dQ/dt$ with units coulombs per second, i.e. amperes. First differentiate the polynomial. Then optimize the resulting quadratic $I(t)$ using its vertex or by differentiating once more and locating $I'(t)=0$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph charge $Q(t)$ and current $I(t)$, labeled axes; mark current minimum at $(2/3,14/3)$.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 19, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 079 — Electric Current as the Rate of Charge Flow — Complete Step-by-Step Solution

**Audience-visible heading:** Electric Current as the Rate of Charge Flow

**Audience-visible body:**

$$I(t)=3t^2-4t+6\quad(\mathrm A).$$
$$I(0.5)=3(0.25)-4(0.5)+6=\boxed{4.75\ \mathrm A}.$$
$$I(1)=3-4+6=\boxed{5\ \mathrm A}.$$
$$I'(t)=6t-4=0\iff t=\frac23\ \mathrm s,\quad I\left(\frac23\right)=\boxed{\frac{14}{3}\ \mathrm A}.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph charge $Q(t)$ and current $I(t)$, labeled axes; mark current minimum at $(2/3,14/3)$.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 19, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 080 — Electric Current as the Rate of Charge Flow — Verification and Interpretation

**Audience-visible heading:** Electric Current as the Rate of Charge Flow

**Audience-visible body:**

Because $I''(t)=6>0$, the critical point $t=2/3$ is a minimum (and is in the physical domain $t\ge0$). Notice $I(t)>0$ throughout: the charge transferred continues increasing even though current first decreases then rises.

**Graphic or interactive treatment (internal instruction; do not display this label):** Graph charge $Q(t)$ and current $I(t)$, labeled axes; mark current minimum at $(2/3,14/3)$.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 19, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 081 — Gravity and Sensitivity to Distance — Problem and Given Data

**Audience-visible heading:** Gravity and Sensitivity to Distance

**Audience-visible body:**

Newton's gravitational force magnitude follows $F(r)=\frac{GmM}{r^2}$ for $r>0$. Find $dF/dr$ and interpret its sign. If the force decreases at $2\ \mathrm{N/km}$ when $r=20{,}000\ \mathrm{km}$, what is $dF/dr$ at $r=10{,}000\ \mathrm{km}$?

**Graphic or interactive treatment (internal instruction; do not display this label):** Dual log or standard plots (one for $F\propto r^{-2}$ and one for $|F'|\propto r^{-3}$), with marks at 10,000 and 20,000 km.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 20, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 082 — Gravity and Sensitivity to Distance — Plan: Translate and Choose a Method

**Audience-visible heading:** Gravity and Sensitivity to Distance

**Audience-visible body:**

Write $K=GmM>0$ so $F(r)=Kr^{-2}$ and $F'(r)=-2Kr^{-3}$. Compare the derivatives at the two distances by taking a ratio; $K$ cancels. Distinguish a derivative with respect to distance ($\mathrm{N/km}$) from force measured in newtons.

**Graphic or interactive treatment (internal instruction; do not display this label):** Dual log or standard plots (one for $F\propto r^{-2}$ and one for $|F'|\propto r^{-3}$), with marks at 10,000 and 20,000 km.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 20, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 083 — Gravity and Sensitivity to Distance — Complete Step-by-Step Solution

**Audience-visible heading:** Gravity and Sensitivity to Distance

**Audience-visible body:**

$$\frac{dF}{dr}=-\frac{2GmM}{r^3}<0.$$
$$\frac{F'(10{,}000)}{F'(20{,}000)}=\left(\frac{20{,}000}{10{,}000}\right)^3=8.$$
$$F'(10{,}000)=8\big(-2\ \mathrm{N/km}\big)=\boxed{-16\ \mathrm{N/km}}.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Dual log or standard plots (one for $F\propto r^{-2}$ and one for $|F'|\propto r^{-3}$), with marks at 10,000 and 20,000 km.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 20, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 084 — Gravity and Sensitivity to Distance — Verification and Interpretation

**Audience-visible heading:** Gravity and Sensitivity to Distance

**Audience-visible body:**

The negative derivative means force **decreases as distance increases**. Halving the separation makes the **force four times** as large but makes the **magnitude of its spatial derivative eight times** as large. These are different scaling laws; illustrate both rather than confusing force with its sensitivity.

**Graphic or interactive treatment (internal instruction; do not display this label):** Dual log or standard plots (one for $F\propto r^{-2}$ and one for $|F'|\propto r^{-3}$), with marks at 10,000 and 20,000 km.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.7, Exercise 20, printed p. 179 (PDF p. 211). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 085 — Streetlight, Walking Person, Moving Shadow — Problem and Given Data

**Audience-visible heading:** Streetlight, Walking Person, Moving Shadow

**Audience-visible body:**

A streetlight is at the top of a 15-ft pole. A 6-ft-tall person walks away from it at $dx/dt=5\ \mathrm{ft/s}$. Find the speed of the **tip** of the person's shadow when the person is 40 ft from the pole.

**Graphic or interactive treatment (internal instruction; do not display this label):** Side view: light ray, 15-ft pole, 6-ft person, labeled x, s and z; animate person moving and tip moving faster.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 15, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 086 — Streetlight, Walking Person, Moving Shadow — Plan: Translate and Choose a Method

**Audience-visible heading:** Streetlight, Walking Person, Moving Shadow

**Audience-visible body:**

Draw a side-view with pole height 15, person height 6, horizontal distance $x$ to the person, shadow length $s$, and tip coordinate $z=x+s$. Similar triangles imply $\frac{15}{x+s}=\frac6s$. Differentiate the resulting relation with respect to time; differentiate $z=x+s$ to answer the question about the **tip**, not merely the shadow length.

**Graphic or interactive treatment (internal instruction; do not display this label):** Side view: light ray, 15-ft pole, 6-ft person, labeled x, s and z; animate person moving and tip moving faster.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 15, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 087 — Streetlight, Walking Person, Moving Shadow — Complete Step-by-Step Solution

**Audience-visible heading:** Streetlight, Walking Person, Moving Shadow

**Audience-visible body:**

$$15s=6(x+s)\quad\Longrightarrow\quad 9s=6x\quad\Longrightarrow\quad s=\frac23x.$$
$$\frac{ds}{dt}=\frac23\frac{dx}{dt}=\frac{10}{3}\ \mathrm{ft/s}.$$
$$z=x+s=\frac53x\quad\Longrightarrow\quad\boxed{\frac{dz}{dt}=\frac53(5)=\frac{25}{3}\ \mathrm{ft/s}}.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Side view: light ray, 15-ft pole, 6-ft person, labeled x, s and z; animate person moving and tip moving faster.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 15, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 088 — Streetlight, Walking Person, Moving Shadow — Verification and Interpretation

**Audience-visible heading:** Streetlight, Walking Person, Moving Shadow

**Audience-visible body:**

The speed of the shadow tip is $25/3\approx8.33\ \mathrm{ft/s}$, not $10/3\ \mathrm{ft/s}$ (that is only the growth rate of shadow **length**). At $x=40$, $s=80/3\ \mathrm{ft}$, but the speed is independent of $x$ in this constant-height model.

**Graphic or interactive treatment (internal instruction; do not display this label):** Side view: light ray, 15-ft pole, 6-ft person, labeled x, s and z; animate person moving and tip moving faster.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 15, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 089 — Two Cars Moving at Right Angles — Problem and Given Data

**Audience-visible heading:** Two Cars Moving at Right Angles

**Audience-visible body:**

Two cars start at the same point at the same time. One drives south at $60\ \mathrm{mi/h}$, the other west at $25\ \mathrm{mi/h}$. Find the rate at which their separation increases two hours later.

**Graphic or interactive treatment (internal instruction; do not display this label):** Right-triangle map with moving cars; label $25t$, $60t$, $65t$; slider t≥0 but no heavyweight map library.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 17, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 090 — Two Cars Moving at Right Angles — Plan: Translate and Choose a Method

**Audience-visible heading:** Two Cars Moving at Right Angles

**Audience-visible body:**

Use perpendicular displacement components $x=25t$ (west) and $y=60t$ (south). Pythagoras gives $d^2=x^2+y^2$. Differentiate with respect to time: $2d\,d'=2xx'+2yy'$. Evaluate at $t=2$ or simplify $d(t)$ first.

**Graphic or interactive treatment (internal instruction; do not display this label):** Right-triangle map with moving cars; label $25t$, $60t$, $65t$; slider t≥0 but no heavyweight map library.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 17, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 091 — Two Cars Moving at Right Angles — Complete Step-by-Step Solution

**Audience-visible heading:** Two Cars Moving at Right Angles

**Audience-visible body:**

$$d(t)=\sqrt{(25t)^2+(60t)^2}=\sqrt{4225t^2}=65t\quad(t\ge0).$$
$$\boxed{\frac{dd}{dt}=65\ \mathrm{mi/h}}.$$
$$d(2)=130\ \mathrm{mi},\quad x(2)=50\ \mathrm{mi},\quad y(2)=120\ \mathrm{mi}.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Right-triangle map with moving cars; label $25t$, $60t$, $65t$; slider t≥0 but no heavyweight map library.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 17, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 092 — Two Cars Moving at Right Angles — Verification and Interpretation

**Audience-visible heading:** Two Cars Moving at Right Angles

**Audience-visible body:**

Check by implicit differentiation: $d'=\frac{xx'+yy'}d=\frac{50(25)+120(60)}{130}=65\ \mathrm{mi/h}$. The question asks the rate at two hours, not the distance; $130\ \mathrm{mi}$ is an intermediate result. For constant perpendicular velocities starting together, $d'$ is constant.

**Graphic or interactive treatment (internal instruction; do not display this label):** Right-triangle map with moving cars; label $25t$, $60t$, $65t$; slider t≥0 but no heavyweight map library.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 17, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 093 — Growing Conical Pile of Gravel — Problem and Given Data

**Audience-visible heading:** Growing Conical Pile of Gravel

**Audience-visible body:**

Gravel is deposited at $dV/dt=30\ \mathrm{ft^3/min}$, forming a right circular cone whose base **diameter equals its height** at all times. Find $dh/dt$ when the pile is $10\ \mathrm{ft}$ high.

**Graphic or interactive treatment (internal instruction; do not display this label):** Cone cross-section with radius $r=h/2$, height h, inflow arrow, and $V(h)$ vs h plot.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 29, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 094 — Growing Conical Pile of Gravel — Plan: Translate and Choose a Method

**Audience-visible heading:** Growing Conical Pile of Gravel

**Audience-visible body:**

Write the geometric constraint $2r=h$, so $r=h/2$. Substitute it into $V=\frac13\pi r^2h$ **before differentiating**, turning a two-variable relation into a function of $h$ alone. Use the Chain Rule with respect to $t$.

**Graphic or interactive treatment (internal instruction; do not display this label):** Cone cross-section with radius $r=h/2$, height h, inflow arrow, and $V(h)$ vs h plot.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 29, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 095 — Growing Conical Pile of Gravel — Complete Step-by-Step Solution

**Audience-visible heading:** Growing Conical Pile of Gravel

**Audience-visible body:**

$$V=\frac13\pi\left(\frac h2\right)^2h=\frac{\pi h^3}{12}.$$
$$\frac{dV}{dt}=\frac{\pi}{12}(3h^2)\frac{dh}{dt}=\frac{\pi h^2}{4}\frac{dh}{dt}.$$
$$30=\frac{\pi(10)^2}{4}\frac{dh}{dt}=25\pi\frac{dh}{dt}.$$
$$\boxed{\frac{dh}{dt}=\frac6{5\pi}\ \mathrm{ft/min}\approx0.382\ \mathrm{ft/min}}.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Cone cross-section with radius $r=h/2$, height h, inflow arrow, and $V(h)$ vs h plot.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 29, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 096 — Growing Conical Pile of Gravel — Verification and Interpretation

**Audience-visible heading:** Growing Conical Pile of Gravel

**Audience-visible body:**

Volume increases at a constant rate, but pile height increases more slowly as its base area expands. Note $dV/dt$ and $dh/dt$ have different dimensions; never equate them. The cone's diameter-to-height constraint is essential.

**Graphic or interactive treatment (internal instruction; do not display this label):** Cone cross-section with radius $r=h/2$, height h, inflow arrow, and $V(h)$ vs h plot.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.8, Exercise 29, printed p. 186 (PDF p. 218). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 097 — Actual Change Versus Differential — Problem and Given Data

**Audience-visible heading:** Actual Change Versus Differential

**Audience-visible body:**

For $y=f(x)=x^2-4x$ at $x=3$ and $\Delta x=dx=0.5$, compute the exact change $\Delta y$ and the differential $dy$. Compare them in a graph.

**Graphic or interactive treatment (internal instruction; do not display this label):** Quadratic $x²-4x$, tangent at $(3,-3)$, vertical labeled segments $\Delta y=1.25$ and $dy=1.0$ ending at x=3.5.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 19, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 098 — Actual Change Versus Differential — Plan: Translate and Choose a Method

**Audience-visible heading:** Actual Change Versus Differential

**Audience-visible body:**

The *actual* change is $\Delta y=f(x+\Delta x)-f(x)$, whereas the *differential* is $dy=f'(x)\,dx$. At a curved graph, these are generally different because the tangent gives only a linear approximation.

**Graphic or interactive treatment (internal instruction; do not display this label):** Quadratic $x²-4x$, tangent at $(3,-3)$, vertical labeled segments $\Delta y=1.25$ and $dy=1.0$ ending at x=3.5.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 19, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 099 — Actual Change Versus Differential — Complete Step-by-Step Solution

**Audience-visible heading:** Actual Change Versus Differential

**Audience-visible body:**

$$f(3)=9-12=-3,\qquad f(3.5)=12.25-14=-1.75.$$
$$\Delta y=f(3.5)-f(3)=-1.75-(-3)=\boxed{1.25}.$$
$$f'(x)=2x-4,\qquad dy=f'(3)(0.5)=(6-4)(0.5)=\boxed{1.0}.$$
$$\Delta y-dy=\boxed{0.25}.$$

**Graphic or interactive treatment (internal instruction; do not display this label):** Quadratic $x²-4x$, tangent at $(3,-3)$, vertical labeled segments $\Delta y=1.25$ and $dy=1.0$ ending at x=3.5.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 19, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 100 — Actual Change Versus Differential — Verification and Interpretation

**Audience-visible heading:** Actual Change Versus Differential

**Audience-visible body:**

Because $f''(x)=2>0$, the curve lies above its tangent nearby, explaining why $\Delta y>dy$ for nonzero $dx$ in this quadratic example. Mark the curve displacement (1.25 vertical units) and the tangent prediction (1.0 vertical unit) from the same starting point.

**Graphic or interactive treatment (internal instruction; do not display this label):** Quadratic $x²-4x$, tangent at $(3,-3)$, vertical labeled segments $\Delta y=1.25$ and $dy=1.0$ ending at x=3.5.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 19, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 101 — Linear Approximation of 1.999⁴ — Problem and Given Data

**Audience-visible heading:** Linear Approximation of 1.999⁴

**Audience-visible body:**

Estimate $(1.999)^4$ using a linear approximation centered at a convenient nearby point. Give the numerical estimate, and show the direction of the approximation error.

**Graphic or interactive treatment (internal instruction; do not display this label):** Zoomed plot near x=2 of $x^4$ and tangent $16+32(x-2)$; exaggerated zoom needed to show small difference and a numeric error readout.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 23, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 102 — Linear Approximation of 1.999⁴ — Plan: Translate and Choose a Method

**Audience-visible heading:** Linear Approximation of 1.999⁴

**Audience-visible body:**

Choose $f(x)=x^4$ and $a=2$ because $f(2)=16$ and $f'(2)=32$ are exact. Write $x=2+dx$ with $dx=-0.001$, and apply $f(x)\approx f(a)+f'(a)(x-a)$. Differentiate exactly before substituting.

**Graphic or interactive treatment (internal instruction; do not display this label):** Zoomed plot near x=2 of $x^4$ and tangent $16+32(x-2)$; exaggerated zoom needed to show small difference and a numeric error readout.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 23, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 103 — Linear Approximation of 1.999⁴ — Complete Step-by-Step Solution

**Audience-visible heading:** Linear Approximation of 1.999⁴

**Audience-visible body:**

$$f(x)=x^4,\qquad f'(x)=4x^3,\qquad f'(2)=32.$$
$$L(x)=16+32(x-2).$$
$$\boxed{(1.999)^4\approx L(1.999)=16+32(-0.001)=15.968}. $$

**Graphic or interactive treatment (internal instruction; do not display this label):** Zoomed plot near x=2 of $x^4$ and tangent $16+32(x-2)$; exaggerated zoom needed to show small difference and a numeric error readout.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 23, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 104 — Linear Approximation of 1.999⁴ — Verification and Interpretation

**Audience-visible heading:** Linear Approximation of 1.999⁴

**Audience-visible body:**

The true value is $(1.999)^4=15.968023992001$, so $L(1.999)$ is an **underestimate** by approximately $2.3992001\times10^{-5}$. This is consistent with $f''(x)=12x^2>0$ near $x=2$: the tangent lies below the convex graph. Put the approximation and exact comparison visibly on screen.

**Graphic or interactive treatment (internal instruction; do not display this label):** Zoomed plot near x=2 of $x^4$ and tangent $16+32(x-2)$; exaggerated zoom needed to show small difference and a numeric error readout.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 23, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 105 — Measurement Error in the Area of a Disk — Problem and Given Data

**Audience-visible heading:** Measurement Error in the Area of a Disk

**Audience-visible body:**

A circular disk's measured radius is $r=24\ \mathrm{cm}$ with maximum measurement error $|dr|=0.2\ \mathrm{cm}$. Use differentials to estimate the maximum absolute error, relative error, and percentage error in the calculated area.

**Graphic or interactive treatment (internal instruction; do not display this label):** Concentric circles of radii 24 and 24.2 cm with highlighted thin annulus; show nominal area vs linearized change.

**Build requirements (internal):** Create a clean statement plus known/unknown mathematical quantities; no spoilers.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 32, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 106 — Measurement Error in the Area of a Disk — Plan: Translate and Choose a Method

**Audience-visible heading:** Measurement Error in the Area of a Disk

**Audience-visible body:**

Use $A(r)=\pi r^2$. Differentials give $dA=2\pi r\,dr$. For the maximum *magnitude*, take absolute values. Compute the nominal area $A=\pi(24)^2=576\pi\ \mathrm{cm^2}$ before dividing to obtain relative error.

**Graphic or interactive treatment (internal instruction; do not display this label):** Concentric circles of radii 24 and 24.2 cm with highlighted thin annulus; show nominal area vs linearized change.

**Build requirements (internal):** Show the reasoning sequentially with clear English math annotations.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 32, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 107 — Measurement Error in the Area of a Disk — Complete Step-by-Step Solution

**Audience-visible heading:** Measurement Error in the Area of a Disk

**Audience-visible body:**

$$|dA|\approx 2\pi(24)(0.2)=\boxed{9.6\pi\ \mathrm{cm^2}}.$$
$$\frac{|dA|}{A}\approx\frac{9.6\pi}{576\pi}=\boxed{\frac1{60}\approx0.016667}.$$
$$\boxed{\text{Percentage error}\approx1.667\%}. $$

**Graphic or interactive treatment (internal instruction; do not display this label):** Concentric circles of radii 24 and 24.2 cm with highlighted thin annulus; show nominal area vs linearized change.

**Build requirements (internal):** Render every displayed equality as KaTeX-quality math; support progressive reveals without hiding a mathematically essential line.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 32, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

### Slide 108 — Measurement Error in the Area of a Disk — Verification and Interpretation

**Audience-visible heading:** Measurement Error in the Area of a Disk

**Audience-visible body:**

The first-order relation $\frac{|dA|}A\approx2\frac{|dr|}r$ shows that a 0.8333% radius error yields roughly twice that percentage in area. This is a *differential estimate*, not an assertion that the exact area error equals $9.6\pi$: the finite-change formula contains the additional $(dr)^2$ term.

**Graphic or interactive treatment (internal instruction; do not display this label):** Concentric circles of radii 24 and 24.2 cm with highlighted thin annulus; show nominal area vs linearized change.

**Build requirements (internal):** Offer a meaningful numerical, graphical or units-based validation; do not repeat the main derivation unchanged.

**Verified source anchor (internal only):** Stewart 8e, §2.9, Exercise 32, printed p. 193 (PDF p. 225). Problem restated for clear lecture delivery, not copied as a page image.

## 5. Interactive asset reuse strategy

Reuse current graph, derivative/limit and animation components wherever practical. The minimum useful reusable templates are: (a) function-and-tangent graph; (b) 2-D diagram with dimension arrows; (c) paired plots for function and derivative; (d) symbolic equation reveal; (e) dynamic local linear approximation. Each can serve multiple problems through data and configuration. Avoid creating standalone bespoke engines for every exercise. For nontrivial implicit curves, prefer sampled contour/branch geometry with checked axis scaling; never join across disconnected components.

## 6. Independent verification checklist (for tests and review)

- Exercise 01 (§2.1, #14): H(0)=0; v(1)=6.28; t_impact=500/93 s; v_impact=-10; acceleration=-3.72.
- Exercise 02 (§2.1, #16): [4,8]=138; [6,8]=162; [8,10]=210; [8,12]=234; v(8)=186.
- Exercise 03 (§2.1, #28): point=(1,-1); slope=4; tangent y=4x-5.
- Exercise 04 (§2.2, #17): f_prime=2*x; derivative on all reals; symmetry odd derivative.
- Exercise 05 (§2.2, #29): f_prime=4*x^3; both domains real.
- Exercise 06 (§2.2, #32): f_prime=1-1/x^2; domain exclude zero; stationary points ±1.
- Exercise 07 (§2.3, #5): f_prime=25*x^4+39*x^2-6.
- Exercise 08 (§2.3, #23): f_prime=8*x^3-6*x^2-6*x-1; at 1=-5.
- Exercise 09 (§2.3, #33): derivative=(t^4-8t^3+6t^2+9)/((t-1)^2*(t-3)^2); at0=1.
- Exercise 10 (§2.4, #1): f_prime=2*x*sin(x)+x^2*cos(x); value pi at pi/2.
- Exercise 11 (§2.4, #2): f_prime=cos(x)-x*sin(x)+2*sec(x)^2; at0=3; domain cos(x)≠0.
- Exercise 12 (§2.5, #2): derivative 24*x^2*(2*x^3+5)^3.
- Exercise 13 (§2.5, #10): derivative=-(3/2)*cos(x)*sqrt(2-sin(x)); domain R.
- Exercise 14 (§2.5, #18): derivative=3*(x+1)^2*(x+2)^5*(3*x+4).
- Exercise 15 (§2.5, #69): r_prime(1)=120.
- Exercise 16 (§2.6, #1): implicit derivative=9*x/y; x domain |x|>=1/3; finite slope only y≠0.
- Exercise 17 (§2.6, #5): y_prime=(2*y-x)/(y-2*x); y=2x has no real intersection.
- Exercise 18 (§2.6, #27): point membership true; tangent slope=3/4.
- Exercise 19 (§2.7, #17): lambda(1)=6; lambda(2)=12; lambda(3)=18 kg/m.
- Exercise 20 (§2.7, #19): I(.5)=4.75; I(1)=5; minimum t=2/3, I=14/3.
- Exercise 21 (§2.7, #20): ratio derivative 8; F_prime(10000)=-16 N/km.
- Exercise 22 (§2.8, #15): tip speed 25/3 ft/s; shadow growth 10/3 ft/s; s at x40=80/3 ft.
- Exercise 23 (§2.8, #17): two-hours components (50,120), d=130 miles, rate=65 mph.
- Exercise 24 (§2.8, #29): dh_dt=6/(5*pi)=~0.38197 ft/min at h10.
- Exercise 25 (§2.9, #19): delta_y=1.25; dy=1; difference=.25.
- Exercise 26 (§2.9, #23): estimate=15.968; actual=15.968023992001; underestimates by 0.000023992001.
- Exercise 27 (§2.9, #32): A=576*pi; abs(dA)=9.6*pi; relative 1/60; percent 1.66667%.

## 7. Integration acceptance criteria

- Exactly **108** numbered slides and **27** four-slide problem sequences; correctly ordered and with all 27 problems preserved.
- Chapter 2 Exercises accessible from the existing Chapter 2 homepage Theory/Exercises grouping; use the project's established route pattern, preferably `/chapter-2/exercises` if available.
- No changes to existing decks, slide counts, authored Markdown files, existing theme logic, or mathematical source values.
- Problem/strategy/derivation/verification visible on the corresponding slide only, with legitimate progressive reveal rather than 4 visually identical screens.
- All audience-facing text in English; reliable KaTeX fractions, braces, derivatives, exponents, and units, never ASCII approximations like `v=s/t` in place of typeset equations.
- All essential calculations verified; no hard-coded fake graph slopes; plot panels light under both themes.
- Pass existing tests, typecheck, build; browser check several high-density equations and graphs at both target resolutions and homepage submenu accessibility. Audit is a concise **CLI-only response** (180 words maximum); **do not create reports**.
