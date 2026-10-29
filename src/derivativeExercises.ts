export type DerivativeExerciseSlide={id:number;problem:number;stage:number;title:string;body:string};
// An interval at the start of an array row must not be parsed as optional row spacing.
export const exerciseMath=(tex:string)=>tex.replace(/\\\\(?=\[)/g,String.raw`\\{}`);
// Audience-visible content from Markdowns/ch2/exercises.md; source metadata is not rendered.
export const derivativeExerciseSlides:DerivativeExerciseSlide[]=[
 {
  "id": 1,
  "problem": 1,
  "stage": 0,
  "title": "A Rock on Mars — Velocity and Impact",
  "body": "A rock moves vertically on Mars with height (metres) $H(t)=10t-1.86t^2$, where $t$ is in seconds, $t\\ge0$. Find (a) its velocity at $t=1$, (b) its velocity at a general time $t=a$, (c) its positive return time to the launch height, and (d) its impact velocity."
 },
 {
  "id": 2,
  "problem": 1,
  "stage": 1,
  "title": "A Rock on Mars — Velocity and Impact",
  "body": "**Known:** $H(t)$ gives position, not velocity. **Unknown:** $v(t)=H'(t)$, then solve $H(t)=0$ for $t>0$. The sign of $v$ distinguishes upward from downward movement. $H'(t)$ can be computed from the limit definition or the power rule. The quadratic $H(t)=t(10-1.86t)$ has two roots; one is the launch instant, not impact."
 },
 {
  "id": 3,
  "problem": 1,
  "stage": 2,
  "title": "A Rock on Mars — Velocity and Impact",
  "body": "$$v(t)=\\frac{dH}{dt}=10-2(1.86)t=10-3.72t\\quad(\\mathrm{m/s}).$$\n$$v(1)=10-3.72=6.28\\ \\mathrm{m/s},\\qquad v(a)=10-3.72a\\ \\mathrm{m/s}.$$\n$$H(t)=0\\iff t(10-1.86t)=0\\iff t=0\\ \\text{or}\\ t=\\frac{10}{1.86}=\\frac{500}{93}\\ \\mathrm s.$$\n$$v\\!\\left(\\frac{500}{93}\\right)=10-3.72\\left(\\frac{500}{93}\\right)=-10\\ \\mathrm{m/s}.$$"
 },
 {
  "id": 4,
  "problem": 1,
  "stage": 3,
  "title": "A Rock on Mars — Velocity and Impact",
  "body": "The launch and impact heights are equal, but the velocities have opposite signs. At $t=1$ the upward velocity is positive; at impact it is negative (downward). Differentiate $v(t)$ once more to obtain $a=-3.72\\ \\mathrm{m/s^2}$. Do **not** report the impact speed as negative: speed is $|v|=10\\ \\mathrm{m/s}$."
 },
 {
  "id": 5,
  "problem": 2,
  "stage": 0,
  "title": "Average Velocity Versus Instantaneous Velocity",
  "body": "A particle has position (feet) $s(t)=12t^2-6t+23$, with $t$ in seconds. Compute its average velocities on $[4,8]$, $[6,8]$, $[8,10]$, and $[8,12]$, then its instantaneous velocity at $t=8$. Compare secant and tangent slopes."
 },
 {
  "id": 6,
  "problem": 2,
  "stage": 1,
  "title": "Average Velocity Versus Instantaneous Velocity",
  "body": "Average velocity on $[a,b]$ is $\\bar v=\\frac{s(b)-s(a)}{b-a}$. For a quadratic, factor the difference of squares before substituting: $s(b)-s(a)=12(b^2-a^2)-6(b-a)$. The tangent slope at $t=8$ is $s'(8)$."
 },
 {
  "id": 7,
  "problem": 2,
  "stage": 2,
  "title": "Average Velocity Versus Instantaneous Velocity",
  "body": "$$\\bar v_{[a,b]}=\\frac{12(b^2-a^2)-6(b-a)}{b-a}=12(a+b)-6\\quad(\\mathrm{ft/s}).$$\n$$\\begin{array}{c|c|c} [a,b] & a+b &\\bar v\\ (\\mathrm{ft/s})\\\\\\hline [4,8]&12&138\\\\[6,8]&14&162\\\\[8,10]&18&210\\\\[8,12]&20&234\\end{array}$$\n$$s'(t)=24t-6,\\qquad v(8)=24(8)-6=186\\ \\mathrm{ft/s}.$$"
 },
 {
  "id": 8,
  "problem": 2,
  "stage": 3,
  "title": "Average Velocity Versus Instantaneous Velocity",
  "body": "The four averages differ because the time intervals sample different portions of an accelerating trajectory. Taking symmetric intervals $[8-h,8+h]$ yields $\\bar v=12(16)-6=186\\ \\mathrm{ft/s}$ for every $h>0$ in the domain. Thus symmetry gives an exact midpoint slope for this quadratic, but not for arbitrary functions."
 },
 {
  "id": 9,
  "problem": 3,
  "stage": 0,
  "title": "First-Principles Tangent to a Quartic",
  "body": "For $g(x)=x^4-2$, find $g'(1)$ and an equation of the tangent line at $(1,-1)$. Use the limit definition, not merely a memorized power rule."
 },
 {
  "id": 10,
  "problem": 3,
  "stage": 1,
  "title": "First-Principles Tangent to a Quartic",
  "body": "Start with $g'(1)=\\lim_{h\\to0}\\frac{g(1+h)-g(1)}h$. Expand $(1+h)^4$ carefully, cancel the constant term, then divide by $h$ only while $h\\ne0$. The tangent through $(x_0,y_0)$ has equation $y-y_0=m(x-x_0)$."
 },
 {
  "id": 11,
  "problem": 3,
  "stage": 2,
  "title": "First-Principles Tangent to a Quartic",
  "body": "$$\\begin{aligned}g'(1)&=\\lim_{h\\to0}\\frac{(1+h)^4-2-(-1)}h\\\\&=\\lim_{h\\to0}\\frac{1+4h+6h^2+4h^3+h^4-1}{h}\\\\&=\\lim_{h\\to0}(4+6h+4h^2+h^3)=4.\\end{aligned}$$\n$$y-(-1)=4(x-1)\\quad\\Longrightarrow\\quad\\boxed{y=4x-5}. $$"
 },
 {
  "id": 12,
  "problem": 3,
  "stage": 3,
  "title": "First-Principles Tangent to a Quartic",
  "body": "Substitute $x=1$ into the tangent line: $y=4-5=-1$, so the line passes through the prescribed point. The derivative $g'(x)=4x^3$ independently predicts $g'(1)=4$. The tangent is a *local linear approximation*, not the same curve as $x^4-2$."
 },
 {
  "id": 13,
  "problem": 4,
  "stage": 0,
  "title": "Discover the Derivative Graphically",
  "body": "Given $f(x)=x^2$, estimate tangent slopes at $x=0,\\frac12,1,2$ from a zoomed graph, use symmetry to predict slopes at their negative counterparts, guess a formula for $f'(x)$, and prove it from the definition."
 },
 {
  "id": 14,
  "problem": 4,
  "stage": 1,
  "title": "Discover the Derivative Graphically",
  "body": "A parabola has a horizontal tangent at the origin, upward slope for positive $x$, and downward slope for negative $x$. Use a secant with displacement $h$ to find a symbolic slope; then make $h\\to0$. Anticipate that $f'$ is an odd function because $f$ is even and differentiable."
 },
 {
  "id": 15,
  "problem": 4,
  "stage": 2,
  "title": "Discover the Derivative Graphically",
  "body": "$$\\begin{aligned}\\frac{f(x+h)-f(x)}h&=\\frac{(x+h)^2-x^2}{h}\\\\&=\\frac{2xh+h^2}{h}=2x+h\\quad(h\\ne0),\\\\ f'(x)&=\\lim_{h\\to0}(2x+h)=\\boxed{2x}.\\end{aligned}$$\n$$\\begin{array}{c|rrrrrrr}x&-2&-1&-\\tfrac12&0&\\tfrac12&1&2\\\\\\hline f'(x)&-4&-2&-1&0&1&2&4\\end{array}$$"
 },
 {
  "id": 16,
  "problem": 4,
  "stage": 3,
  "title": "Discover the Derivative Graphically",
  "body": "Plot $f'$ as the line $y=2x$. Its sign correctly predicts whether the original parabola falls or rises. The derivative $f'$ is defined everywhere on $\\mathbb R$. Students should see that **one function produces another function** through differentiation."
 },
 {
  "id": 17,
  "problem": 5,
  "stage": 0,
  "title": "Differentiate x⁴ from the Definition",
  "body": "Find $f'(x)$ for $f(x)=x^4$ from the definition of derivative. State the domain of $f$ and of $f'$."
 },
 {
  "id": 18,
  "problem": 5,
  "stage": 1,
  "title": "Differentiate x⁴ from the Definition",
  "body": "Use $f'(x)=\\lim_{h\\to0}\\frac{(x+h)^4-x^4}{h}$. Expand the binomial before dividing by $h$. Identify the factor of $h$ shared by all numerator terms; never replace $h$ by zero while it is still in a denominator."
 },
 {
  "id": 19,
  "problem": 5,
  "stage": 2,
  "title": "Differentiate x⁴ from the Definition",
  "body": "$$\\begin{aligned}(x+h)^4&=x^4+4x^3h+6x^2h^2+4xh^3+h^4,\\\\\\frac{(x+h)^4-x^4}{h}&=4x^3+6x^2h+4xh^2+h^3,\\\\ f'(x)&=\\lim_{h\\to0}(4x^3+6x^2h+4xh^2+h^3)=\\boxed{4x^3}.\\end{aligned}$$"
 },
 {
  "id": 20,
  "problem": 5,
  "stage": 3,
  "title": "Differentiate x⁴ from the Definition",
  "body": "Domain $f=\\mathbb R$ and domain $f'=\\mathbb R$. Check at $x=0$: $f'(0)=0$ (flat tangent). At $x=-1$, $f'(-1)=-4$ (downward tangent). The algebra explains why the power rule works in this particular case."
 },
 {
  "id": 21,
  "problem": 6,
  "stage": 0,
  "title": "Differentiate a Function with a Hole in Its Domain",
  "body": "For $f(x)=x+\\frac1x$, find $f'(x)$ and state both the function domain and the derivative domain. Connect the result to the original graph."
 },
 {
  "id": 22,
  "problem": 6,
  "stage": 1,
  "title": "Differentiate a Function with a Hole in Its Domain",
  "body": "The input $x=0$ is excluded before any differentiation. Apply either the reciprocal rule or the difference quotient. When combining fractions in the difference quotient, carefully handle the nonzero product $x(x+h)$ and assume $x+h\\ne0$ within the domain."
 },
 {
  "id": 23,
  "problem": 6,
  "stage": 2,
  "title": "Differentiate a Function with a Hole in Its Domain",
  "body": "$$\\begin{aligned}\\frac{f(x+h)-f(x)}h&=1+\\frac{\\frac1{x+h}-\\frac1x}{h}\\\\&=1+\\frac{x-(x+h)}{hx(x+h)}\\\\&=1-\\frac1{x(x+h)},\\\\ f'(x)&=\\boxed{1-\\frac1{x^2}},\\qquad x\\ne0.\\end{aligned}$$"
 },
 {
  "id": 24,
  "problem": 6,
  "stage": 3,
  "title": "Differentiate a Function with a Hole in Its Domain",
  "body": "Both domains are $(-\\infty,0)\\cup(0,\\infty)$. A derivative cannot be assigned at an input where the original function does not exist. Solving $f'(x)=0$ gives $x=\\pm1$; those points have horizontal tangents. Vertical asymptote $x=0$ must remain visible on the graph."
 },
 {
  "id": 25,
  "problem": 7,
  "stage": 0,
  "title": "Product Rule: Two Polynomial Factors",
  "body": "Differentiate $f(x)=(5x^2-2)(x^3+3x)$ using the Product Rule. Confirm the answer by expanding the product first."
 },
 {
  "id": 26,
  "problem": 7,
  "stage": 1,
  "title": "Product Rule: Two Polynomial Factors",
  "body": "Let $u=5x^2-2$, $v=x^3+3x$. Apply $(uv)'=u'v+uv'$. Differentiate the two factors independently before simplifying. Then multiply the original factors to provide an algebraically independent check."
 },
 {
  "id": 27,
  "problem": 7,
  "stage": 2,
  "title": "Product Rule: Two Polynomial Factors",
  "body": "$$u'=10x,\\quad v'=3x^2+3.$$\n$$\\begin{aligned}f'(x)&=10x(x^3+3x)+(5x^2-2)(3x^2+3)\\\\&=10x^4+30x^2+15x^4+9x^2-6\\\\&=\\boxed{25x^4+39x^2-6}.\\end{aligned}$$\n$$f(x)=5x^5+13x^3-6x\\ \\Longrightarrow\\ f'(x)=25x^4+39x^2-6.$$"
 },
 {
  "id": 28,
  "problem": 7,
  "stage": 3,
  "title": "Product Rule: Two Polynomial Factors",
  "body": "At $x=0$, the derivative is $-6$ even though $u'(0)=0$: the second contribution $u(0)v'(0)=-6$ remains. Stress that $(uv)'\\ne u'v$ and $(uv)'\\ne uv'$ in general. Both differentiation routes must agree for all real $x$."
 },
 {
  "id": 29,
  "problem": 8,
  "stage": 0,
  "title": "Product Rule or Expand First?",
  "body": "For $f(x)=(1+2x^2)(x^2-x-2)$, differentiate in two ways: using the Product Rule, then multiplying the factors first. Verify the answers are equivalent."
 },
 {
  "id": 30,
  "problem": 8,
  "stage": 1,
  "title": "Product Rule or Expand First?",
  "body": "First method: $u=1+2x^2$ and $v=x^2-x-2$. Second method: distribute $2x^2$ across the second factor, then add the untouched second factor. Use the same final polynomial derivative to confirm consistency."
 },
 {
  "id": 31,
  "problem": 8,
  "stage": 2,
  "title": "Product Rule or Expand First?",
  "body": "$$\\begin{aligned}f'(x)&=4x(x^2-x-2)+(1+2x^2)(2x-1).\\end{aligned}$$\n$$\\begin{aligned}f(x)&=2x^4-2x^3-3x^2-x-2,\\\\\\frac{df}{dx}&=\\boxed{8x^3-6x^2-6x-1}.\\end{aligned}$$\n$$4x(x^2-x-2)+(1+2x^2)(2x-1)=8x^3-6x^2-6x-1.$$"
 },
 {
  "id": 32,
  "problem": 8,
  "stage": 3,
  "title": "Product Rule or Expand First?",
  "body": "At $x=1$, evaluate both forms to obtain $f'(1)=8-6-6-1=-5$. The product and expanded forms are identical; the Product Rule becomes especially valuable when multiplying factors would be cumbersome."
 },
 {
  "id": 33,
  "problem": 9,
  "stage": 0,
  "title": "Quotient Rule with Restricted Domain",
  "body": "Differentiate $f(t)=\\frac{t^3+3t}{t^2-4t+3}$ and state where the function and derivative are defined."
 },
 {
  "id": 34,
  "problem": 9,
  "stage": 1,
  "title": "Quotient Rule with Restricted Domain",
  "body": "Use $u=t^3+3t$, $v=t^2-4t+3$, and $(u/v)'=(u'v-uv')/v^2$. Factor the denominator: $v=(t-1)(t-3)$, so $t=1,3$ are excluded *before* differentiation. Keep parentheses around the entire numerator to avoid a sign error."
 },
 {
  "id": 35,
  "problem": 9,
  "stage": 2,
  "title": "Quotient Rule with Restricted Domain",
  "body": "$$u'=3t^2+3,\\qquad v'=2t-4.$$\n$$f'(t)=\\frac{(3t^2+3)(t^2-4t+3)-(t^3+3t)(2t-4)}{(t^2-4t+3)^2}.$$\n$$\\boxed{f'(t)=\\frac{t^4-8t^3+6t^2+9}{(t-1)^2(t-3)^2}},\\quad t\\ne1,3.$$"
 },
 {
  "id": 36,
  "problem": 9,
  "stage": 3,
  "title": "Quotient Rule with Restricted Domain",
  "body": "Check at $t=0$: $f'(0)=9/(1\\cdot9)=1$. This matches the Quotient Rule evaluation $u'(0)=3$, $v(0)=3$, $u(0)=0$, giving $f'(0)=3\\cdot3/3^2=1$. The zeros of the original denominator remain excluded even if algebraic simplification occurs."
 },
 {
  "id": 37,
  "problem": 10,
  "stage": 0,
  "title": "Product Rule with a Trigonometric Factor",
  "body": "Differentiate $f(x)=x^2\\sin x$. Express the answer exactly, then evaluate the slope at $x=\\pi/2$. Use radians."
 },
 {
  "id": 38,
  "problem": 10,
  "stage": 1,
  "title": "Product Rule with a Trigonometric Factor",
  "body": "Both $x^2$ and $\\sin x$ depend on $x$, so the Product Rule is required. The derivative $(\\sin x)'=\\cos x$ assumes that $x$ is measured in radians. Keep the product factored unless evaluation benefits from expansion."
 },
 {
  "id": 39,
  "problem": 10,
  "stage": 2,
  "title": "Product Rule with a Trigonometric Factor",
  "body": "$$f'(x)=(x^2)'\\sin x+x^2(\\sin x)'=\\boxed{2x\\sin x+x^2\\cos x}.$$\n$$f'\\left(\\frac\\pi2\\right)=2\\left(\\frac\\pi2\\right)\\sin\\frac\\pi2+\\left(\\frac\\pi2\\right)^2\\cos\\frac\\pi2=\\boxed{\\pi}. $$"
 },
 {
  "id": 40,
  "problem": 10,
  "stage": 3,
  "title": "Product Rule with a Trigonometric Factor",
  "body": "At $x=0$, $f'(0)=0$; near $x=0$, $\\sin x\\approx x$, so $f(x)\\approx x^3$ and the flat tangent is reasonable. At $x=\\pi/2$, $f$ is still changing even though the cosine term vanishes: the derivative from $x^2$ remains."
 },
 {
  "id": 41,
  "problem": 11,
  "stage": 0,
  "title": "Trigonometric Sum with a Product",
  "body": "Differentiate $f(x)=x\\cos x+2\\tan x$ on its natural domain."
 },
 {
  "id": 42,
  "problem": 11,
  "stage": 1,
  "title": "Trigonometric Sum with a Product",
  "body": "Treat the sum term-by-term. Differentiate $x\\cos x$ using the Product Rule and $2\\tan x$ using the constant multiple rule. Domain restriction: $\\tan x$ is undefined when $\\cos x=0$."
 },
 {
  "id": 43,
  "problem": 11,
  "stage": 2,
  "title": "Trigonometric Sum with a Product",
  "body": "$$\\begin{aligned}\\frac{d}{dx}[x\\cos x]&=(1)\\cos x+x(-\\sin x)=\\cos x-x\\sin x,\\\\\\frac{d}{dx}[2\\tan x]&=2\\sec^2x,\\\\\\therefore\\ f'(x)&=\\boxed{\\cos x-x\\sin x+2\\sec^2x}.\\end{aligned}$$"
 },
 {
  "id": 44,
  "problem": 11,
  "stage": 3,
  "title": "Trigonometric Sum with a Product",
  "body": "The domain is $\\mathbb R\\setminus\\{\\pi/2+k\\pi:k\\in\\mathbb Z\\}$. At $x=0$, $f'(0)=1+0+2=3$. Graphs should not connect across the vertical asymptotes of $\\tan x$; radians must be explicit."
 },
 {
  "id": 45,
  "problem": 12,
  "stage": 0,
  "title": "Chain Rule: Fourth Power of a Polynomial",
  "body": "Write $y=(2x^3+5)^4$ as a composition and compute $dy/dx$."
 },
 {
  "id": 46,
  "problem": 12,
  "stage": 1,
  "title": "Chain Rule: Fourth Power of a Polynomial",
  "body": "Name the *inner* function $u(x)=2x^3+5$ and the *outer* function $F(u)=u^4$. First find $dF/du$ and $du/dx$. Multiply the derivatives; do not differentiate the inner expression as though it were merely $x$."
 },
 {
  "id": 47,
  "problem": 12,
  "stage": 2,
  "title": "Chain Rule: Fourth Power of a Polynomial",
  "body": "$$u=2x^3+5,\\quad\\frac{du}{dx}=6x^2,\\quad\\frac{dF}{du}=4u^3.$$\n$$\\frac{dy}{dx}=\\frac{dF}{du}\\frac{du}{dx}=4(2x^3+5)^3(6x^2)=\\boxed{24x^2(2x^3+5)^3}. $$"
 },
 {
  "id": 48,
  "problem": 12,
  "stage": 3,
  "title": "Chain Rule: Fourth Power of a Polynomial",
  "body": "At $x=0$, $dy/dx=0$ because the inner function is locally flat ($u'(0)=0$). A common wrong result is $4(2x^3+5)^3$—it omits the essential inner derivative $6x^2$."
 },
 {
  "id": 49,
  "problem": 13,
  "stage": 0,
  "title": "Chain Rule: A Fractional Power",
  "body": "Differentiate $g(x)=(2-\\sin x)^{3/2}$ and state whether it has a real-valued domain restriction."
 },
 {
  "id": 50,
  "problem": 13,
  "stage": 1,
  "title": "Chain Rule: A Fractional Power",
  "body": "Let $u=2-\\sin x$. Because $-1\\le\\sin x\\le1$, we have $u\\ge1>0$, so the real fractional power is defined for every real $x$. Apply $\\frac{d}{dx}u^{3/2}=\\frac32u^{1/2}u'$."
 },
 {
  "id": 51,
  "problem": 13,
  "stage": 2,
  "title": "Chain Rule: A Fractional Power",
  "body": "$$u'= -\\cos x.$$\n$$\\begin{aligned}g'(x)&=\\frac32(2-\\sin x)^{1/2}(-\\cos x)\\\\&=\\boxed{-\\frac32\\cos x\\sqrt{2-\\sin x}}.\\end{aligned}$$"
 },
 {
  "id": 52,
  "problem": 13,
  "stage": 3,
  "title": "Chain Rule: A Fractional Power",
  "body": "At $x=\\pi/2$, $\\cos x=0$, so $g'(\\pi/2)=0$. The negative sign originates from differentiating $-\\sin x$; dropping it reverses the predicted local direction of change. Both $g$ and $g'$ have domain $\\mathbb R$."
 },
 {
  "id": 53,
  "problem": 14,
  "stage": 0,
  "title": "Product Rule and Chain Rule Together",
  "body": "Differentiate $g(x)=(x+1)^3(x+2)^6$ and factor the result."
 },
 {
  "id": 54,
  "problem": 14,
  "stage": 1,
  "title": "Product Rule and Chain Rule Together",
  "body": "This is a product of two composite functions. Differentiate each factor with the Chain Rule, then combine using the Product Rule. Factor the common $(x+1)^2(x+2)^5$ before simplifying the remaining bracket."
 },
 {
  "id": 55,
  "problem": 14,
  "stage": 2,
  "title": "Product Rule and Chain Rule Together",
  "body": "$$\\begin{aligned}g'(x)&=3(x+1)^2(x+2)^6+6(x+1)^3(x+2)^5\\\\&=(x+1)^2(x+2)^5\\big[3(x+2)+6(x+1)\\big]\\\\&=\\boxed{3(x+1)^2(x+2)^5(3x+4)}.\\end{aligned}$$"
 },
 {
  "id": 56,
  "problem": 14,
  "stage": 3,
  "title": "Product Rule and Chain Rule Together",
  "body": "At $x=-1$ and $x=-2$, the derivative is zero and the original product is zero; at $x=-4/3$ the derivative is zero even though the function is not zero. This illustrates why a factored derivative is useful for detecting horizontal tangents. Confirm that $3(x+2)+6(x+1)=9x+12=3(3x+4)$."
 },
 {
  "id": 57,
  "problem": 15,
  "stage": 0,
  "title": "Nested Chain Rule from Given Derivative Data",
  "body": "Let $r(x)=f(g(h(x)))$. Given $h(1)=2$, $g(2)=3$, $h'(1)=4$, $g'(2)=5$, and $f'(3)=6$, find $r'(1)$. (The book denotes the middle function by $t$; here it is named $g$ to avoid confusion with time.)"
 },
 {
  "id": 58,
  "problem": 15,
  "stage": 1,
  "title": "Nested Chain Rule from Given Derivative Data",
  "body": "Read the composition from inside out. At $x=1$, $h(1)=2$ and then $g(h(1))=g(2)=3$. Differentiate the nested expression: $r'(x)=f'(g(h(x)))g'(h(x))h'(x)$. Evaluate each factor at the correct input; the three derivative values are supplied at *different* points."
 },
 {
  "id": 59,
  "problem": 15,
  "stage": 2,
  "title": "Nested Chain Rule from Given Derivative Data",
  "body": "$$r'(1)=f'\\big(g(h(1))\\big)\\,g'\\big(h(1)\\big)\\,h'(1).$$\n$$\\begin{aligned}h(1)&=2,\\\\g(h(1))&=g(2)=3,\\\\r'(1)&=f'(3)g'(2)h'(1)=6\\cdot5\\cdot4=\\boxed{120}.\\end{aligned}$$"
 },
 {
  "id": 60,
  "problem": 15,
  "stage": 3,
  "title": "Nested Chain Rule from Given Derivative Data",
  "body": "The function value $f(3)$ is **not** required: the derivative formula needs only $f'(3)$. Explain that $f'(1)g'(1)h'(1)$ is not generally valid. In graphically chained models, local sensitivities multiply along the computational path—an important precursor to ML backpropagation."
 },
 {
  "id": 61,
  "problem": 16,
  "stage": 0,
  "title": "Implicit Differentiation and Two Explicit Branches",
  "body": "For the implicitly defined curve $9x^2-y^2=1$, (a) find $dy/dx$ implicitly, (b) solve explicitly for $y$ on the real domain and differentiate each branch, (c) compare the answers."
 },
 {
  "id": 62,
  "problem": 16,
  "stage": 1,
  "title": "Implicit Differentiation and Two Explicit Branches",
  "body": "Treat $y$ as a differentiable function of $x$ locally. Applying $d/dx$ to $y^2$ gives $2yy'$, **not** $2y$. Then solve $y^2=9x^2-1$ and remember both square-root branches. Vertical tangents may occur where the implicit denominator vanishes."
 },
 {
  "id": 63,
  "problem": 16,
  "stage": 2,
  "title": "Implicit Differentiation and Two Explicit Branches",
  "body": "$$18x-2y\\frac{dy}{dx}=0\\quad\\Longrightarrow\\quad\\boxed{\\frac{dy}{dx}=\\frac{9x}{y}},\\quad y\\ne0.$$\n$$y_\\pm(x)=\\pm\\sqrt{9x^2-1},\\qquad |x|\\ge\\frac13.$$\n$$y_\\pm'(x)=\\pm\\frac{9x}{\\sqrt{9x^2-1}}=\\frac{9x}{y_\\pm(x)}\\quad(|x|>1/3).$$"
 },
 {
  "id": 64,
  "problem": 16,
  "stage": 3,
  "title": "Implicit Differentiation and Two Explicit Branches",
  "body": "The branches meet at $(\\pm1/3,0)$ and have vertical tangent behavior there; the expression $9x/y$ is undefined exactly at $y=0$. Do **not** claim a finite derivative at those points. Graph both upper and lower branches and label the excluded central strip $|x|<1/3$."
 },
 {
  "id": 65,
  "problem": 17,
  "stage": 0,
  "title": "Collecting y-Prime Terms Correctly",
  "body": "For $x^2-4xy+y^2=4$, compute $dy/dx$ implicitly and identify where the resulting formula does not give a finite slope."
 },
 {
  "id": 66,
  "problem": 17,
  "stage": 1,
  "title": "Collecting y-Prime Terms Correctly",
  "body": "Differentiate $x^2$ directly, the product $xy$ using $(xy)'=y+xy'$, and $y^2$ using $2yy'$. Gather **all** terms containing $y'$ on one side, then divide by its coefficient, which may be zero at some curve points."
 },
 {
  "id": 67,
  "problem": 17,
  "stage": 2,
  "title": "Collecting y-Prime Terms Correctly",
  "body": "$$2x-4\\big(y+xy'\\big)+2yy'=0.$$\n$$(-4x+2y)y'=4y-2x.$$\n$$\\boxed{y'=\\frac{4y-2x}{2y-4x}=\\frac{2y-x}{y-2x}},\\qquad y\\ne2x.$$"
 },
 {
  "id": 68,
  "problem": 17,
  "stage": 3,
  "title": "Collecting y-Prime Terms Correctly",
  "body": "The denominator is zero along $y=2x$. Intersecting with the original curve gives $x^2-8x^2+4x^2=4$, i.e. $-3x^2=4$, so **there are no real curve points with $y=2x$**. Consequently the slope formula has no real zero-denominator point *on this particular curve*. This is an important check before announcing vertical tangents."
 },
 {
  "id": 69,
  "problem": 18,
  "stage": 0,
  "title": "Tangent to an Implicit Hyperbola",
  "body": "Find the tangent line to $x^2-xy-y^2=1$ at the specified point $(2,1)$."
 },
 {
  "id": 70,
  "problem": 18,
  "stage": 1,
  "title": "Tangent to an Implicit Hyperbola",
  "body": "First verify the point lies on the curve: $2^2-(2)(1)-1^2=1$. Then differentiate while remembering that both $x$ and $y$ vary. Apply the Product Rule to $xy$ and the Chain Rule to $y^2$. Only after finding $y'$ substitute $(2,1)$."
 },
 {
  "id": 71,
  "problem": 18,
  "stage": 2,
  "title": "Tangent to an Implicit Hyperbola",
  "body": "$$2x-\\big(y+xy'\\big)-2yy'=0.$$\n$$\\big(x+2y\\big)y'=2x-y\\quad\\Longrightarrow\\quad y'=\\frac{2x-y}{x+2y}.$$\n$$m=\\left.\\frac{2x-y}{x+2y}\\right|_{(2,1)}=\\frac{4-1}{2+2}=\\frac34.$$\n$$\\boxed{y-1=\\frac34(x-2)}.$$"
 },
 {
  "id": 72,
  "problem": 18,
  "stage": 3,
  "title": "Tangent to an Implicit Hyperbola",
  "body": "The tangent passes through $(2,1)$ and has positive slope $3/4$. Warn students not to differentiate $-xy$ as $-xy'$ alone; the missing $-y$ changes the result. Plot the hyperbola locally with a numerically faithful tangent; no misleading straight-line replacement of the curve."
 },
 {
  "id": 73,
  "problem": 19,
  "stage": 0,
  "title": "Linear Mass Density of a Metal Rod",
  "body": "The mass between the left end of a metal rod and position $x$ metres is $M(x)=3x^2$ kilograms. Find its linear density at $x=1,2,3$ metres; compare where it is largest and smallest among those positions."
 },
 {
  "id": 74,
  "problem": 19,
  "stage": 1,
  "title": "Linear Mass Density of a Metal Rod",
  "body": "Mass over a small segment $[x,x+\\Delta x]$ is $\\Delta M\\approx M'(x)\\Delta x$. The *linear density* $\\lambda(x)=dM/dx$ has units $\\mathrm{kg/m}$, not $\\mathrm{kg}$ and not $\\mathrm{kg/m^3}$. Differentiate before evaluating."
 },
 {
  "id": 75,
  "problem": 19,
  "stage": 2,
  "title": "Linear Mass Density of a Metal Rod",
  "body": "$$\\lambda(x)=\\frac{dM}{dx}=6x\\quad (\\mathrm{kg/m}),\\quad x\\ge0.$$\n$$\\begin{array}{c|c} x\\ (\\mathrm m)&\\lambda(x)\\ (\\mathrm{kg/m})\\\\\\hline1&6\\\\2&12\\\\3&18\\end{array}$$"
 },
 {
  "id": 76,
  "problem": 19,
  "stage": 3,
  "title": "Linear Mass Density of a Metal Rod",
  "body": "Among the three specified points, density is smallest at $x=1$ and largest at $x=3$. Example: a narrow section of length $0.1\\ \\mathrm m$ near $x=2$ has approximate mass $12(0.1)=1.2\\ \\mathrm{kg}$. This is a local estimate, not the entire rod's mass."
 },
 {
  "id": 77,
  "problem": 20,
  "stage": 0,
  "title": "Electric Current as the Rate of Charge Flow",
  "body": "The charge that passes a point in a wire is $Q(t)=t^3-2t^2+6t+2$ coulombs, where time $t$ is in seconds. Find the current at $t=0.5$ and $t=1$, and determine when the current is smallest for $t\\ge0$."
 },
 {
  "id": 78,
  "problem": 20,
  "stage": 1,
  "title": "Electric Current as the Rate of Charge Flow",
  "body": "The electric current is $I(t)=dQ/dt$ with units coulombs per second, i.e. amperes. First differentiate the polynomial. Then optimize the resulting quadratic $I(t)$ using its vertex or by differentiating once more and locating $I'(t)=0$."
 },
 {
  "id": 79,
  "problem": 20,
  "stage": 2,
  "title": "Electric Current as the Rate of Charge Flow",
  "body": "$$I(t)=3t^2-4t+6\\quad(\\mathrm A).$$\n$$I(0.5)=3(0.25)-4(0.5)+6=\\boxed{4.75\\ \\mathrm A}.$$\n$$I(1)=3-4+6=\\boxed{5\\ \\mathrm A}.$$\n$$I'(t)=6t-4=0\\iff t=\\frac23\\ \\mathrm s,\\quad I\\left(\\frac23\\right)=\\boxed{\\frac{14}{3}\\ \\mathrm A}.$$"
 },
 {
  "id": 80,
  "problem": 20,
  "stage": 3,
  "title": "Electric Current as the Rate of Charge Flow",
  "body": "Because $I''(t)=6>0$, the critical point $t=2/3$ is a minimum (and is in the physical domain $t\\ge0$). Notice $I(t)>0$ throughout: the charge transferred continues increasing even though current first decreases then rises."
 },
 {
  "id": 81,
  "problem": 21,
  "stage": 0,
  "title": "Gravity and Sensitivity to Distance",
  "body": "Newton's gravitational force magnitude follows $F(r)=\\frac{GmM}{r^2}$ for $r>0$. Find $dF/dr$ and interpret its sign. If the force decreases at $2\\ \\mathrm{N/km}$ when $r=20{,}000\\ \\mathrm{km}$, what is $dF/dr$ at $r=10{,}000\\ \\mathrm{km}$?"
 },
 {
  "id": 82,
  "problem": 21,
  "stage": 1,
  "title": "Gravity and Sensitivity to Distance",
  "body": "Write $K=GmM>0$ so $F(r)=Kr^{-2}$ and $F'(r)=-2Kr^{-3}$. Compare the derivatives at the two distances by taking a ratio; $K$ cancels. Distinguish a derivative with respect to distance ($\\mathrm{N/km}$) from force measured in newtons."
 },
 {
  "id": 83,
  "problem": 21,
  "stage": 2,
  "title": "Gravity and Sensitivity to Distance",
  "body": "$$\\frac{dF}{dr}=-\\frac{2GmM}{r^3}<0.$$\n$$\\frac{F'(10{,}000)}{F'(20{,}000)}=\\left(\\frac{20{,}000}{10{,}000}\\right)^3=8.$$\n$$F'(10{,}000)=8\\big(-2\\ \\mathrm{N/km}\\big)=\\boxed{-16\\ \\mathrm{N/km}}.$$"
 },
 {
  "id": 84,
  "problem": 21,
  "stage": 3,
  "title": "Gravity and Sensitivity to Distance",
  "body": "The negative derivative means force **decreases as distance increases**. Halving the separation makes the **force four times** as large but makes the **magnitude of its spatial derivative eight times** as large. These are different scaling laws; illustrate both rather than confusing force with its sensitivity."
 },
 {
  "id": 85,
  "problem": 22,
  "stage": 0,
  "title": "Streetlight, Walking Person, Moving Shadow",
  "body": "A streetlight is at the top of a 15-ft pole. A 6-ft-tall person walks away from it at $dx/dt=5\\ \\mathrm{ft/s}$. Find the speed of the **tip** of the person's shadow when the person is 40 ft from the pole."
 },
 {
  "id": 86,
  "problem": 22,
  "stage": 1,
  "title": "Streetlight, Walking Person, Moving Shadow",
  "body": "Draw a side-view with pole height 15, person height 6, horizontal distance $x$ to the person, shadow length $s$, and tip coordinate $z=x+s$. Similar triangles imply $\\frac{15}{x+s}=\\frac6s$. Differentiate the resulting relation with respect to time; differentiate $z=x+s$ to answer the question about the **tip**, not merely the shadow length."
 },
 {
  "id": 87,
  "problem": 22,
  "stage": 2,
  "title": "Streetlight, Walking Person, Moving Shadow",
  "body": "$$15s=6(x+s)\\quad\\Longrightarrow\\quad 9s=6x\\quad\\Longrightarrow\\quad s=\\frac23x.$$\n$$\\frac{ds}{dt}=\\frac23\\frac{dx}{dt}=\\frac{10}{3}\\ \\mathrm{ft/s}.$$\n$$z=x+s=\\frac53x\\quad\\Longrightarrow\\quad\\boxed{\\frac{dz}{dt}=\\frac53(5)=\\frac{25}{3}\\ \\mathrm{ft/s}}.$$"
 },
 {
  "id": 88,
  "problem": 22,
  "stage": 3,
  "title": "Streetlight, Walking Person, Moving Shadow",
  "body": "The speed of the shadow tip is $25/3\\approx8.33\\ \\mathrm{ft/s}$, not $10/3\\ \\mathrm{ft/s}$ (that is only the growth rate of shadow **length**). At $x=40$, $s=80/3\\ \\mathrm{ft}$, but the speed is independent of $x$ in this constant-height model."
 },
 {
  "id": 89,
  "problem": 23,
  "stage": 0,
  "title": "Two Cars Moving at Right Angles",
  "body": "Two cars start at the same point at the same time. One drives south at $60\\ \\mathrm{mi/h}$, the other west at $25\\ \\mathrm{mi/h}$. Find the rate at which their separation increases two hours later."
 },
 {
  "id": 90,
  "problem": 23,
  "stage": 1,
  "title": "Two Cars Moving at Right Angles",
  "body": "Use perpendicular displacement components $x=25t$ (west) and $y=60t$ (south). Pythagoras gives $d^2=x^2+y^2$. Differentiate with respect to time: $2d\\,d'=2xx'+2yy'$. Evaluate at $t=2$ or simplify $d(t)$ first."
 },
 {
  "id": 91,
  "problem": 23,
  "stage": 2,
  "title": "Two Cars Moving at Right Angles",
  "body": "$$d(t)=\\sqrt{(25t)^2+(60t)^2}=\\sqrt{4225t^2}=65t\\quad(t\\ge0).$$\n$$\\boxed{\\frac{dd}{dt}=65\\ \\mathrm{mi/h}}.$$\n$$d(2)=130\\ \\mathrm{mi},\\quad x(2)=50\\ \\mathrm{mi},\\quad y(2)=120\\ \\mathrm{mi}.$$"
 },
 {
  "id": 92,
  "problem": 23,
  "stage": 3,
  "title": "Two Cars Moving at Right Angles",
  "body": "Check by implicit differentiation: $d'=\\frac{xx'+yy'}d=\\frac{50(25)+120(60)}{130}=65\\ \\mathrm{mi/h}$. The question asks the rate at two hours, not the distance; $130\\ \\mathrm{mi}$ is an intermediate result. For constant perpendicular velocities starting together, $d'$ is constant."
 },
 {
  "id": 93,
  "problem": 24,
  "stage": 0,
  "title": "Growing Conical Pile of Gravel",
  "body": "Gravel is deposited at $dV/dt=30\\ \\mathrm{ft^3/min}$, forming a right circular cone whose base **diameter equals its height** at all times. Find $dh/dt$ when the pile is $10\\ \\mathrm{ft}$ high."
 },
 {
  "id": 94,
  "problem": 24,
  "stage": 1,
  "title": "Growing Conical Pile of Gravel",
  "body": "Write the geometric constraint $2r=h$, so $r=h/2$. Substitute it into $V=\\frac13\\pi r^2h$ **before differentiating**, turning a two-variable relation into a function of $h$ alone. Use the Chain Rule with respect to $t$."
 },
 {
  "id": 95,
  "problem": 24,
  "stage": 2,
  "title": "Growing Conical Pile of Gravel",
  "body": "$$V=\\frac13\\pi\\left(\\frac h2\\right)^2h=\\frac{\\pi h^3}{12}.$$\n$$\\frac{dV}{dt}=\\frac{\\pi}{12}(3h^2)\\frac{dh}{dt}=\\frac{\\pi h^2}{4}\\frac{dh}{dt}.$$\n$$30=\\frac{\\pi(10)^2}{4}\\frac{dh}{dt}=25\\pi\\frac{dh}{dt}.$$\n$$\\boxed{\\frac{dh}{dt}=\\frac6{5\\pi}\\ \\mathrm{ft/min}\\approx0.382\\ \\mathrm{ft/min}}.$$"
 },
 {
  "id": 96,
  "problem": 24,
  "stage": 3,
  "title": "Growing Conical Pile of Gravel",
  "body": "Volume increases at a constant rate, but pile height increases more slowly as its base area expands. Note $dV/dt$ and $dh/dt$ have different dimensions; never equate them. The cone's diameter-to-height constraint is essential."
 },
 {
  "id": 97,
  "problem": 25,
  "stage": 0,
  "title": "Actual Change Versus Differential",
  "body": "For $y=f(x)=x^2-4x$ at $x=3$ and $\\Delta x=dx=0.5$, compute the exact change $\\Delta y$ and the differential $dy$. Compare them in a graph."
 },
 {
  "id": 98,
  "problem": 25,
  "stage": 1,
  "title": "Actual Change Versus Differential",
  "body": "The *actual* change is $\\Delta y=f(x+\\Delta x)-f(x)$, whereas the *differential* is $dy=f'(x)\\,dx$. At a curved graph, these are generally different because the tangent gives only a linear approximation."
 },
 {
  "id": 99,
  "problem": 25,
  "stage": 2,
  "title": "Actual Change Versus Differential",
  "body": "$$f(3)=9-12=-3,\\qquad f(3.5)=12.25-14=-1.75.$$\n$$\\Delta y=f(3.5)-f(3)=-1.75-(-3)=\\boxed{1.25}.$$\n$$f'(x)=2x-4,\\qquad dy=f'(3)(0.5)=(6-4)(0.5)=\\boxed{1.0}.$$\n$$\\Delta y-dy=\\boxed{0.25}.$$"
 },
 {
  "id": 100,
  "problem": 25,
  "stage": 3,
  "title": "Actual Change Versus Differential",
  "body": "Because $f''(x)=2>0$, the curve lies above its tangent nearby, explaining why $\\Delta y>dy$ for nonzero $dx$ in this quadratic example. Mark the curve displacement (1.25 vertical units) and the tangent prediction (1.0 vertical unit) from the same starting point."
 },
 {
  "id": 101,
  "problem": 26,
  "stage": 0,
  "title": "Linear Approximation of 1.999⁴",
  "body": "Estimate $(1.999)^4$ using a linear approximation centered at a convenient nearby point. Give the numerical estimate, and show the direction of the approximation error."
 },
 {
  "id": 102,
  "problem": 26,
  "stage": 1,
  "title": "Linear Approximation of 1.999⁴",
  "body": "Choose $f(x)=x^4$ and $a=2$ because $f(2)=16$ and $f'(2)=32$ are exact. Write $x=2+dx$ with $dx=-0.001$, and apply $f(x)\\approx f(a)+f'(a)(x-a)$. Differentiate exactly before substituting."
 },
 {
  "id": 103,
  "problem": 26,
  "stage": 2,
  "title": "Linear Approximation of 1.999⁴",
  "body": "$$f(x)=x^4,\\qquad f'(x)=4x^3,\\qquad f'(2)=32.$$\n$$L(x)=16+32(x-2).$$\n$$\\boxed{(1.999)^4\\approx L(1.999)=16+32(-0.001)=15.968}. $$"
 },
 {
  "id": 104,
  "problem": 26,
  "stage": 3,
  "title": "Linear Approximation of 1.999⁴",
  "body": "The true value is $(1.999)^4=15.968023992001$, so $L(1.999)$ is an **underestimate** by approximately $2.3992001\\times10^{-5}$. This is consistent with $f''(x)=12x^2>0$ near $x=2$: the tangent lies below the convex graph. Put the approximation and exact comparison visibly on screen."
 },
 {
  "id": 105,
  "problem": 27,
  "stage": 0,
  "title": "Measurement Error in the Area of a Disk",
  "body": "A circular disk's measured radius is $r=24\\ \\mathrm{cm}$ with maximum measurement error $|dr|=0.2\\ \\mathrm{cm}$. Use differentials to estimate the maximum absolute error, relative error, and percentage error in the calculated area."
 },
 {
  "id": 106,
  "problem": 27,
  "stage": 1,
  "title": "Measurement Error in the Area of a Disk",
  "body": "Use $A(r)=\\pi r^2$. Differentials give $dA=2\\pi r\\,dr$. For the maximum *magnitude*, take absolute values. Compute the nominal area $A=\\pi(24)^2=576\\pi\\ \\mathrm{cm^2}$ before dividing to obtain relative error."
 },
 {
  "id": 107,
  "problem": 27,
  "stage": 2,
  "title": "Measurement Error in the Area of a Disk",
  "body": "$$|dA|\\approx 2\\pi(24)(0.2)=\\boxed{9.6\\pi\\ \\mathrm{cm^2}}.$$\n$$\\frac{|dA|}{A}\\approx\\frac{9.6\\pi}{576\\pi}=\\boxed{\\frac1{60}\\approx0.016667}.$$\n$$\\boxed{\\text{Percentage error}\\approx1.667\\%}. $$"
 },
 {
  "id": 108,
  "problem": 27,
  "stage": 3,
  "title": "Measurement Error in the Area of a Disk",
  "body": "The first-order relation $\\frac{|dA|}A\\approx2\\frac{|dr|}r$ shows that a 0.8333% radius error yields roughly twice that percentage in area. This is a *differential estimate*, not an assertion that the exact area error equals $9.6\\pi$: the finite-change formula contains the additional $(dr)^2$ term."
 }
];
