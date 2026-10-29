export type ApplicationSlide={id:number;title:string;fields:{kind:string;text:string}[]};
// Authored mathematical content from Markdowns/ch3/theory.md. Field labels are internal.
export const applicationSlides:ApplicationSlide[]=[
 {
  "id": 1,
  "title": "Derivatives Help Us Make Decisions",
  "fields": [
   {
    "kind": "Student-facing text",
    "text": "\"A derivative does more than measure a slope. Its sign and size help us locate peaks, explain motion, optimize designs, and approximate solutions.\""
   },
   {
    "kind": "Display",
    "text": "`Increasing? Decreasing? Best possible value? Root of an equation?`"
   }
  ]
 },
 {
  "id": 2,
  "title": "Absolute and Local Extreme Values",
  "fields": [
   {
    "kind": "Definition",
    "text": "\"An **absolute maximum** is the greatest function value on its entire domain; a **local maximum** is at least as great as sufficiently nearby domain values.\" Analogous minimum definitions."
   },
   {
    "kind": "Formula",
    "text": "$$f(c)\\ge f(x)\\quad \\text{for all }x\\text{ in the domain (absolute maximum).}$$"
   },
   {
    "kind": "Note",
    "text": "local extrema can occur at endpoints under a relative-to-domain convention, but Fermat's interior differentiable-point statement must not be misapplied to endpoint extrema."
   }
  ]
 },
 {
  "id": 3,
  "title": "The Extreme Value Theorem",
  "fields": [
   {
    "kind": "Statement",
    "text": "\"If `f` is continuous on a closed, bounded interval `[a,b]`, then `f` attains both an absolute maximum and an absolute minimum there.\""
   },
   {
    "kind": "Display",
    "text": "$$f\\text{ continuous on }[a,b]\\ \\Longrightarrow\\ \\exists\\,c,d\\in[a,b]:\\quad f(c)\\le f(x)\\le f(d).$$"
   },
   {
    "kind": "Worked contrast",
    "text": "`f(x)=x` on `[0,1]` attains min `0` and max `1`. On `(0,1)`, it has neither absolute maximum nor minimum."
   },
   {
    "kind": "Caution",
    "text": "EVT ensures existence, not the coordinates or derivative conditions."
   }
  ]
 },
 {
  "id": 4,
  "title": "Fermat's Theorem: A Necessary Condition",
  "fields": [
   {
    "kind": "Statement",
    "text": "\"If `f` has a local extreme at an **interior** point `c` and `f'(c)` exists, then `f'(c)=0`.\""
   },
   {
    "kind": "Formula",
    "text": "$$\\text{interior differentiable local extremum}\\ \\Longrightarrow\\ f'(c)=0.$$"
   },
   {
    "kind": "Mini proof idea",
    "text": "at a maximum, the nearby difference quotient is nonpositive for `h>0`, nonnegative for `h<0`; equal one-sided limits, when they exist, must be `0`."
   },
   {
    "kind": "Check",
    "text": "converse is false: `f(x)=x^3` has `f'(0)=0` but no extremum."
   }
  ]
 },
 {
  "id": 5,
  "title": "Critical Numbers: The Complete Candidate List",
  "fields": [
   {
    "kind": "Definition",
    "text": "\"A critical number `c` is a number **in the domain** of `f` for which `f'(c)=0` or `f'(c)` does not exist.\""
   },
   {
    "kind": "Worked examples",
    "text": "for `f(x)=x^3-3x`, `f'(x)=3x^2-3=0` gives critical numbers `-1,1`. For `g(x)=|x|`, `0` is critical because `g` is defined there but `g'(0)` does not exist."
   },
   {
    "kind": "Counterexample",
    "text": "`x=0` is **not** a critical number of `1/x`, since `f(0)` is undefined."
   }
  ]
 },
 {
  "id": 6,
  "title": "Closed Interval Method: A Complete Example",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"Find the absolute extrema of `f(x)=x^3-3x` on `[-2,3]`.\""
   },
   {
    "kind": "Reveal",
    "text": "$$f'(x)=3x^2-3=3(x-1)(x+1),\\qquad x=-1,1.$$ $$\\begin{array}{c|rrrr}x&-2&-1&1&3\\\\\\hline f(x)&-2&2&-2&18\\end{array}$$"
   },
   {
    "kind": "Conclusion",
    "text": "absolute maximum value `18` at `x=3`; absolute minimum value `-2` attained at **both** `x=-2` and `x=1`."
   },
   {
    "kind": "Method",
    "text": "evaluate endpoints and all interior critical numbers, then compare *actual function values*."
   }
  ]
 },
 {
  "id": 7,
  "title": "What the First Derivative Cannot Tell Us Alone",
  "fields": [
   {
    "kind": "Message",
    "text": "\"A horizontal tangent identifies a candidate, not necessarily a maximum or minimum.\""
   },
   {
    "kind": "Compare",
    "text": "`x^2` at `0` (minimum), `-x^2` at `0` (maximum), `x^3` at `0` (neither); all have zero derivative at `0`."
   },
   {
    "kind": "Concept check",
    "text": "\"Do we need to examine interval endpoints for absolute extrema?\" Answer revealed: \"Yes, even when the derivative is not zero there.\""
   }
  ]
 },
 {
  "id": 8,
  "title": "Rolle's Theorem",
  "fields": [
   {
    "kind": "Statement",
    "text": "\"If `f` is continuous on `[a,b]`, differentiable on `(a,b)`, and `f(a)=f(b)`, then there is a `c` in `(a,b)` such that `f'(c)=0`.\""
   },
   {
    "kind": "Worked case",
    "text": "`f(x)=x^2-1`, `[a,b]=[-1,1]`. Since `f(-1)=f(1)=0` and `f'(x)=2x`, `c=0` works."
   },
   {
    "kind": "Check",
    "text": "conditions are hypotheses, not afterthoughts."
   }
  ]
 },
 {
  "id": 9,
  "title": "Why Rolle's Hypotheses Matter",
  "fields": [
   {
    "kind": "Contrast",
    "text": "`f(x)=|x|` on `[-1,1]` is continuous, has equal endpoint values, but is **not differentiable at zero**; no point inside has derivative zero."
   },
   {
    "kind": "Another contrast",
    "text": "an abrupt jump violates continuity and may also invalidate the conclusion."
   },
   {
    "kind": "On-screen question",
    "text": "\"Which hypothesis fails in this example?\" Reveal: \"Differentiability on the open interval.\""
   }
  ]
 },
 {
  "id": 10,
  "title": "The Mean Value Theorem (MVT)",
  "fields": [
   {
    "kind": "Statement",
    "text": "\"If `f` is continuous on `[a,b]` and differentiable on `(a,b)`, there exists `c\\in(a,b)` whose tangent slope equals the endpoint secant slope.\""
   },
   {
    "kind": "Formula",
    "text": "$$\\boxed{f'(c)=\\frac{f(b)-f(a)}{b-a}},\\qquad a<c<b.$$"
   }
  ]
 },
 {
  "id": 11,
  "title": "Find the MVT Point Exactly",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"Find the point guaranteed by MVT for `f(x)=x^2` on `[1,3]`.\""
   },
   {
    "kind": "Reveal",
    "text": "$$\\frac{f(3)-f(1)}{3-1}=\\frac{9-1}{2}=4,\\qquad f'(x)=2x.$$ $$2c=4\\quad\\Longrightarrow\\quad c=2\\in(1,3).$$"
   },
   {
    "kind": "Check",
    "text": "`c=2` lies strictly inside the interval."
   }
  ]
 },
 {
  "id": 12,
  "title": "MVT as a Statement About Motion",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"A vehicle changes position from `s(0)=0 m` to `s(4)=24 m` over four seconds. What is guaranteed if its position is continuous and differentiable?\""
   },
   {
    "kind": "Reveal",
    "text": "$$v_{\\mathrm{avg}}=\\frac{24-0}{4-0}=6\\ \\mathrm{m/s}.$$ \"At least one instant `c` between 0 and 4 seconds has instantaneous **signed velocity** `v(c)=6 m/s`.\""
   },
   {
    "kind": "Distinction",
    "text": "theorem ensures an instantaneous *velocity* equal to the average velocity; it does not say the vehicle maintained that speed throughout."
   }
  ]
 },
 {
  "id": 13,
  "title": "MVT Consequences: Constant and Equal Derivatives",
  "fields": [
   {
    "kind": "Statement",
    "text": "\"On an interval, if `f'(x)=0` everywhere, `f` is constant. If `f'(x)=g'(x)` everywhere, `f-g` is constant.\""
   },
   {
    "kind": "Proof idea",
    "text": "apply MVT to any two points `a<b`: `f(b)-f(a)=f'(c)(b-a)=0`."
   },
   {
    "kind": "Worked example",
    "text": "`f'(x)=2x` and `g'(x)=2x` give `f(x)-g(x)=C` on a connected interval; e.g. `x²+7` and `x²-3` differ by 10."
   },
   {
    "kind": "Note",
    "text": "an interval/domain-connectivity assumption is essential when claiming one global constant."
   }
  ]
 },
 {
  "id": 14,
  "title": "Increasing and Decreasing from f'(x)",
  "fields": [
   {
    "kind": "Criterion",
    "text": "\"Where `f'(x)>0` throughout an interval, `f` increases; where `f'(x)<0`, `f` decreases.\""
   },
   {
    "kind": "Display",
    "text": "$$f'(x)>0\\Rightarrow f\\text{ increasing},\\qquad f'(x)<0\\Rightarrow f\\text{ decreasing}.$$"
   },
   {
    "kind": "Logic",
    "text": "these are interval conclusions justified by MVT; a single positive value of `f'` does not certify an entire interval."
   }
  ]
 },
 {
  "id": 15,
  "title": "Build a First-Derivative Sign Chart",
  "fields": [
   {
    "kind": "Example",
    "text": "`f(x)=x³-3x`."
   },
   {
    "kind": "Reveal",
    "text": "$$f'(x)=3(x-1)(x+1).$$ $$\\begin{array}{c|ccc}\\text{Interval}&(-\\infty,-1)&(-1,1)&(1,\\infty)\\\\\\hline\\operatorname{sign}(f')&+&-&+\\\\f&\\nearrow&\\searrow&\\nearrow\\end{array}$$"
   }
  ]
 },
 {
  "id": 16,
  "title": "First Derivative Test",
  "fields": [
   {
    "kind": "Rule",
    "text": "\"At a critical point, a derivative sign change `+` to `−` gives a local maximum; `−` to `+` gives a local minimum. No sign change gives neither under the usual sign-test hypotheses.\""
   },
   {
    "kind": "Worked example",
    "text": "for `x³-3x`, `f(-1)=2` is a local maximum; `f(1)=-2` a local minimum."
   },
   {
    "kind": "Important",
    "text": "this local test does not by itself determine global extrema on an unbounded domain."
   }
  ]
 },
 {
  "id": 17,
  "title": "Concavity: How the Slope Changes",
  "fields": [
   {
    "kind": "On screen",
    "text": "\"A curve is **concave upward** where its slopes are increasing; **concave downward** where its slopes are decreasing.\""
   },
   {
    "kind": "Relation",
    "text": "$$f''(x)>0\\Rightarrow\\text{concave up},\\qquad f''(x)<0\\Rightarrow\\text{concave down}.$$"
   },
   {
    "kind": "Note",
    "text": "a graph can be decreasing and still concave upward (example `e^{-x}`), so do not conflate slope sign with concavity."
   }
  ]
 },
 {
  "id": 18,
  "title": "Inflection Point: A Genuine Concavity Change",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"Identify the inflection point of `f(x)=x³-3x`.\""
   },
   {
    "kind": "Reveal",
    "text": "$$f'(x)=3x^2-3,\\qquad f''(x)=6x.$$ \"For `x<0`, `f''<0` (concave down); for `x>0`, `f''>0` (concave up). The inflection point is `(0,0)`.\""
   },
   {
    "kind": "Caution",
    "text": "`f''(c)=0` alone is not sufficient: `x^4` has `f''(0)=0` but stays concave upward on both sides."
   }
  ]
 },
 {
  "id": 19,
  "title": "Second Derivative Test",
  "fields": [
   {
    "kind": "Rule",
    "text": "\"At an interior critical point `c` where `f'(c)=0`, `f''(c)>0` implies a local minimum; `f''(c)<0` implies a local maximum. If `f''(c)=0`, the test is inconclusive.\""
   },
   {
    "kind": "Examples",
    "text": "`x²` at 0: minimum; `-x²` at 0: maximum; `x⁴` at 0: `f''(0)=0` but minimum (use the first derivative test or direct comparison)."
   }
  ]
 },
 {
  "id": 20,
  "title": "Worked Shape Analysis: A Quartic",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"Analyze `f(x)=x^4-4x^2` for local extrema.\""
   },
   {
    "kind": "Reveal",
    "text": "$$f'(x)=4x(x^2-2),\\quad x\\in\\{-\\sqrt2,0,\\sqrt2\\}.$$ $$f''(x)=12x^2-8.$$ \"At `x=0`, `f''(0)=-8<0`: local maximum `f(0)=0`. At `x=\\pm\\sqrt2`, `f''=16>0`: local minima `f(\\pm\\sqrt2)=-4`.\""
   }
  ]
 },
 {
  "id": 21,
  "title": "Curvature and Inflection Points in the Quartic",
  "fields": [
   {
    "kind": "Continue",
    "text": "`f(x)=x⁴-4x²`."
   },
   {
    "kind": "Reveal",
    "text": "$$f''(x)=12x^2-8=0\\quad\\Longrightarrow\\quad x=\\pm\\sqrt{\\frac23}.$$ \"Concave up for `|x|>\\sqrt{2/3}`, concave down for `|x|<\\sqrt{2/3}`; both boundaries are inflection points.\""
   },
   {
    "kind": "Coordinates",
    "text": "$$\\left(\\pm\\sqrt{\\frac23},-\\frac{20}{9}\\right).$$"
   },
   {
    "kind": "Check",
    "text": "an inflection point need not be a local maximum or minimum."
   }
  ]
 },
 {
  "id": 22,
  "title": "Motion: When Is Speed Increasing?",
  "fields": [
   {
    "kind": "Student-facing",
    "text": "\"Velocity tells us direction; acceleration tells us how velocity changes. Speed increases when velocity and acceleration have the same nonzero sign.\""
   },
   {
    "kind": "Example",
    "text": "$$s(t)=t^3-3t^2\\ (\\mathrm m),\\quad v(t)=3t(t-2)\\ (\\mathrm{m/s}),\\quad a(t)=6t-6\\ (\\mathrm{m/s^2}),\\quad t>0.$$"
   },
   {
    "kind": "Interpretation",
    "text": "`0<t<1`: both negative, **speed increases**; `1<t<2`: velocity negative but acceleration positive, **speed decreases**; `t>2`: both positive, **speed increases**. At `t=2`, velocity is zero, so treat the turning point separately."
   }
  ]
 },
 {
  "id": 23,
  "title": "Limits at Infinity Describe End Behavior",
  "fields": [
   {
    "kind": "Definition",
    "text": "\"`lim_{x→∞}f(x)=L` means output approaches `L` as input becomes arbitrarily large.\""
   },
   {
    "kind": "Example",
    "text": "$$f(x)=\\frac{2x^2+1}{x^2+1}=2-\\frac{1}{x^2+1}\\quad\\Longrightarrow\\quad\\lim_{x\\to\\infty}f(x)=2.$$"
   }
  ]
 },
 {
  "id": 24,
  "title": "Horizontal Asymptotes: Two Directions",
  "fields": [
   {
    "kind": "Definition",
    "text": "\"`y=L` is a horizontal asymptote when at least one of `lim_{x→∞}f(x)` or `lim_{x→−∞}f(x)` equals the finite number `L`.\""
   },
   {
    "kind": "Worked example",
    "text": "$$f(x)=\\frac{x}{\\sqrt{x^2+1}},\\quad\\lim_{x\\to\\infty}f(x)=1,\\quad\\lim_{x\\to-\\infty}f(x)=-1.$$"
   }
  ]
 },
 {
  "id": 25,
  "title": "A Graph Can Cross Its Horizontal Asymptote",
  "fields": [
   {
    "kind": "Example",
    "text": "$$f(x)=\\frac{x^2+x}{x^2+1},\\qquad \\lim_{x\\to\\pm\\infty}f(x)=1,\\qquad f(1)=1.$$"
   },
   {
    "kind": "Message",
    "text": "\"A horizontal asymptote describes behavior far away; the curve is allowed to cross that line at finite x.\""
   },
   {
    "kind": "Check",
    "text": "denominator is always positive; the function is defined for every real x."
   }
  ]
 },
 {
  "id": 26,
  "title": "Vertical and Horizontal Asymptotes Are Different",
  "fields": [
   {
    "kind": "Example",
    "text": "$$g(x)=\\frac{x}{x-1}=1+\\frac{1}{x-1}.$$"
   },
   {
    "kind": "Reveal",
    "text": "$$\\lim_{x\\to1^-}g(x)=-\\infty,\\quad \\lim_{x\\to1^+}g(x)=+\\infty,\\quad \\lim_{x\\to\\pm\\infty}g(x)=1.$$"
   }
  ]
 },
 {
  "id": 27,
  "title": "Rational Functions: Compare Highest Powers",
  "fields": [
   {
    "kind": "Student-facing",
    "text": "\"For rational functions, divide numerator and denominator by the highest relevant power of x to determine finite end limits.\""
   },
   {
    "kind": "Three examples",
    "text": "$$\\lim_{x\\to\\infty}\\frac{3x^2-2}{x^2+4}=3,$$ $$\\lim_{x\\to\\infty}\\frac{2x+1}{x^2+1}=0,$$ $$\\lim_{x\\to\\infty}\\frac{x^2+1}{x+1}=+\\infty.$$"
   },
   {
    "kind": "Scope",
    "text": "this is an end-limit shortcut for polynomial ratios, not a general rule for every function."
   }
  ]
 },
 {
  "id": 28,
  "title": "Infinite Limits, Large Inputs, and Modeling",
  "fields": [
   {
    "kind": "Compare",
    "text": "$$\\lim_{x\\to 2^+}\\frac{1}{x-2}=+\\infty,\\qquad\\lim_{x\\to\\infty}\\frac{1}{x-2}=0.$$"
   },
   {
    "kind": "Student-facing",
    "text": "\"Approaching a finite input is not the same process as sending input to infinity.\""
   },
   {
    "kind": "Supplemental modeling note",
    "text": "a saturating model may have a horizontal asymptote representing a limiting response; asymptotic behavior alone is not evidence that the model describes every real system."
   }
  ]
 },
 {
  "id": 29,
  "title": "Curve Sketching: A Reliable Checklist",
  "fields": [
   {
    "kind": "Student-facing",
    "text": "\"A credible sketch comes from function properties, not artistic guesswork.\""
   },
   {
    "kind": "Show six short stages",
    "text": "domain; intercepts and symmetry; asymptotes/end behavior; first derivative/critical numbers; second derivative/inflection; combine on correctly labeled axes."
   }
  ]
 },
 {
  "id": 30,
  "title": "Sketching Step 1: Domain and Intercepts",
  "fields": [
   {
    "kind": "Model",
    "text": "$$f(x)=x^3-3x=x(x^2-3).$$"
   },
   {
    "kind": "Reveal",
    "text": "domain `\\mathbb R`; x-intercepts at `-\\sqrt3`, `0`, `\\sqrt3`; y-intercept `(0,0)`; odd symmetry `f(-x)=-f(x)`."
   }
  ]
 },
 {
  "id": 31,
  "title": "Sketching Step 2: Stationary Points and Monotonicity",
  "fields": [
   {
    "kind": "Continue",
    "text": "$$f'(x)=3(x^2-1),\\qquad x=\\pm 1.$$"
   },
   {
    "kind": "Reveal",
    "text": "increasing on `(-∞,-1)` and `(1,∞)`, decreasing on `(-1,1)`; local max `(-1,2)` and local min `(1,-2)`."
   }
  ]
 },
 {
  "id": 32,
  "title": "Sketching Step 3: Concavity and End Behavior",
  "fields": [
   {
    "kind": "Continue",
    "text": "$$f''(x)=6x.$$ \"Concave downward on `(-∞,0)`, concave upward on `(0,∞)`; inflection at `(0,0)`.\""
   },
   {
    "kind": "End behavior",
    "text": "$$\\lim_{x\\to\\infty}f(x)=+\\infty,\\qquad\\lim_{x\\to-\\infty}f(x)=-\\infty.$$"
   }
  ]
 },
 {
  "id": 33,
  "title": "Rational Function Sketching: A Different Challenge",
  "fields": [
   {
    "kind": "Model",
    "text": "$$g(x)=\\frac{x+1}{x-2}=1+\\frac{3}{x-2}.$$"
   },
   {
    "kind": "Reveals",
    "text": "domain `x\\ne2`; x-intercept `(-1,0)`; y-intercept `(0,-1/2)`; vertical asymptote `x=2`; horizontal asymptote `y=1`."
   },
   {
    "kind": "Derivative analysis",
    "text": "$$g'(x)=-\\frac{3}{(x-2)^2}<0\\quad(x\\ne2).$$"
   }
  ]
 },
 {
  "id": 34,
  "title": "Complete the Rational Sketch: Concavity",
  "fields": [
   {
    "kind": "Continue",
    "text": "$$g''(x)=\\frac{6}{(x-2)^3}.$$"
   },
   {
    "kind": "Conclusion",
    "text": "concave down on `(-∞,2)`, concave up on `(2,∞)`; **no inflection point at `x=2`**, because the function is not defined there. Neither branch has a local extremum."
   }
  ]
 },
 {
  "id": 35,
  "title": "Technology Can Suggest; Calculus Can Justify",
  "fields": [
   {
    "kind": "On screen",
    "text": "\"A graphing device samples and renders a function. Derivatives and limits explain why the shape occurs.\""
   },
   {
    "kind": "Worked comparison",
    "text": "`f(x)=x³-3x`: computed zeros of `f'` at `±1`; a graphing window is useful for inspecting the turning points but does not replace the analytic proof."
   }
  ]
 },
 {
  "id": 36,
  "title": "Choosing a Graphing Window",
  "fields": [
   {
    "kind": "Message",
    "text": "\"A poorly chosen viewing rectangle may hide a root, an extremum, or the end behavior.\""
   },
   {
    "kind": "Example",
    "text": "$$f(x)=(x-10)^2+1.$$ \"A window with `-2\\le x\\le2` cannot show the minimum at `(10,1)`.\""
   }
  ]
 },
 {
  "id": 37,
  "title": "Families of Curves: One Parameter, Different Shapes",
  "fields": [
   {
    "kind": "Model",
    "text": "$$f_c(x)=x^3-3cx,\\qquad f_c'(x)=3(x^2-c).$$"
   },
   {
    "kind": "Reveal",
    "text": "`c>0`: critical points `\\pm\\sqrt c`, one local max and one local min; `c=0`: stationary point at zero but no extremum; `c<0`: derivative strictly positive everywhere, so no turning points."
   }
  ]
 },
 {
  "id": 38,
  "title": "Numerical Graphing and Approximate Roots",
  "fields": [
   {
    "kind": "On screen",
    "text": "\"Some roots are not simple rational numbers. A numerical graph gives an initial estimate; a numerical method can improve it.\""
   },
   {
    "kind": "Example",
    "text": "$$\\cos x=x,\\qquad x\\approx0.739085.$$"
   },
   {
    "kind": "Caution",
    "text": "the decimal is approximate, not an exact symbolic expression. Preview the idea of Newton's Method, developed in §3.8."
   }
  ]
 },
 {
  "id": 39,
  "title": "Graphing Artifacts and Discontinuities",
  "fields": [
   {
    "kind": "Warning",
    "text": "\"Connecting sampled points across a discontinuity can suggest an entirely false line.\""
   },
   {
    "kind": "Example",
    "text": "$$f(x)=\\tan x,\\qquad x\\ne\\frac\\pi2+k\\pi.$$"
   },
   {
    "kind": "Takeaway",
    "text": "interpret graphs together with domains, limits, and analytic checks."
   }
  ]
 },
 {
  "id": 40,
  "title": "Optimization: Translate a Real Problem into a Function",
  "fields": [
   {
    "kind": "Workflow",
    "text": "\"Choose a variable → express the objective → use the constraint → establish the domain → differentiate → test candidates → interpret the answer.\""
   },
   {
    "kind": "On-screen contrast",
    "text": "`Objective: maximize area` versus `Constraint: limited material`."
   }
  ]
 },
 {
  "id": 41,
  "title": "Worked Optimization: Largest Rectangle with Fixed Perimeter",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"A rectangle has perimeter 40 units. Which dimensions maximize area?\""
   },
   {
    "kind": "Model",
    "text": "$$2\\ell+2w=40\\ \\Longrightarrow\\ w=20-\\ell,\\qquad A(\\ell)=\\ell(20-\\ell),\\quad0<\\ell<20.$$"
   },
   {
    "kind": "Reveal",
    "text": "$$A'(\\ell)=20-2\\ell=0\\ \\Longrightarrow\\ \\ell=10,\\ w=10,\\ A_{\\max}=100\\ \\text{square units}.$$"
   },
   {
    "kind": "Verification",
    "text": "`A''(\\ell)=-2<0`; area approaches zero at either boundary. The maximum is a square."
   }
  ]
 },
 {
  "id": 42,
  "title": "A Closed Cylindrical Can: Set Up the Model",
  "fields": [
   {
    "kind": "Problem inspired by Stewart §3.7",
    "text": "\"For a closed cylindrical can holding `1 L`, minimize total metal surface area.\""
   },
   {
    "kind": "Units",
    "text": "`1 L=1000 cm³`."
   },
   {
    "kind": "Constraint",
    "text": "$$V=\\pi r^2h=1000\\quad\\Longrightarrow\\quad h=\\frac{1000}{\\pi r^2},\\qquad r>0.$$"
   },
   {
    "kind": "Objective",
    "text": "$$S=2\\pi r^2+2\\pi rh=2\\pi r^2+\\frac{2000}{r}.$$"
   }
  ]
 },
 {
  "id": 43,
  "title": "The Can: Differentiate and Prove the Minimum",
  "fields": [
   {
    "kind": "Continue",
    "text": "$$S'(r)=4\\pi r-\\frac{2000}{r^2}=0\\quad\\Longrightarrow\\quad r^3=\\frac{500}{\\pi}.$$"
   },
   {
    "kind": "Exact conclusion",
    "text": "$$\\boxed{r=\\left(\\frac{500}{\\pi}\\right)^{1/3}},\\qquad \\boxed{h=2r}.$$"
   },
   {
    "kind": "Numerical",
    "text": "`r≈5.4193 cm`, `h≈10.8385 cm`."
   },
   {
    "kind": "Verification",
    "text": "$$S''(r)=4\\pi+\\frac{4000}{r^3}>0\\quad(r>0),$$ and `S(r)→∞` both as `r→0+` and `r→∞`; the critical point is the **unique global minimum**."
   }
  ]
 },
 {
  "id": 44,
  "title": "Open-Top Box: A Constrained Volume Problem",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"Cut equal squares of side `x` from the corners of a `12 cm × 12 cm` sheet; fold up the sides to form an open-top box. Maximize its volume.\""
   },
   {
    "kind": "Model",
    "text": "$$V(x)=x(12-2x)^2,\\qquad 0<x<6\\quad(\\mathrm{cm}).$$"
   },
   {
    "kind": "Reveal",
    "text": "$$V'(x)=(12-2x)(12-6x).$$ \"The only interior critical number is `x=2 cm`; there `V=2(8)^2=128 cm³`. As `x→0+` or `6−`, volume tends to zero, so this is the global maximum.\""
   }
  ]
 },
 {
  "id": 45,
  "title": "Optimization with a Three-Sided Fence",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"A straight river forms one edge of a rectangular enclosure. You have `100 m` of fencing for the other three sides. Find the maximum area.\""
   },
   {
    "kind": "Model",
    "text": "$$2x+y=100,\\qquad y=100-2x,\\qquad A(x)=x(100-2x),\\quad0<x<50.$$"
   },
   {
    "kind": "Reveal",
    "text": "$$A'(x)=100-4x=0\\ \\Longrightarrow\\ x=25\\ \\mathrm m,\\quad y=50\\ \\mathrm m.$$ $$A_{\\max}=1250\\ \\mathrm{m^2}.$$"
   }
  ]
 },
 {
  "id": 46,
  "title": "Optimization in Economics: Marginal Quantities",
  "fields": [
   {
    "kind": "Model",
    "text": "$$C(q)=100+5q+0.02q^2\\quad(\\text{currency units}),\\qquad q\\ge0.$$"
   },
   {
    "kind": "Derivative",
    "text": "$$C'(q)=5+0.04q.$$"
   },
   {
    "kind": "Worked interpretation",
    "text": "at `q=50`, `C'(50)=7` currency units per additional unit of output. \"For a sufficiently small increase `\\Delta q`, `\\Delta C\\approx C'(50)\\Delta q`.\""
   },
   {
    "kind": "Caution",
    "text": "differential estimate applies locally and does not equal a discrete unit-cost change exactly in a nonlinear model."
   }
  ]
 },
 {
  "id": 47,
  "title": "Machine Learning Is Also an Optimization Problem",
  "fields": [
   {
    "kind": "Supplemental modern application",
    "text": "\"Training can be framed as minimizing an error or loss function over a model parameter.\""
   },
   {
    "kind": "Model",
    "text": "$$L(w)=(w-3)^2,\\qquad L'(w)=2(w-3),\\qquad L''(w)=2>0.$$"
   },
   {
    "kind": "Reveal",
    "text": "`L'(w)=0` at `w=3`. Since `L(w)≥0` everywhere and `L(3)=0`, this is the **unique global minimum**."
   }
  ]
 },
 {
  "id": 48,
  "title": "An Optimization Answer Must Be Defensible",
  "fields": [
   {
    "kind": "On screen",
    "text": "\"Solving `f'(x)=0` finds candidates. It does not automatically find the required optimum.\""
   },
   {
    "kind": "Checklist presented as mathematical questions",
    "text": "\"Is the point in the feasible domain? Are boundaries included? Are there other critical points? Do derivative signs or concavity confirm the result? Can the objective diverge at an open boundary? Are the units meaningful?\""
   },
   {
    "kind": "Quick checks",
    "text": "`x³` at zero: no minimum; open-top box `x=2 cm`: feasible and maximal; can model `h=2r`: applies to a **closed** cylinder with specified volume."
   }
  ]
 },
 {
  "id": 49,
  "title": "Newton's Method: Turning Tangents into Root Estimates",
  "fields": [
   {
    "kind": "Question",
    "text": "\"How can we solve `f(x)=0` when a closed-form root is difficult to obtain?\""
   },
   {
    "kind": "Idea",
    "text": "\"Starting at `x_n`, replace the curve locally by its tangent; use that tangent's x-intercept as the next approximation.\""
   }
  ]
 },
 {
  "id": 50,
  "title": "Derive the Newton Iteration",
  "fields": [
   {
    "kind": "At current approximation `x_n`",
    "text": "$$y=f(x_n)+f'(x_n)(x-x_n).$$"
   },
   {
    "kind": "Set the tangent's y-coordinate to zero",
    "text": "$$0=f(x_n)+f'(x_n)(x_{n+1}-x_n).$$"
   },
   {
    "kind": "Solve",
    "text": "$$\\boxed{x_{n+1}=x_n-\\frac{f(x_n)}{f'(x_n)}}\\quad\\text{provided }f'(x_n)\\ne0.$$"
   }
  ]
 },
 {
  "id": 51,
  "title": "Newton's Method: Two Accurate Iterations",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"Estimate `\\sqrt2` by solving `f(x)=x²-2=0` with `x_0=1.5`.\""
   },
   {
    "kind": "Reveal",
    "text": "$$x_{n+1}=x_n-\\frac{x_n^2-2}{2x_n}=\\frac12\\left(x_n+\\frac2{x_n}\\right).$$ $$x_1=\\frac12\\left(\\frac32+\\frac43\\right)=\\frac{17}{12}\\approx1.416666667.$$ $$x_2=\\frac12\\left(\\frac{17}{12}+\\frac{24}{17}\\right)=\\frac{577}{408}\\approx1.414215686.$$"
   },
   {
    "kind": "Check",
    "text": "`\\sqrt2≈1.414213562`, so the second iteration is very close."
   }
  ]
 },
 {
  "id": 52,
  "title": "Newton's Method Can Fail or Cycle",
  "fields": [
   {
    "kind": "Counterexample",
    "text": "$$f(x)=x^3-2x+2,\\quad f'(x)=3x^2-2.$$ \"From `x_0=0`, Newton gives `x_1=1`; from `x_1=1`, Newton gives `x_2=0`. It cycles.\""
   },
   {
    "kind": "Reveal",
    "text": "$$x_1=0-\\frac{2}{-2}=1,\\qquad x_2=1-\\frac{1}{1}=0.$$"
   },
   {
    "kind": "Other failure",
    "text": "if `f'(x_n)=0`, division is undefined."
   },
   {
    "kind": "Caution",
    "text": "convergence depends on the starting point and function; never promise that Newton always succeeds."
   }
  ]
 },
 {
  "id": 53,
  "title": "A Link to Optimization: Root Finding for the Derivative",
  "fields": [
   {
    "kind": "Idea",
    "text": "\"To find a stationary point of a differentiable loss, solve `L'(w)=0`. Newton's root-finding iteration applied to `L'` yields a curvature-sensitive update.\""
   },
   {
    "kind": "Display",
    "text": "$$w_{n+1}=w_n-\\frac{L'(w_n)}{L''(w_n)}\\quad\\text{when }L''(w_n)\\ne0.$$"
   },
   {
    "kind": "Example",
    "text": "for `L(w)=(w-3)²`, from `w_0=0`, $$w_1=0-\\frac{-6}{2}=3.$$"
   },
   {
    "kind": "Safety",
    "text": "solving `L'=0` does not ensure a minimum, and Newton updates need not lower the loss for every objective."
   }
  ]
 },
 {
  "id": 54,
  "title": "Reverse the Derivative: Antiderivatives",
  "fields": [
   {
    "kind": "Definition",
    "text": "\"An **antiderivative** of `f` on an interval is a differentiable function `F` whose derivative is `f`.\""
   },
   {
    "kind": "Formula",
    "text": "$$F'(x)=f(x).$$"
   },
   {
    "kind": "Example",
    "text": "since `d(x³)/dx=3x²`, any `F(x)=x³+C` is an antiderivative of `f(x)=3x²` on the real line."
   }
  ]
 },
 {
  "id": 55,
  "title": "Families of Antiderivatives and the Constant C",
  "fields": [
   {
    "kind": "Rule",
    "text": "$$\\frac{d}{dx}\\left(\\frac{x^{n+1}}{n+1}+C\\right)=x^n,\\qquad n\\ne-1,$$ on any interval where the powers are defined and differentiable."
   },
   {
    "kind": "Worked examples",
    "text": "$$\\frac{d}{dx}\\left(\\frac{x^4}{4}+C\\right)=x^3;\\qquad \\frac{d}{dx}(-\\cos x+C)=\\sin x;\\qquad \\frac{d}{dx}(\\sin x+C)=\\cos x.$$"
   },
   {
    "kind": "Important",
    "text": "`x^{-1}` is excluded from the displayed power antiderivative rule; its special logarithmic treatment belongs to Chapter 6. On disconnected domains, integration constants can differ between components."
   }
  ]
 },
 {
  "id": 56,
  "title": "Use an Initial Condition to Determine C",
  "fields": [
   {
    "kind": "Problem",
    "text": "\"Find `F` if `F'(x)=6x-4` and `F(1)=5`.\""
   },
   {
    "kind": "Reveal",
    "text": "$$F(x)=3x^2-4x+C.$$ $$5=F(1)=3-4+C=-1+C\\quad\\Longrightarrow\\quad C=6.$$ $$\\boxed{F(x)=3x^2-4x+6}.$$"
   },
   {
    "kind": "Check",
    "text": "`F'(x)=6x-4`; `F(1)=5`."
   }
  ]
 },
 {
  "id": 57,
  "title": "Recover Position from Acceleration",
  "fields": [
   {
    "kind": "Physical problem",
    "text": "\"A projectile moves vertically with constant acceleration `a(t)=-9.8 m/s²`, initial velocity `v(0)=20 m/s`, and initial position `s(0)=0 m`. Ignore air resistance.\""
   },
   {
    "kind": "Reveal",
    "text": "$$v'(t)=-9.8\\ \\Longrightarrow\\ v(t)=20-9.8t\\ (\\mathrm{m/s}).$$ $$s'(t)=v(t)\\ \\Longrightarrow\\ s(t)=20t-4.9t^2\\ (\\mathrm m).$$"
   },
   {
    "kind": "Physical interpretation",
    "text": "top reached when `v=0`, at `t=20/9.8≈2.0408 s`; maximum height `20²/(2\\cdot9.8)≈20.408 m` above launch position."
   }
  ]
 },
 {
  "id": 58,
  "title": "Reconstruct the Graph of F from the Graph of f",
  "fields": [
   {
    "kind": "Given",
    "text": "$$F'(x)=f(x)=x^2-1,\\qquad F(0)=0.$$"
   },
   {
    "kind": "Recover",
    "text": "$$F(x)=\\frac{x^3}{3}-x.$$"
   },
   {
    "kind": "Qualitative prediction before revealing F",
    "text": "`f>0` when `x<-1` or `x>1`, so `F` increases there; `f<0` for `-1<x<1`, so `F` decreases there. `F` has a local maximum at `(-1,2/3)` and a local minimum at `(1,-2/3)`."
   }
  ]
 },
 {
  "id": 59,
  "title": "Differentiation and Optimization: A Final Comparison",
  "fields": [
   {
    "kind": "Supplemental Machine Learning application",
    "text": "$$L(w)=(w-3)^2,\\quad L'(w)=2(w-3),\\quad L''(w)=2.$$"
   },
   {
    "kind": "Three linked questions",
    "text": "\"What is the slope at `w`?\" (first derivative); \"Is the stationary point a minimum?\" (`L''>0`, plus `L≥0`); \"How do we improve an initial parameter?\" (numerical update)."
   },
   {
    "kind": "Caution",
    "text": "single-variable optimization is an introduction; multivariable gradients and curvature will be studied later in Stewart Chapter 14."
   }
  ]
 },
 {
  "id": 60,
  "title": "Two Ways to Improve a Model Parameter",
  "fields": [
   {
    "kind": "Compare, same objective and same start",
    "text": "$$L(w)=(w-3)^2,\\qquad w_0=0.$$"
   },
   {
    "kind": "Gradient descent with `\\eta=0.2`",
    "text": "$$w_1=w_0-\\eta L'(w_0)=0-0.2(-6)=1.2,\\qquad L(w_1)=3.24.$$"
   },
   {
    "kind": "Newton update for the stationary point",
    "text": "$$w_1^{\\mathrm{Newton}}=w_0-\\frac{L'(w_0)}{L''(w_0)}=3,\\qquad L(3)=0.$$"
   },
   {
    "kind": "Accurate conclusion",
    "text": "\"For this quadratic and chosen settings, Newton reaches the minimum in one step, while gradient descent moves partway. Neither method is universally guaranteed to improve arbitrary functions without appropriate conditions.\""
   },
   {
    "kind": "Closing line",
    "text": "\"Derivatives reveal a function's behavior; calculus helps us use that behavior to solve real problems.\""
   }
  ]
 }
];
export const applicationSections=[[1,7],[8,13],[14,22],[23,28],[29,34],[35,39],[40,48],[49,53],[54,60]];
export function newtonStep(x:number,fn:(x:number)=>number,df:(x:number)=>number):number|null{const slope=df(x);if(!Number.isFinite(slope)||Math.abs(slope)<1e-12)return null;const next=x-fn(x)/slope;return Number.isFinite(next)?next:null;}
export const cubic=(x:number)=>x**3-3*x;
export const quartic=(x:number)=>x**4-4*x*x;
export const canHeight=(r:number)=>1000/(Math.PI*r*r);
export const canArea=(r:number)=>2*Math.PI*r*r+2000/r;
// Normalize authored Unicode notation for KaTeX, without changing mathematical values.
export function applicationMath(tex:string){return tex.replace(/[²³⁴]/g,c=>({'²':'^2','³':'^3','⁴':'^4'}[c]!)).replace(/lim_/g,'\\lim_').replace(/→/g,'\\to ').replace(/∞/g,'\\infty ').replace(/ℝ/g,'\\mathbb R').replace(/±/g,'\\pm ').replace(/√\s*([\w]+)/g,'\\sqrt{$1}').replace(/≥/g,'\\ge ').replace(/≤/g,'\\le ').replace(/≠/g,'\\ne ').replace(/≈/g,'\\approx ').replace(/−/g,'-').replace(/η/g,'\\eta ').replace(/Δ/g,'\\Delta ').replace(/π/g,'\\pi ').replace(/ℓ/g,'\\ell ').replace(/(?<![A-Za-z\\])cm\b/g,'\\mathrm{cm}').replace(/(?<![A-Za-z\\])m(?=\/s|\s|$)/g,'\\mathrm m').replace(/(?<![A-Za-z\\])s(?=\^|$)/g,'\\mathrm s').replace(/\bL(?==1000)/g,'\\mathrm L');}
