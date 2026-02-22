---
title: "Align Visual Style with Digg.se"
area: "ux-design"
status: "todo"
priority: "high"
created: "2026-02-22"
---

# Align Visual Style with Digg.se

The user wants the portal's aesthetic to mirror `https://www.digg.se/` while remaining white-labeled (no Digg logo/name).

**Objective**: Update the Docusaurus theme (CSS, fonts, layout) to match the professional and clean design of Digg.se.

**Key Design Elements (Inferred from Research)**:
- **Color Palette**: 
  - Primary blue for links and headers.
  - Accent colors: Red/Orange (`#cd7a6e`) and Green (`#5a6751`) for specific buttons.
  - Backgrounds: Off-white/Light grey (`#f8f9fa`) for sections.
- **Typography**: Modern sans-serif (system stack or similar to Arial/Helvetica).
- **Layout**: 
  - Centered content columns with generous horizontal padding.
  - Consistent vertical spacing between blocks.
- **Components**: 
  - Rounded corners for buttons and cards.
  - Solid background colors for primary actions.
  - Underlined links within text.

**Key Tasks**:
- [ ] Implement Digg-inspired color palette in `src/css/custom.css`.
- [ ] Adjust typography settings (font-family, line-height, weight).
- [ ] Refactor the Docusaurus Header and Footer to match Digg's structure (layout and background colors).
- [ ] Update button and component styles (border-radius, padding, transitions).
- [ ] Ensure the "Nyheter" (Blog) layout matches Digg's article lists.

**Desired Outcome**: A site that feels visually identical to Digg.se in terms of professional quality and layout, but branded for SIB.
