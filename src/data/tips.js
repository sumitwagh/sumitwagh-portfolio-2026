// Original design tips written for this portfolio — practical, opinionated, healthcare-informed.
export const tips = [
  {
    n: '01',
    title: 'Design for the tired user, not the demo',
    category: 'Product',
    body: 'The person using your interface at 4pm on their fortieth claim is your real user. Reduce decisions, keep primary actions in the same place on every screen, and make the common path boringly obvious. Delight is nice; predictability is what earns trust in high-stakes workflows.',
  },
  {
    n: '02',
    title: 'Contrast is a feature, not a preference',
    category: 'Accessibility',
    body: 'Ship every text and UI color against WCAG AA as a hard gate. In clinical and financial tools, low-contrast “aesthetic” gray text isn’t minimal — it’s a barrier. Test in bright rooms and on cheap monitors, because that’s where your work actually lives.',
  },
  {
    n: '03',
    title: 'Name things the way people say them',
    category: 'Content',
    body: 'Label controls by what the user recognizes and controls, never by how the system is built. A person manages “Follow-ups,” not “async task queue.” The vocabulary of an interface is its signposting — keep an action’s name identical from button to confirmation toast.',
  },
  {
    n: '04',
    title: 'Spacing is hierarchy you can feel',
    category: 'Craft',
    body: 'Before reaching for bold weights or accent colors, fix the space. Group related items tightly, separate unrelated ones generously, and use one consistent spacing scale. Most “cluttered” screens aren’t missing polish — they’re missing whitespace discipline.',
  },
  {
    n: '05',
    title: 'Empty and error states are the real UX',
    category: 'Systems',
    body: 'Happy-path screens are easy. The measure of a design system is what happens when data is missing, a payer times out, or a claim is denied. Explain what happened, in the product’s voice, and always offer the next action. An empty screen should be an invitation, not a dead end.',
  },
  {
    n: '06',
    title: 'Animate to explain, never to impress',
    category: 'Motion',
    body: 'Good motion shows where something came from and where it went — a panel slides from the button that opened it. Keep it under 300ms, respect prefers-reduced-motion, and cut anything that only exists to look clever. If an animation doesn’t aid comprehension, it’s latency.',
  },
]
