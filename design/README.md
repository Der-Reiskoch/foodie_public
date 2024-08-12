# Design system

Visually, we follow the current Design of [Der Reiskoch](https://www.der-reiskoch.de/)  
Our design system is based on [Material 3](https://m3.material.io/).

## Design tokens

Token naming is based on [Material Web](https://material-web.dev/).
All tokens are prefixed with `--khao-` (short for JobRad store locator) to prevent naming overlaps with host applications such as the marketing website.

### Types of tokens

- Reference tokens
  - prefixed with `--khao-ref-`
  - only assigned to system tokens, never used in components directly
- System tokens
  - prefixed with `--khao-sys-`
- Component tokens
  - prefixed with `--khao-<component-name>-`, e.g. `--khao-button-`

Read more about [types of tokens](https://m3.material.io/foundations/design-tokens/how-to-read-tokens).
