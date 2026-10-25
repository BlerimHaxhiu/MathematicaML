---
id: preview
type: theory-presentation
title: "A Preview of Calculus"
subtitle: "Mathematics for Machine Learning"
source: "James Stewart, Calculus, Eighth Edition, A Preview of Calculus, printed pp. 1–8"
source_pdf: "Calculus (James Stewart).pdf"
source_pdf_pages: "33–40 (1-indexed)"
slide_count: 25
lecture_minutes: 90
break_after_slide: 13
break_minutes: 6
language: "en"
audience_language: "English only: slide titles, explanations, mathematical labels, controls, and speaker-facing implementation instructions"
status: "content-authored; implementation-pending"
existing_code: "Preserve the current React presentation app and reuse working Preview components"
---

# A Preview of Calculus — 25-Slide Content Specification

> **Purpose:** This is the authoritative English-language content and visualization specification for the browser-based university presentation. It defines the slide order, exact student-facing messages, mathematical notation, diagrams, interactions, worked examples, and validation requirements. It is **not** content to be displayed in the margins or as an administrative overlay.
>
> **Source boundary:** The eight printed pages of Stewart's *A Preview of Calculus* (PDF pages 33–40). Examples explicitly marked **original illustration** or **ML extension** are additional teaching material, not examples attributed to Stewart. All graphs and diagrams must be drawn afresh; do not use screenshots of textbook figures.
>
> **Language rule:** **All slide content and all implementation instructions in this file are in English.** Do not introduce Albanian text, bilingual headings, translated captions, or glossary panels. Scientific vocabulary should match the English terminology used in Stewart.

## 0. Content and Presentation Contract

- **Product:** A university presentation in the existing localhost application, **exactly 25 slides**, one slide per viewport, with a white 16:9 presentation surface. Not an LMS, textbook-reading application, or self-study dashboard.
- **Audience:** First-year Computer Science students with basic high-school algebra who need to develop mathematical intuition.
- **Teaching language:** English throughout. Prefer plain, precise scientific English rather than unnecessarily advanced prose.
- **Mathematics:** Render equations with KaTeX/LaTeX (or existing equivalent), never crude inline strings such as `v=s/t`. Use display fractions, correctly placed subscripts, mathematical symbols, and properly typeset physical units.
- **Four complementary views:** Verbal meaning, geometric picture, numerical evidence, and algebraic expression. Use interactions only when they make a mathematical process easier to understand.
- **Preview, not Chapter 1:** Do not teach Chapter 1 systematically (domain/range theory, limit laws, epsilon–delta proofs, continuity theorems). Do not teach general differentiation or integration algorithms. A brief introductory derivative or integral notation is allowed only when clearly positioned as a preview.
- **Break:** Six minutes **after slide 13**, with no extra numbered slide.
- **Central idea:** Calculus studies change and accumulation. Limits connect questions about curved area, tangents, instantaneous velocity, numerical sequences, and infinite sums.
- **Design tokens:** White `#FFFFFF` background; navy `#14263D` primary text; teal `#0D9488` principal curve; blue `#2563EB` comparisons; amber `#F59E0B` meaningful highlights; pale gray coordinate grids. Slides must be projector-readable.
- **Audience-only UI:** Do not render `source`, `timing`, `objective`, `developer note`, `teacher prompt`, `simulation ID`, `validation status`, or requirement names on screen. No administrative badges or explanatory sidebars.
- **Field interpretation:** Each `On screen` section specifies actual slide content. `Visual`, `Interaction`, `Teaching guidance`, `Source`, and `Validation` are instructions for implementation and are **not** to be exposed as labels.

## 1. Lecture Timing — 90 Minutes Including the Break

| Slide range | Topic | Minutes |
|---|---|---:|
| 01–03 | Why Calculus? | 8 |
| 04–08 | The Area Problem | 16 |
| 09–13 | The Tangent Problem | 17 |
| **Break** | **After slide 13** | **6** |
| 14–17 | Velocity | 15 |
| 18–19 | The Limit of a Sequence | 8 |
| 20–22 | The Sum of a Series | 12 |
| 23–25 | Synthesis and introductory Machine Learning connection | 8 |
| **Total** | **84 active minutes + 6-minute break** | **90** |

Per-slide active timing, in minutes:

`[2, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 5, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 2]`

These values are internal pacing guidance only; do not display them in presentation mode.

---

## 2. Slide-by-Slide Storyboard

### Slide 01 — A Preview of Calculus

- **Time:** 2 minutes. **Source:** Printed p. 1.
- **Core idea:** Calculus studies quantities that change and methods for making approximations arbitrarily accurate.
- **On screen:**
  - **A Preview of Calculus**
  - *The mathematics of change, motion, and approximation.*
  - **Big question:** How can we calculate what happens at a single instant?
- **Visual:** A point traveling along an original SVG curve with a subtle time indicator. Mathematical graphics, not decorative stock imagery.
- **Interaction:** Start/pause animation, with a meaningful static fallback.
- **Teaching guidance:** Motivate the distinction between calculating a value and understanding how that value changes.

### Slide 02 — Static vs. Dynamic Mathematics

- **Time:** 3 minutes. **Source:** Printed p. 1.
- **Core idea:** Elementary mathematics often describes fixed relationships; calculus studies how quantities evolve.
- **On screen:**
  - **Static Mathematics:** `\(A=\ell w\)` — the area of a rectangle with fixed dimensions.
  - **Dynamic Mathematics:** `\(s=s(t)\)` — position as a function of time.
  - **Question:** How fast is position changing at a particular instant?
- **Visual:** A rectangle with labeled sides `\(\ell\)` and `\(w\)` next to a position–time graph with a moving point.
- **Teaching guidance:** Do not characterize calculus as differentiation alone; change and accumulation are both central.

### Slide 03 — Five Questions, One Unifying Idea

- **Time:** 3 minutes. **Source:** Printed pp. 1–8.
- **On screen:**
  1. **Area:** How can we find the area of a curved region?
  2. **Tangent:** How can we determine the slope of a curve at one point?
  3. **Velocity:** How can we measure motion at one instant?
  4. **Sequence:** What does it mean for numbers to approach a value?
  5. **Series:** How can infinitely many terms have a finite sum?
  - **One idea connects them: LIMIT.**
- **Visual:** Five small original scientific drawings linked to a central mathematical limit symbol. Avoid decorative cards.

### Slide 04 — The Area Problem: Easy Shapes, Difficult Curves

- **Time:** 3 minutes. **Source:** Printed p. 2.
- **On screen:**
  - **Polygons:** Divide the shape into triangles and add their areas.
  - **Curved regions:** A direct elementary area formula may not be available.
  - `\(A_{\text{polygon}}=\sum_i A_i\)`
  - **Question:** Can we approximate a curved shape with shapes whose areas we already know?
- **Visual:** An irregular polygon partitioned into triangles, next to a curved region.

### Slide 05 — The Method of Exhaustion

- **Time:** 3 minutes. **Source:** Printed p. 2.
- **On screen:**
  - **The Method of Exhaustion**
  - *Approximate a curved region using increasingly fine geometric shapes.*
  - `\(A_n\longrightarrow A\quad\text{as }n\to\infty\)`
- **Visual / interaction:** Unit circle with an inscribed regular polygon; discrete side-count slider `\(n\in\{3,4,6,8,12,24,48,96\}\)`. Display its area beside the area of the circle.
- **Exact simulation mathematics:** For radius `\(r\)`,
  `\[A_n=\frac{nr^2}{2}\sin\!\left(\frac{2\pi}{n}\right),\qquad A_{\text{circle}}=\pi r^2.\]`
- **Validation:** Every finite polygon is inside the circle and has area strictly less than `\(\pi r^2\)` for `\(n\ge 3\)`.

### Slide 06 — Approaching the Area of a Circle

- **Time:** 3 minutes. **Source:** Printed p. 2; polygon values are computed teaching examples.
- **On screen:**
  - `\[A=\lim_{n\to\infty}A_n=\pi r^2\]`
  - For a unit circle, `\(r=1\)` and `\(A=\pi\approx 3.14159\)`.
  - **Numerical evidence:**

    | Number of sides | Inscribed polygon area |
    |---:|---:|
    | `\(6\)` | `\(\approx 2.59808\)` |
    | `\(12\)` | `\(3\)` |
    | `\(48\)` | `\(\approx 3.13263\)` |

- **Visual:** Three polygon approximations against the same fixed circle outline; the gap to the circle visibly decreases.
- **Teaching guidance:** The arrow to infinity represents a limiting process, not a computer drawing an infinite number of edges.
- **Embedded exercise P-01:** Find `\(A_{12}\)` for `\(r=1\)`.
  `\[A_{12}=\frac{12}{2}\sin\!\left(\frac{\pi}{6}\right)=6\cdot\frac12=\boxed{3}.\]`

### Slide 07 — Area Under a Curve

- **Time:** 4 minutes. **Source:** Printed p. 2.
- **On screen:**
  - **Area Under a Curve**
  - `\(f(x)=x^2,\quad 0\leq x\leq 1\)`
  - **Rectangle approximation:**
    `\[A\approx\sum_{i=1}^{n} f(x_i)\,\Delta x\]`
- **Visual / interaction:** A shaded region below `\(y=x^2\)` on `[0,1]`. Slider for `\(n=1,\ldots,100\)` and a **Left / Right** endpoint selector. The drawn rectangles and displayed sum must update together.
- **Exact rules:**
  `\[\Delta x=\frac1n,\qquad L_n=\frac1n\sum_{i=0}^{n-1}\left(\frac{i}{n}\right)^2,\qquad R_n=\frac1n\sum_{i=1}^{n}\left(\frac{i}{n}\right)^2.\]`
- **Embedded exercise P-02:** Four left-endpoint rectangles:
  `\[L_4=\frac14\left(0^2+\left(\frac14\right)^2+\left(\frac12\right)^2+\left(\frac34\right)^2\right)=\boxed{\frac7{32}=0.21875}.\]`
  Four right-endpoint rectangles:
  `\[R_4=\boxed{\frac{15}{32}=0.46875}.\]`
- **Validation:** For increasing `\(x^2\)` on `[0,1]`, the left sum underestimates and the right sum overestimates the exact area.

### Slide 08 — From Rectangles to Integral Calculus

- **Time:** 3 minutes. **Source:** Printed p. 2; exact area given as an explicitly labeled preview of later methods.
- **On screen:**
  - **Integral Calculus**
  - `\[A=\lim_{n\to\infty}L_n=\lim_{n\to\infty}R_n\]`
  - **For this region:** `\(A=\dfrac13\)`.
  - *Finer partitions produce increasingly accurate area approximations.*
- **Visual:** The left and right estimates approaching `\(1/3\)` from below and above.
- **Teaching guidance:** Do not derive integration rules. If shown, `\(\int_0^1x^2\,dx=\frac13\)` must be clearly introduced as a preview, not a procedure students are expected to apply now.

### Slide 09 — The Tangent Problem

- **Time:** 3 minutes. **Source:** Printed pp. 2–3.
- **On screen:**
  - **Tangent Line**
  - *What is the direction of a curve at a single point?*
  - `\(y=f(x),\quad P=(a,f(a))\)`
- **Visual:** Smooth curve with marked point P; reveal a tangent line after posing the question.
- **Teaching guidance:** A tangent need not intersect a general curve only once. Its relevant feature is local direction.

### Slide 10 — Slope of a Secant Line

- **Time:** 3 minutes. **Source:** Printed p. 3.
- **On screen:**
  - **Slope** and **Secant Line**
  - `\[m_{PQ}=\frac{f(x)-f(a)}{x-a},\qquad x\ne a\]`
  - **Question:** Why does this calculation require two distinct points?
- **Visual:** `\(P=(a,f(a))\)` and `\(Q=(x,f(x))\)`, with visibly labeled horizontal change `\(\Delta x=x-a\)` and vertical change `\(\Delta y=f(x)-f(a)\)`; blue secant.

### Slide 11 — Move Q Toward P

- **Time:** 3 minutes. **Source:** Printed p. 3.
- **On screen:**
  - `\(Q\longrightarrow P\)`
  - `\(m_{PQ}\longrightarrow m_{\text{tangent}}\)`
  - **Secant Line → Tangent Line**
- **Visual / interaction:** Curve `\(y=x^2\)`, fixed `\(P=(1,1)\)`, movable `\(Q=(1+h,(1+h)^2)\)` and both secant/tangent lines. A slider adjusts `\(h\)` and updates the slope.
- **Mathematics:** `\(m(h)=2+h\)` for `\(h\ne0\)`; the limiting slope is `\(2\)`.
- **Validation:** When `\(h=0\)`, show the **limiting tangent** rather than calculating a secant through identical points or dividing by zero.

### Slide 12 — Find the Tangent Slope

- **Time:** 5 minutes. **Source:** Stewart's tangent construction; the specific algebraic example is an **original illustration**.
- **On screen:**
  - **Worked Example: `\(f(x)=x^2\)` at `\(x=1\)`**
  - `\[m(h)=\frac{(1+h)^2-1}{h},\qquad h\ne0\]`
  - `\[=\frac{2h+h^2}{h}=2+h\]`
  - `\[m=\lim_{h\to0}(2+h)=\boxed{2}\]`
- **Visual:** Algebraic terms highlighted as they simplify; graph with `\(P=(1,1)\)` and tangent equation `\(y=2x-1\)`.
- **Interaction:** Reveal each calculation step; keep the full correct derivation available in the final state.
- **Embedded exercise P-03:** Determine the tangent slope at `\(x=1\)`. Answer: `\(2\)`.
- **Teaching guidance:** A slope is not automatically a velocity: the physical interpretation depends on what the horizontal and vertical axes measure.

### Slide 13 — Differential Calculus: Instantaneous Change

- **Time:** 3 minutes. **Source:** Printed p. 3.
- **On screen:**
  - **Differential Calculus**
  - `\[m=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}\]`
  - *A tangent describes the local rate at which a quantity changes.*
  - **Question to consider:** If this is a position–time graph, what does its slope measure?
- **Visual:** Reuse the tangent geometry and transition toward a separate position–time interpretation; relabel axes and preserve meaningful units.
- **Break:** Six minutes after this slide. Do not add a separate numbered slide.

### Slide 14 — Velocity: Position and Time

- **Time:** 3 minutes. **Source:** Printed p. 3.
- **On screen:**
  - **Velocity**
  - **Average Velocity:**
    `\[\overline v=\frac{\Delta s}{\Delta t}\]`
  - `\[\Delta s=s(t_2)-s(t_1),\qquad \Delta t=t_2-t_1\]`
- **Visual:** Car traveling along a straight line, clearly labeled initial/final positions, and a position–time graph. Use textbook units `\(t\)` in seconds and `\(s\)` in feet for the data that follows.
- **Scientific distinction:** Velocity is signed or directional; speed is its magnitude. In the selected monotonically increasing, one-dimensional displacement data, distance traveled and positive displacement coincide.

### Slide 15 — What Can Measurements Tell Us?

- **Time:** 4 minutes. **Source:** Printed pp. 3–4, measured values from Stewart.
- **On screen:**
  - **Position Measurements**

    | Time `\(t\)` (s) | 0 | 1 | 2 | 3 | 4 | 5 |
    |---|---:|---:|---:|---:|---:|---:|
    | Position `\(s\)` (ft) | 0 | 2 | 9 | 24 | 42 | 71 |

  - `\[\overline v_{[2,4]}=\frac{42-9}{4-2}=\boxed{16.5\ \mathrm{ft/s}}\]`
  - `\[\overline v_{[2,3]}=\frac{24-9}{3-2}=\boxed{15\ \mathrm{ft/s}}\]`
  - **Question:** Why do these two intervals have different average velocities although both begin at 2 seconds?
- **Visual:** Measured data plotted against time; highlight `[2,4]` and `[2,3]` with different secant lines.
- **Embedded exercise P-04:** Compute the `[2,4]` average velocity: `\(16.5\ \mathrm{ft/s}\)`.

### Slide 16 — Shorter Intervals, Better Estimates

- **Time:** 4 minutes. **Source:** Printed p. 4.
- **On screen:**

  | Time interval (s) | [2,3] | [2,2.5] | [2,2.4] | [2,2.3] | [2,2.2] | [2,2.1] |
  |---|---:|---:|---:|---:|---:|---:|
  | Average velocity (ft/s) | 15.0 | 13.6 | 12.4 | 11.5 | 10.8 | 10.2 |

  - *As the interval shrinks, the values appear to approach approximately `\(10\ \mathrm{ft/s}\)`.*
- **Visual / interaction:** Selecting a time interval highlights the corresponding secant and average velocity. Use the provided data points, not an invented underlying motion law.
- **Scientific caveat:** These are numerical **estimates** of instantaneous velocity. Do not claim the data prove an exact value of `\(10\ \mathrm{ft/s}\)`.

### Slide 17 — Instantaneous Velocity Is a Limit

- **Time:** 4 minutes. **Source:** Printed p. 4; analytic example is an **original illustration**.
- **On screen:**
  - **Instantaneous Velocity**
  - `\[v(t_0)=\lim_{h\to0}\frac{s(t_0+h)-s(t_0)}{h}\]`
  - **New, fully specified motion model:** `\(s(t)=kt^2\)` where `\(k=1\ \mathrm{m/s^2}\)`.
  - At `\(t_0=2\ \mathrm{s}\)`,
    `\[\overline v=k(2t_0+h)\quad\longrightarrow\quad v(t_0)=2kt_0=\boxed{4\ \mathrm{m/s}}.\]`
- **Derivation to reveal:**
  `\[\frac{k[(t_0+h)^2-t_0^2]}{h}=k(2t_0+h),\qquad h\ne0.\]`
- **Visual / interaction:** Position–time curve and a time-interval slider with secant and limiting tangent. At `\(t_0=2\ \mathrm{s}\)`, show the final tangent slope.
- **Embedded exercise P-05:** Find instantaneous velocity at 2 seconds. Answer: `\(4\ \mathrm{m/s}\)`.
- **Validation:** `\(h\)` has units of seconds and `\(k\)` has units of `\(\mathrm{m/s^2}\)`; the velocity unit is `\(\mathrm{m/s}\)`, **not** `\(\mathrm{m/s^2}\)`.
- **Preview note:** `\(v(t)=ds/dt\)` may be shown as notation that will be developed formally in Chapter 2.

### Slide 18 — Zeno's Paradox: Achilles and the Tortoise

- **Time:** 4 minutes. **Source:** Printed p. 5.
- **On screen:**
  - **The Limit of a Sequence**
  - *At every intermediate stage of the argument, the tortoise is a little farther ahead. Does that mean Achilles can never catch up?*
  - `\[a_n\longrightarrow p,\qquad t_n\longrightarrow p\]`
  - *Two sequences of positions can approach the same meeting point.*
- **Visual:** Two moving markers and a sequence of increasingly close intermediate positions on a number line.
- **Teaching guidance:** Use the paradox to motivate limits, not as a proof of the laws of motion.

### Slide 19 — Sequences Can Approach a Number

- **Time:** 4 minutes. **Source:** Printed pp. 5–6.
- **On screen:**
  - **Sequence**
  - `\[a_n=\frac1n\]`
  - `\[1,\quad\frac12,\quad\frac13,\quad\frac14,\quad\ldots\]`
  - `\[\boxed{\lim_{n\to\infty}\frac1n=0}\]`
  - **Another example:** `\(3.1,\ 3.14,\ 3.141,\ 3.1415,\ldots\)` approaching `\(\pi\)`.
- **Visual / interaction:** Discrete point plot of `\((n,1/n)\)` and reference line `\(y=0\)`; integer slider `\(n=1,\ldots,100\)` with current value.
- **Embedded question P-06:** Is `\(1/n\)` ever zero for a finite positive integer `\(n\)`? **No.** Its limit is nevertheless zero.

### Slide 20 — Zeno's Wall: An Infinite Walk?

- **Time:** 4 minutes. **Source:** Printed p. 6.
- **On screen:**
  - **The Sum of a Series**
  - *Walk halfway to the wall, then halfway through the distance that remains, and continue.*
  - `\[\frac12+\frac14+\frac18+\frac1{16}+\cdots\]`
  - **Question:** Can infinitely many steps amount to one finite distance?
- **Visual:** A unit-length path progressively filled by half, quarter, eighth, and sixteenth segments. The remaining gap stays visible.

### Slide 21 — Partial Sums: Watch the Pattern

- **Time:** 4 minutes. **Source:** Printed p. 7.
- **On screen:**
  - **Partial Sum**
  - `\[s_n=\sum_{k=1}^{n}\frac1{2^k}\]`
  - `\[s_1=\frac12,\quad s_2=\frac34,\quad s_3=\frac78,\quad s_4=\frac{15}{16}\]`
  - `\[\boxed{s_n=1-\frac1{2^n}}\]`
- **Visual / interaction:** Slider `\(n=1,\ldots,20\)`, with both the accumulated portion `\(s_n\)` and the remaining gap `\(2^{-n}\)` drawn as exact proportions.
- **Optional step-by-step derivation:** Subtract the original geometric sum from twice that sum to show `\(s_n=1-2^{-n}\)`.
- **Embedded exercise P-07:** Find the first four terms' sum: `\(15/16=0.9375\)`. Remaining distance: `\(1/16\)`.

### Slide 22 — Infinite Terms, Finite Sum

- **Time:** 4 minutes. **Source:** Printed pp. 7–8.
- **On screen:**
  - **Convergence**
  - `\[\lim_{n\to\infty}s_n=\lim_{n\to\infty}\left(1-2^{-n}\right)=1\]`
  - `\[\boxed{\frac12+\frac14+\frac18+\cdots=1}\]`
  - *Infinitely many terms can define a finite sum.*
- **Visual:** The colored path approaches its full unit length; the displayed remaining gap decreases toward zero.
- **Concept check:** Is `\(s_4\)` equal to `\(1\)`? **No: `\(s_4=15/16\)`.** Only the limit of the partial sums is 1.

### Slide 23 — One Idea Behind Four Problems

- **Time:** 3 minutes. **Source:** Printed p. 8.
- **On screen:**
  - **LIMIT: The Unifying Idea**
  - **Area:** Refine polygons or rectangles.
  - **Tangent:** Move secant points closer together.
  - **Velocity:** Measure over shorter time intervals.
  - **Series:** Add more partial-sum terms.
  - **Conclusion:** *Increasingly accurate approximations can approach a well-defined limiting value.*
- **Visual:** Four miniature scientific diagrams connected to a single limit symbol. Keep the slide mathematical rather than administrative.

### Slide 24 — Calculus Meets Machine Learning

- **Time:** 3 minutes. **Source:** **Original modern ML extension**, not content in Stewart's printed pp. 1–8.
- **On screen:**
  - **Mathematical Model**
  - `\[\widehat y=wx\]`
  - **Loss Function**
  - For one observation with `\(x=1\)` and `\(y=3\)`,
    `\[L(w)=(w-3)^2\]`
  - **Question:** Which value of `\(w\)` makes the prediction error smallest?
- **Visual:** A data-space drawing with observation `(1,3)` alongside a *separate*, clearly labeled parameter-space plot of `\(L(w)\)` versus `\(w\)`. Mark the minimum at `\(w=3\)`.
- **Teaching guidance:** This is a one-parameter learning illustration, not a statement that all Machine Learning methods use gradient optimization.

### Slide 25 — From Slope to Improvement

- **Time:** 2 minutes. **Source:** **Original modern ML extension**, not in the Stewart Preview.
- **On screen:**
  - **Gradient Descent**
  - `\[L(w)=(w-3)^2,\qquad L'(w)=2(w-3)\]`
  - `\[w_{\mathrm{new}}=w-\eta L'(w)\]`
  - With `\(w_0=0\)` and `\(\eta=0.2\)`,
    `\[w_1=1.2,\qquad L(w_0)=9\ \longrightarrow\ L(w_1)=3.24.\]`
  - **Final message:** *Calculus helps us understand change — and use it to improve a model.*
- **Visual / interaction:** Loss parabola, the points `\(w=0\)` and `\(w=1.2\)`, and a clear downhill update arrow. Reuse an existing **Next step** control only if it already works well; do not build a new optimization platform.
- **Calculation revealed stepwise:**
  `\[L'(0)=-6,\qquad w_1=0-0.2(-6)=1.2,\qquad L(1.2)=(-1.8)^2=3.24.\]`
- **Validation:** Differentiate with respect to the **parameter `\(w\)`**, not time; in one dimension the gradient reduces to the ordinary derivative. General derivative rules will be studied later.
- **Embedded exercise P-08:** Absolute loss decrease: `\(9-3.24=\boxed{5.76}\)`.

---

## 3. Embedded Worked-Problem Register

These examples belong to the 25 presentation slides themselves; they are **not** a separate Study Mode or exercise application.

| ID | Slide | Prompt | Correct result |
|---|---:|---|---|
| P-01 | 06 | Find the area of the regular 12-gon inscribed in a unit circle. | `\(A_{12}=\frac{12}{2}\sin(\pi/6)=\boxed{3}\)`; the circle area is `\(\pi\)`. |
| P-02 | 07 | Approximate the area under `\(y=x^2\)` on `[0,1]` using four left-endpoint rectangles. | `\(L_4=\boxed{7/32=0.21875}\)`. |
| P-03 | 12 | Find the slope of the tangent to `\(y=x^2\)` at `\(x=1\)`. | `\(\lim_{h\to0}\frac{(1+h)^2-1}{h}=\boxed{2}\)`. |
| P-04 | 15 | Find the average velocity for the book's `[2,4]` second interval. | `\(\frac{42-9}{4-2}=\boxed{16.5\ \mathrm{ft/s}}\)`. |
| P-05 | 17 | For `\(s(t)=kt^2\)` with `\(k=1\ \mathrm{m/s^2}\)`, find velocity at `\(2\ \mathrm{s}\)`. | `\(\boxed{4\ \mathrm{m/s}}\)`. |
| P-06 | 19 | Does `\(1/n\)` ever equal zero for finite positive integer `\(n\)`? | No; nevertheless `\(\lim_{n\to\infty}1/n=0\)`. |
| P-07 | 21 | Find `\(\frac12+\frac14+\frac18+\frac1{16}\)`. | `\(\boxed{15/16=0.9375}\)`; remaining `\(1/16\)`. |
| P-08 | 25 | How much does the loss decrease after one update from `\(w_0=0\)` with `\(\eta=0.2\)`? | `\(9\to3.24\)`; decrease `\(\boxed{5.76}\)`. |

## 4. Interactive Visualization Specifications

### SIM-A — Inscribed Polygon in a Circle (Slides 05–06)

- Input: `\(n\in\{3,4,6,8,12,24,48,96\}\)`; fixed radius `\(r=1\)`.
- Compute `\(A_n=(n/2)\sin(2\pi/n)\)` using numeric functions, not a prerecorded display.
- Draw a regular inscribed polygon using its analytic vertices.
- Numerical assertions: `\(A_{12}=3\)`, `\(A_{48}\approx3.13263\)`; `\(A_n<\pi\)` for every listed finite `\(n\)`.
- User-visible labels: **Number of sides**, **Polygon area**, **Circle area**.

### SIM-B — Area by Rectangles (Slides 07–08)

- Inputs: integer `\(n=1\ldots100\)` and endpoint method **Left** or **Right**.
- Curve: `\(f(x)=x^2\)` on `\([0,1]\)`; `\(\Delta x=1/n\)`.
- Use the correct endpoint index and draw rectangles with their actual computed heights.
- Required numerical samples: `\(L_4=0.21875\)`, `\(R_4=0.46875\)`, `\(L_8=0.2734375\)`, `\(R_8=0.3984375\)`.
- Optional reference area: `\(1/3\)`; avoid implying this value was derived using integration techniques already taught.

### SIM-C — Secant to Tangent (Slides 10–13)

- Graph `\(f(x)=x^2\)`; fix `\(P=(1,1)\)`; set `\(Q=(1+h,(1+h)^2)\)`.
- Secant slope `\(2+h\)` for `\(h\ne0\)`; limiting tangent slope 2 and equation `\(y=2x-1\)`.
- Slider changes `\(h\)`. At zero, render the tangent *as a limit*, never evaluate a zero denominator.
- Blue = secant; teal = tangent. Label `\(\Delta x\)` and `\(\Delta y\)` unambiguously.

### SIM-D — Position vs. Time (Slides 14–17)

- **Textbook data mode**, slides 15–16: time in seconds, position in feet, interval selection. Do not infer or invent an exact analytic motion law from discrete measurements.
- **Original analytic mode**, slide 17: `\(s(t)=kt^2\)`, `\(k=1\ \mathrm{m/s^2}\)`; `\(v_{\rm avg}(t,h)=k(2t+h)\)`, `\(v(t)=2kt\)`.
- Keep the original example's metric units separate from the textbook's foot-based table.
- A slider updates the moving point, interval and secant/tangent display in the analytic example.

### SIM-E — Sequence and Series (Slides 18–22)

- Sequence: `\(a_n=1/n\)`, integer slider `\(n=1\ldots100\)`; reference limit 0.
- Series: `\(s_n=1-2^{-n}\)`, remaining gap `\(2^{-n}\)`, integer slider `\(n=1\ldots20\)`.
- State explicitly: `\(s_n<1\)` for every finite `\(n\)` even though `\(\lim_{n\to\infty}s_n=1\)`.

### SIM-F — One-Parameter Loss Function (Slides 24–25)

- Parameter `\(w\)`, loss `\(L(w)=(w-3)^2\)`, derivative `\(L'(w)=2(w-3)\)`.
- Default `\(w_0=0\)`, learning rate `\(\eta=0.2\)`; after one update `\(w_1=1.2\)`.
- Display loss `\(9\to3.24\)` and the parameter position on the parabola.
- Reuse the existing loss-curve component if mathematically and visually correct.

### Projection and Accessibility Requirements

- Visible plot axes, numerical scales, labels, and physical units at 1366×768 and 1920×1080.
- Exactly one complete slide fits the viewport without normal page scrolling.
- Slider and button keyboard interactions do not accidentally navigate slides.
- Slides have meaningful static states when animations are paused.
- Global navigation: Left/Right when appropriate, Home/End, F for fullscreen, Escape to leave fullscreen.

## 5. Essential English Scientific Vocabulary

Use these words naturally in student-facing headings, diagrams, and explanations. No glossary sidebar and no translation layer.

| Term | Concise meaning in English |
|---|---|
| Calculus | Mathematics of change, approximation, and accumulation |
| Area Problem | Determining the area of a region, including one bounded by curves |
| Method of Exhaustion | Approximating an area using increasingly refined geometric shapes |
| Approximation | A value close to an exact quantity |
| Integral Calculus | The branch of calculus concerned with accumulation and integrals |
| Differential Calculus | The branch of calculus concerned with instantaneous rates of change |
| Tangent Line | A line that represents a curve's local direction at a point |
| Secant Line | A line through two distinct points on a curve |
| Slope | Ratio of vertical change to horizontal change for a line |
| Average Velocity | Displacement divided by elapsed time |
| Instantaneous Velocity | Velocity at an individual instant, defined by a limit |
| Rate of Change | How one quantity varies with another |
| Limit | The value approached by a function or sequence in a limiting process |
| Sequence | An ordered list of terms, usually indexed by integers |
| Series | A sum of terms from a sequence |
| Partial Sum | Sum of the first finitely many terms of a series |
| Convergence | Approaching a finite limit |
| Mathematical Model | A mathematical description of a system or relationship |
| Loss Function | A numerical measure of prediction error |
| Gradient Descent | An optimization method that adjusts parameters using derivatives |

## 6. Mathematical Verification Reference

The figures below are acceptance-test values for the developer. They are not audience-facing metadata.

1. **Circle polygon:** `\(A_n=(nr^2/2)\sin(2\pi/n)\)`, `\(n\ge3\)`; `\(A_{12}=3\)`, `\(A_{48}\approx3.13263\)` for `\(r=1\)`.
2. **Rectangle sums for `\(x^2\)`:** `\(L_n=\frac{(n-1)(2n-1)}{6n^2}\)` and `\(R_n=\frac{(n+1)(2n+1)}{6n^2}\)`; both tend to `\(1/3\)`.
3. **Secant:** `\(m(h)=2+h\)` for `\(h\ne0\)`; the tangent slope at `\(x=1\)` is 2.
4. **Textbook velocity data:** `[2,4]` gives 16.5 ft/s; `[2,3]` gives 15 ft/s; `[2,2.1]` gives 10.2 ft/s.
5. **Original analytic motion:** `\(s(t)=kt^2\)` for `\(k=1\ \mathrm{m/s^2}\)` yields `\(v(2\ \mathrm{s})=4\ \mathrm{m/s}\)`.
6. **Geometric partial sum:** `\(s_n=1-2^{-n}\)`; `\(s_4=15/16\)`, not 1.
7. **ML extension:** `\(L'(0)=-6\)`, `\(w_1=1.2\)`, `\(L(w_0)=9\)`, `\(L(w_1)=3.24\)`.
8. **Physics terminology:** speed is the magnitude of velocity; velocity has direction/sign. The sampled dataset is treated as one-dimensional, forward motion.

## 7. Implementation Acceptance Checklist

- [ ] The existing React application and Chapter 1 presentation remain unchanged in behavior.
- [ ] **A Preview of Calculus** contains exactly **25** slides, in the order specified above.
- [ ] The six-minute break is scheduled after slide 13 and does not create slide 26.
- [ ] Every slide uses **English-only audience-facing content**: titles, explanations, graph labels, questions, buttons, and controls.
- [ ] All displayed mathematics uses proper KaTeX/math typography, including large fractions and correctly formatted physical units.
- [ ] The eight embedded worked problems have the correct steps and answers.
- [ ] The six visualization specifications are implemented or existing suitable components are reused.
- [ ] No administrative/project/teaching metadata is displayed to the audience.
- [ ] The app keeps its clean white academic design and fits common projector resolutions.
- [ ] Previous/Next/fullscreen controls work without interfering with interactive sliders.
- [ ] Typecheck and production build are executed; genuine failures are reported.
- [ ] Browser visual inspection is performed if a browser tool is available; untested items are not reported as passing.

## 8. Division of Responsibilities and Reporting

**Content author (outside Codex):** Owns and edits this Markdown specification, mathematical exposition, example selection, worked solutions, terminology, and scientific accuracy.

**Codex:** Implements the already-approved content in the existing app, reuses components, performs technical validation, and fixes implementation defects. **Do not rewrite or modify this Markdown file.** Do not migrate the application, add a backend, introduce an LMS, or undertake speculative architecture changes.

**Final Codex reporting rule:** Report the implementation audit **directly in the Codex CLI response**. **Do not create audit Markdown files, progress-report files, or other reporting artifacts.** Keep the response concise:

1. Scope completed; slide count; Chapter 1 preserved: `PASS / FAIL / NOT TESTED`.
2. Main files changed (short list) and reason.
3. Mathematical and interactive checks: `PASS / FAIL / NOT TESTED`, with a few representative numerical results.
4. Build/typecheck and browser tests: actual commands and outcomes; distinguish untested checks from passing checks.
5. Remaining P0/P1 issues, if any; final verdict: `READY / READY WITH MINOR LIMITATIONS / NOT READY`.

Do not create or update any `.md` file as a status report. Do not fabricate tests, browser inspection, or successful outcomes.

**Out of scope:** Editing the other chapters, changing the overall book project structure, or independently authoring new lesson content.
