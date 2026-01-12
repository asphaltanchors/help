---
title: Product Link Syntax Test
description: Testing the [[CODE]] product reference syntax
---

## Basic Product References

### Single Product
Use the [[SP10]] anchor for small applications.

### Multiple Products on Same Line
We offer [[SP10]] and [[SP18]] anchors, as well as [[SP12]] for medium loads.

### In Different Contexts
- List item with [[SP58]] reference
- Another item with [[AM625]]

| Product | Reference |
| ------- | --------- |
| SP10 | [[SP10]] |
| EPX2 | [[EPX2]] |

## Edge Cases

### Unknown Product Code
This code doesn't exist: [[UNKNOWN]]

### Incomplete Syntax (Should NOT Transform)
These should stay as literal text:
- Single brackets: [SP10]
- Incomplete open: [[SP10
- Incomplete close: SP10]]
- Mismatched: [SP10]]

### Mixed Case (Should NOT Transform)
Lowercase should stay literal: [[sp10]]

### In Headings
#### Installing [[SP18]] Anchors

### In Code (Should NOT Transform)
Inline code: `[[SP10]]`

Code block:
\`\`\`
Use [[SP10]] in your configuration
\`\`\`

## All Valid Product Codes
- [[SP10]]
- [[SP12]]
- [[SP18]]
- [[SP58]]
- [[AM625]]
- [[EPX2]]
