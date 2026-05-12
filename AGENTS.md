# AGENTS.md

## Project Identity
- This project is a curated Sharjah land opportunities platform, not a generic real estate website.
- Positioning: "We identify undervalued land opportunities in Sharjah before the market moves."
- Primary objective: premium lead generation for curated land opportunities.

## Business Flow
- Required flow: traffic -> land opportunity interest -> lead capture -> WhatsApp/contact -> viewing -> deal.
- Every feature decision must support this flow directly.

## Scope Constraints
- Do not build a generic property portal.
- Do not build apartment or villa marketplace features.
- Do not build rent-platform features.
- Do not introduce bedroom/bathroom/furnished style filtering unless explicitly requested.
- Do not add user accounts, saved searches, advanced maps, dashboards, or unnecessary APIs unless explicitly requested.

## Language and Content Rules
- Use land-first language everywhere in UI copy, components, route names, and internal naming.
- Avoid terms such as apartments, villas, bedrooms, bathrooms, rent, furnished unless explicitly requested.
- Keep tone investment-focused, advisory-led, and premium.

## Conversion Rules
- Prioritize lead capture and WhatsApp conversion on every key page.
- Each page should have one clear primary CTA.
- Minimize distractions and secondary actions that compete with the primary CTA.

## UI Direction
- Visual style: minimal, premium, clean.
- Interaction style: fast, direct, confidence-building.
- Avoid cluttered portal-style interfaces.

## Internationalization
- Arabic and English support must be considered from the start.
- New UI work should be structured to avoid hard-locking copy to one language.
- Prefer centralized strings for future bilingual rollout.

## Architecture and Engineering Rules
- Keep code simple and readable.
- Avoid unnecessary abstractions and overengineering.
- Do not create API-first architecture unless asked.
- Use Laravel controllers + Inertia pages directly for initial flows.
- Prefer straightforward server-rendered Inertia flow over complex client state architecture.
- Do not create fake production-heavy data structures.
- Do not perform large refactors unless requested.

## Implementation Style
- Optimize for delivery speed and maintainability.
- Add only the minimum structure needed for the current stage.
- Do not add comments inside code unless absolutely necessary.

## Task Discipline
- For each new request, implement only what is requested.
- If a requested change conflicts with these rules, flag the conflict before proceeding.
