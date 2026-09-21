// Diagram library for hotspot drills: hand-authored inline SVG with named,
// clickable regions.
//
// Used by the "hotspot" drill type in docs/drills.js, where an item names a
// diagram and the `data-region` the user is being asked to find. One diagram
// supports many questions — the monopoly diagram alone carries six — which is
// what makes authoring them worth the effort.
//
// Structure of every diagram, in three layers bottom to top:
//   .dg-axes   the axes and their titles
//   .dg-art    the visible artwork: curves, guide lines, labels. Purely
//              decorative and never clickable.
//   .dg-hot    the interactive layer. One <g class="hot" data-region="...">
//              per answerable region, each containing:
//                .hot-mark  the highlight, invisible until hovered or marked,
//                           in the same geometry as the artwork beneath it
//                .hot-hit   a fat transparent shape giving a finger-sized
//                           target — curves are 2.5px wide on screen and
//                           nobody can tap that on a phone
//
// Keeping artwork and interaction in separate layers means marking an answer
// only toggles a class on the hot group; the artwork underneath never moves
// or restyles, so a wrong answer can't make the diagram itself misleading.
//
// Colours come from the theme tokens (var(--...)), so every diagram follows
// the light/dark toggle. Nothing here hard-codes a colour.
//
// Coordinates: a 420x300 viewBox, plot area x 60..390 and y 40..250, so the
// origin sits at (60, 250). Curve intersections below are computed, not
// eyeballed — a diagram that teaches the wrong intersection is worse than no
// diagram.
const DIAGRAMS = {
  "supply-demand": {
    title: "A competitive market in equilibrium",
    svg: `
<svg viewBox="0 0 420 300" class="dg-svg" role="img" aria-label="Supply and demand diagram with equilibrium price and quantity, and consumer and producer surplus areas">
  <g class="dg-axes">
    <line x1="60" y1="40" x2="60" y2="250"/>
    <line x1="60" y1="250" x2="395" y2="250"/>
    <text class="dg-axis-title" x="18" y="46">Price</text>
    <text class="dg-axis-title" x="350" y="272">Quantity</text>
  </g>
  <g class="dg-art">
    <line class="dg-guide" x1="60" y1="150" x2="225" y2="150"/>
    <line class="dg-guide" x1="225" y1="150" x2="225" y2="250"/>
    <path class="dg-curve" d="M 60 60 L 390 240"/>
    <path class="dg-curve" d="M 60 240 L 390 60"/>
    <circle class="dg-point" cx="225" cy="150" r="4.5"/>
    <text class="dg-label" x="396" y="243">D</text>
    <text class="dg-label" x="396" y="63">S</text>
    <text class="dg-label" x="36" y="154">P*</text>
    <text class="dg-label" x="219" y="266">Q*</text>
  </g>
  <g class="dg-hot">
    <g class="hot" data-region="demand-curve" tabindex="0" role="button" aria-label="The demand curve">
      <path class="hot-mark line" d="M 60 60 L 390 240"/>
      <path class="hot-hit" d="M 60 60 L 390 240"/>
    </g>
    <g class="hot" data-region="supply-curve" tabindex="0" role="button" aria-label="The supply curve">
      <path class="hot-mark line" d="M 60 240 L 390 60"/>
      <path class="hot-hit" d="M 60 240 L 390 60"/>
    </g>
    <g class="hot" data-region="consumer-surplus" tabindex="0" role="button" aria-label="The area between the demand curve and the equilibrium price">
      <path class="hot-mark area" d="M 60 60 L 225 150 L 60 150 Z"/>
      <path class="hot-hit area" d="M 60 60 L 225 150 L 60 150 Z"/>
    </g>
    <g class="hot" data-region="producer-surplus" tabindex="0" role="button" aria-label="The area between the equilibrium price and the supply curve">
      <path class="hot-mark area" d="M 60 240 L 225 150 L 60 150 Z"/>
      <path class="hot-hit area" d="M 60 240 L 225 150 L 60 150 Z"/>
    </g>
    <g class="hot" data-region="equilibrium" tabindex="0" role="button" aria-label="The point where supply and demand cross">
      <circle class="hot-mark dot" cx="225" cy="150" r="9"/>
      <circle class="hot-hit" cx="225" cy="150" r="17"/>
    </g>
  </g>
</svg>`,
  },

  "demand-shift": {
    title: "An increase in demand, supply unchanged",
    svg: `
<svg viewBox="0 0 420 300" class="dg-svg" role="img" aria-label="Supply and demand diagram showing the demand curve shifting right from D1 to D2, with old and new equilibrium points">
  <g class="dg-axes">
    <line x1="60" y1="40" x2="60" y2="250"/>
    <line x1="60" y1="250" x2="395" y2="250"/>
    <text class="dg-axis-title" x="18" y="46">Price</text>
    <text class="dg-axis-title" x="350" y="272">Quantity</text>
  </g>
  <g class="dg-art">
    <path class="dg-curve" d="M 60 240 L 390 60"/>
    <path class="dg-curve" d="M 60 70 L 330 230"/>
    <path class="dg-curve" d="M 130 70 L 390 224"/>
    <path class="dg-arrow" d="M 175 140 L 225 170"/>
    <circle class="dg-point" cx="209" cy="159" r="4.5"/>
    <circle class="dg-point" cx="246" cy="139" r="4.5"/>
    <text class="dg-label" x="396" y="63">S</text>
    <text class="dg-label" x="332" y="243">D&#8321;</text>
    <text class="dg-label" x="394" y="232">D&#8322;</text>
  </g>
  <g class="dg-hot">
    <g class="hot" data-region="supply-curve" tabindex="0" role="button" aria-label="The supply curve">
      <path class="hot-mark line" d="M 60 240 L 390 60"/>
      <path class="hot-hit" d="M 60 240 L 390 60"/>
    </g>
    <g class="hot" data-region="original-demand" tabindex="0" role="button" aria-label="The original demand curve D1">
      <path class="hot-mark line" d="M 60 70 L 330 230"/>
      <path class="hot-hit" d="M 60 70 L 330 230"/>
    </g>
    <g class="hot" data-region="new-demand" tabindex="0" role="button" aria-label="The new demand curve D2">
      <path class="hot-mark line" d="M 130 70 L 390 224"/>
      <path class="hot-hit" d="M 130 70 L 390 224"/>
    </g>
    <g class="hot" data-region="original-equilibrium" tabindex="0" role="button" aria-label="The original equilibrium point">
      <circle class="hot-mark dot" cx="209" cy="159" r="9"/>
      <circle class="hot-hit" cx="209" cy="159" r="16"/>
    </g>
    <g class="hot" data-region="new-equilibrium" tabindex="0" role="button" aria-label="The new equilibrium point">
      <circle class="hot-mark dot" cx="246" cy="139" r="9"/>
      <circle class="hot-hit" cx="246" cy="139" r="16"/>
    </g>
  </g>
</svg>`,
  },

  monopoly: {
    title: "A profit-maximising monopolist",
    svg: `
<svg viewBox="0 0 420 300" class="dg-svg" role="img" aria-label="Monopoly diagram with average revenue, marginal revenue, marginal cost and average cost curves, showing the profit-maximising output and the price charged">
  <g class="dg-axes">
    <line x1="60" y1="40" x2="60" y2="250"/>
    <line x1="60" y1="250" x2="395" y2="250"/>
    <text class="dg-axis-title" x="12" y="46">Price,</text>
    <text class="dg-axis-title" x="12" y="58">cost</text>
    <text class="dg-axis-title" x="350" y="272">Quantity</text>
  </g>
  <g class="dg-art">
    <line class="dg-guide" x1="60" y1="116" x2="166" y2="116"/>
    <line class="dg-guide" x1="166" y1="116" x2="166" y2="250"/>
    <path class="dg-curve" d="M 60 55 L 390 245"/>
    <path class="dg-curve dashed" d="M 60 55 L 225 245"/>
    <path class="dg-curve" d="M 60 225 L 390 75"/>
    <path class="dg-curve muted" d="M 80 140 Q 200 250 390 120"/>
    <circle class="dg-point" cx="166" cy="177" r="4"/>
    <text class="dg-label" x="394" y="248">AR = D</text>
    <text class="dg-label" x="228" y="252">MR</text>
    <text class="dg-label" x="394" y="78">MC</text>
    <text class="dg-label" x="394" y="123">AC</text>
    <text class="dg-label" x="34" y="120">P&#8344;</text>
    <text class="dg-label" x="159" y="266">Q&#8344;</text>
  </g>
  <g class="dg-hot">
    <g class="hot" data-region="ar-curve" tabindex="0" role="button" aria-label="The average revenue or demand curve">
      <path class="hot-mark line" d="M 60 55 L 390 245"/>
      <path class="hot-hit" d="M 60 55 L 390 245"/>
    </g>
    <g class="hot" data-region="mr-curve" tabindex="0" role="button" aria-label="The marginal revenue curve">
      <path class="hot-mark line" d="M 60 55 L 225 245"/>
      <path class="hot-hit" d="M 60 55 L 225 245"/>
    </g>
    <g class="hot" data-region="mc-curve" tabindex="0" role="button" aria-label="The marginal cost curve">
      <path class="hot-mark line" d="M 60 225 L 390 75"/>
      <path class="hot-hit" d="M 60 225 L 390 75"/>
    </g>
    <g class="hot" data-region="ac-curve" tabindex="0" role="button" aria-label="The average cost curve">
      <path class="hot-mark line" d="M 80 140 Q 200 250 390 120"/>
      <path class="hot-hit" d="M 80 140 Q 200 250 390 120"/>
    </g>
    <g class="hot" data-region="profit-max-output" tabindex="0" role="button" aria-label="The output level on the quantity axis where marginal revenue equals marginal cost">
      <circle class="hot-mark dot" cx="166" cy="250" r="9"/>
      <circle class="hot-hit" cx="166" cy="250" r="17"/>
    </g>
    <g class="hot" data-region="monopoly-price" tabindex="0" role="button" aria-label="The price charged, read off the price axis">
      <circle class="hot-mark dot" cx="60" cy="116" r="9"/>
      <circle class="hot-hit" cx="60" cy="116" r="17"/>
    </g>
  </g>
</svg>`,
  },

  "perfect-competition-firm": {
    title: "A price-taking firm in long-run equilibrium",
    svg: `
<svg viewBox="0 0 420 300" class="dg-svg" role="img" aria-label="Perfectly competitive firm diagram: a horizontal demand curve tangent to the minimum of the average cost curve, with marginal cost passing through that point">
  <g class="dg-axes">
    <line x1="60" y1="40" x2="60" y2="250"/>
    <line x1="60" y1="250" x2="395" y2="250"/>
    <text class="dg-axis-title" x="12" y="46">Price,</text>
    <text class="dg-axis-title" x="12" y="58">cost</text>
    <text class="dg-axis-title" x="350" y="272">Quantity</text>
  </g>
  <g class="dg-art">
    <line class="dg-guide" x1="225" y1="150" x2="225" y2="250"/>
    <path class="dg-curve" d="M 60 150 L 390 150"/>
    <path class="dg-curve muted" d="M 90 90 Q 225 210 360 90"/>
    <path class="dg-curve" d="M 100 225 C 175 200 195 180 225 150 C 265 110 310 95 350 75"/>
    <circle class="dg-point" cx="225" cy="150" r="4.5"/>
    <text class="dg-label" x="394" y="154">D = AR = MR</text>
    <text class="dg-label" x="362" y="90">AC</text>
    <text class="dg-label" x="352" y="70">MC</text>
    <text class="dg-label" x="219" y="266">Q*</text>
  </g>
  <g class="dg-hot">
    <g class="hot" data-region="demand-curve" tabindex="0" role="button" aria-label="The firm's horizontal demand curve">
      <path class="hot-mark line" d="M 60 150 L 390 150"/>
      <path class="hot-hit" d="M 60 150 L 390 150"/>
    </g>
    <g class="hot" data-region="ac-curve" tabindex="0" role="button" aria-label="The average cost curve">
      <path class="hot-mark line" d="M 90 90 Q 225 210 360 90"/>
      <path class="hot-hit" d="M 90 90 Q 225 210 360 90"/>
    </g>
    <g class="hot" data-region="mc-curve" tabindex="0" role="button" aria-label="The marginal cost curve">
      <path class="hot-mark line" d="M 100 225 C 175 200 195 180 225 150 C 265 110 310 95 350 75"/>
      <path class="hot-hit" d="M 100 225 C 175 200 195 180 225 150 C 265 110 310 95 350 75"/>
    </g>
    <g class="hot" data-region="min-ac-point" tabindex="0" role="button" aria-label="The lowest point on the average cost curve">
      <circle class="hot-mark dot" cx="225" cy="150" r="9"/>
      <circle class="hot-hit" cx="225" cy="150" r="17"/>
    </g>
    <g class="hot" data-region="profit-max-output" tabindex="0" role="button" aria-label="The output level on the quantity axis">
      <circle class="hot-mark dot" cx="225" cy="250" r="9"/>
      <circle class="hot-hit" cx="225" cy="250" r="17"/>
    </g>
  </g>
</svg>`,
  },

  "negative-externality": {
    title: "A market with a negative production externality",
    svg: `
<svg viewBox="0 0 420 300" class="dg-svg" role="img" aria-label="Negative externality diagram: marginal social cost lies above marginal private cost, so the market output exceeds the social optimum, creating a deadweight loss triangle">
  <g class="dg-axes">
    <line x1="60" y1="40" x2="60" y2="250"/>
    <line x1="60" y1="250" x2="395" y2="250"/>
    <text class="dg-axis-title" x="12" y="46">Price,</text>
    <text class="dg-axis-title" x="12" y="58">cost</text>
    <text class="dg-axis-title" x="350" y="272">Quantity</text>
  </g>
  <g class="dg-art">
    <line class="dg-guide" x1="168" y1="122" x2="168" y2="250"/>
    <line class="dg-guide" x1="228" y1="87" x2="228" y2="250"/>
    <path class="dg-curve" d="M 60 60 L 390 250"/>
    <path class="dg-curve" d="M 60 255 L 360 80"/>
    <path class="dg-curve" d="M 60 185 L 360 10"/>
    <path class="dg-dwl" d="M 168 122 L 228 157 L 228 87 Z"/>
    <circle class="dg-point" cx="228" cy="157" r="4"/>
    <circle class="dg-point" cx="168" cy="122" r="4"/>
    <text class="dg-label" x="394" y="253">D = MPB</text>
    <text class="dg-label" x="364" y="83">MPC</text>
    <text class="dg-label" x="364" y="13">MSC</text>
    <text class="dg-label" x="220" y="266">Q&#8344;</text>
    <text class="dg-label" x="160" y="266">Q*</text>
  </g>
  <g class="dg-hot">
    <g class="hot" data-region="demand-curve" tabindex="0" role="button" aria-label="The demand curve, marginal private benefit">
      <path class="hot-mark line" d="M 60 60 L 390 250"/>
      <path class="hot-hit" d="M 60 60 L 390 250"/>
    </g>
    <g class="hot" data-region="mpc-curve" tabindex="0" role="button" aria-label="The marginal private cost curve">
      <path class="hot-mark line" d="M 60 255 L 360 80"/>
      <path class="hot-hit" d="M 60 255 L 360 80"/>
    </g>
    <g class="hot" data-region="msc-curve" tabindex="0" role="button" aria-label="The marginal social cost curve">
      <path class="hot-mark line" d="M 60 185 L 360 10"/>
      <path class="hot-hit" d="M 60 185 L 360 10"/>
    </g>
    <g class="hot" data-region="deadweight-loss" tabindex="0" role="button" aria-label="The triangle between the two output levels bounded by demand and marginal social cost">
      <path class="hot-mark area" d="M 168 122 L 228 157 L 228 87 Z"/>
      <path class="hot-hit area" d="M 168 122 L 228 157 L 228 87 Z"/>
    </g>
    <g class="hot" data-region="market-output" tabindex="0" role="button" aria-label="The quantity the free market produces">
      <circle class="hot-mark dot" cx="228" cy="250" r="9"/>
      <circle class="hot-hit" cx="228" cy="250" r="16"/>
    </g>
    <g class="hot" data-region="social-optimum" tabindex="0" role="button" aria-label="The socially efficient quantity">
      <circle class="hot-mark dot" cx="168" cy="250" r="9"/>
      <circle class="hot-hit" cx="168" cy="250" r="16"/>
    </g>
  </g>
</svg>`,
  },

  "as-ad": {
    title: "The AS&ndash;AD model with a negative output gap",
    svg: `
<svg viewBox="0 0 420 300" class="dg-svg" role="img" aria-label="Aggregate supply and demand diagram with a vertical long-run aggregate supply curve to the right of the current equilibrium, showing a negative output gap">
  <g class="dg-axes">
    <line x1="60" y1="40" x2="60" y2="250"/>
    <line x1="60" y1="250" x2="395" y2="250"/>
    <text class="dg-axis-title" x="12" y="46">Price</text>
    <text class="dg-axis-title" x="12" y="58">level</text>
    <text class="dg-axis-title" x="330" y="272">Real output</text>
  </g>
  <g class="dg-art">
    <line class="dg-guide" x1="225" y1="160" x2="225" y2="250"/>
    <path class="dg-curve" d="M 250 40 L 250 250"/>
    <path class="dg-curve" d="M 60 70 L 390 250"/>
    <path class="dg-curve" d="M 60 240 L 390 80"/>
    <circle class="dg-point" cx="225" cy="160" r="4.5"/>
    <text class="dg-label" x="394" y="253">AD</text>
    <text class="dg-label" x="394" y="83">SRAS</text>
    <text class="dg-label" x="256" y="52">LRAS</text>
    <text class="dg-label" x="216" y="266">Y</text>
    <text class="dg-label" x="242" y="266">Y*</text>
  </g>
  <g class="dg-hot">
    <g class="hot" data-region="ad-curve" tabindex="0" role="button" aria-label="The aggregate demand curve">
      <path class="hot-mark line" d="M 60 70 L 390 250"/>
      <path class="hot-hit" d="M 60 70 L 390 250"/>
    </g>
    <g class="hot" data-region="sras-curve" tabindex="0" role="button" aria-label="The short-run aggregate supply curve">
      <path class="hot-mark line" d="M 60 240 L 390 80"/>
      <path class="hot-hit" d="M 60 240 L 390 80"/>
    </g>
    <g class="hot" data-region="lras-curve" tabindex="0" role="button" aria-label="The vertical long-run aggregate supply curve">
      <path class="hot-mark line" d="M 250 40 L 250 250"/>
      <path class="hot-hit" d="M 250 40 L 250 250"/>
    </g>
    <g class="hot" data-region="equilibrium" tabindex="0" role="button" aria-label="The current short-run equilibrium">
      <circle class="hot-mark dot" cx="225" cy="160" r="9"/>
      <circle class="hot-hit" cx="225" cy="160" r="16"/>
    </g>
    <g class="hot" data-region="potential-output" tabindex="0" role="button" aria-label="Potential output on the output axis">
      <circle class="hot-mark dot" cx="250" cy="250" r="9"/>
      <circle class="hot-hit" cx="250" cy="250" r="15"/>
    </g>
  </g>
</svg>`,
  },

  phillips: {
    title: "Short-run and long-run Phillips curves",
    svg: `
<svg viewBox="0 0 420 300" class="dg-svg" role="img" aria-label="Phillips curve diagram: a downward-sloping short-run curve crossing a vertical long-run curve at the natural rate of unemployment">
  <g class="dg-axes">
    <line x1="60" y1="40" x2="60" y2="250"/>
    <line x1="60" y1="250" x2="395" y2="250"/>
    <text class="dg-axis-title" x="12" y="46">Inflation</text>
    <text class="dg-axis-title" x="300" y="272">Unemployment</text>
  </g>
  <g class="dg-art">
    <path class="dg-curve" d="M 250 40 L 250 250"/>
    <path class="dg-curve" d="M 90 70 Q 180 220 370 243"/>
    <circle class="dg-point" cx="250" cy="185" r="4.5"/>
    <text class="dg-label" x="256" y="52">LRPC</text>
    <text class="dg-label" x="374" y="246">SRPC</text>
    <text class="dg-label" x="238" y="266">U&#8345;</text>
  </g>
  <g class="dg-hot">
    <g class="hot" data-region="srpc-curve" tabindex="0" role="button" aria-label="The short-run Phillips curve">
      <path class="hot-mark line" d="M 90 70 Q 180 220 370 243"/>
      <path class="hot-hit" d="M 90 70 Q 180 220 370 243"/>
    </g>
    <g class="hot" data-region="lrpc-curve" tabindex="0" role="button" aria-label="The long-run Phillips curve">
      <path class="hot-mark line" d="M 250 40 L 250 250"/>
      <path class="hot-hit" d="M 250 40 L 250 250"/>
    </g>
    <g class="hot" data-region="natural-rate" tabindex="0" role="button" aria-label="The natural rate of unemployment on the horizontal axis">
      <circle class="hot-mark dot" cx="250" cy="250" r="9"/>
      <circle class="hot-hit" cx="250" cy="250" r="17"/>
    </g>
  </g>
</svg>`,
  },
};

if (typeof module !== "undefined" && module.exports) module.exports = DIAGRAMS;
