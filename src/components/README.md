# DESIGN SYSTEM

## What is this? 🤔

This folder is the project's DESIGN SYSTEM. We try to follow the principles of Atomic Design at Nstep (Frost, 2016).

> <https://bradfrost.com/blog/post/atomic-web-design/>

The intent of this is to see your design thinking process, as well as your ability to build reusable Tailwind-based components.

## Principles 📐

Take these with a grain of salt, but the design system should allow fellow engineers to:

> BREAK WITHIN BOUNDARIES

## Requirements 🦾

A couple of requirements for the design-system-level components:

- All components need to be ref-forwardable.
- All components need to forward all valid HTML props of to its underlying HTML element.
  - `aria-*` props, `on-` event handlers, etc.
- All components need to be customisable/overridable via the `className` props with tailwind classes.
  - You can decide what level of customisation is possible.
    > _e.g. className="p-8" should give a thicker padding._
- All components need to be interactable with via mouse, tap, and keyboard in some way.

## Bonuses 🍰

If you take a look in the Extendable family (Extendable > Popover > Dropdown), you'll see that each of them
has a bonuses that cover different caveats of design architecture.

These are entire **_OPTIONAL_**, if you can explain your thought process
on how to gradually tackle them, it's already a big plus ✅
