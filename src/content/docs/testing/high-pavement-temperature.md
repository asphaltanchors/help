---
title: High Pavement Temperature and Anchor Capacity
description: How pavement temperature, asphalt binder grade, and mix characteristics affect Asphalt Anchor pull capacity.
---

Asphalt becomes less stiff as it heats, which can reduce the pull capacity of an installed anchor. The size of that reduction is not determined by temperature alone. Binder grade and modification, recycled asphalt content, aggregate structure, air voids, pavement age, load duration, and the temperature through the anchor's embedment depth can all affect performance.

Our current measurements establish a useful reference curve for one pavement: professionally installed, approximately one-year-old PG64-16 asphalt in Sonoma County. They do not establish a universal temperature correction for all asphalt mixtures.

:::caution[Do not use this page as a universal derating table]
The calculations below are preliminary planning scenarios, not published capacity ratings. For critical applications exposed to hot pavement, use site-specific pull testing or [contact us](https://asphaltanchors.com/pages/contact) for guidance.
:::

## What We Measured

On the tested PG64-16 pavement, measured pull capacity above an 80°F pavement surface temperature declined approximately 10–15% for each additional 10°F, with installation-to-installation variation.

For preliminary analysis, we use a central estimate of 12% per 10°F:

`Reference strength fraction = 0.88 ^ ((pavement surface temperature - 80) / 10)`

The fraction is capped at 100%. This curve describes the Sonoma test pavement; it is not a validated correction for other asphalt mixtures.

For example, at 130°F the central estimate is approximately 53% of cool-temperature pull capacity. Applying the full observed 10–15% range produces a much broader estimate of approximately 44–59%. That spread is one reason a single calculated value should not be treated as an allowable load.

For the test setup and rating criteria, see [Pull Test Methodology](/testing/pull-test-methodology/).

## Preliminary Binder-Grade Scenarios

Higher-temperature PG binders are intended to retain suitable properties at higher pavement design temperatures. Because the numeric PG high grades are expressed in degrees Celsius, the factor of 1.8 below converts the grade difference to degrees Fahrenheit. We are evaluating a first-order scenario model that shifts the Sonoma PG64 curve according to the high PG grade:

`Sonoma-equivalent temperature = actual pavement temperature - 1.8 × (target PG high grade - 64)`

This gives the following provisional temperature shifts:

| Binder scenario | Shift applied before using the Sonoma curve |
| --- | ---: |
| PG64 | 0°F |
| PG70 | 10.8°F cooler |
| PG76 | 21.6°F cooler |

Applying those shifts to the central Sonoma curve produces these scenarios:

| Actual pavement temperature | PG64 estimate | PG70 estimate | PG76 estimate |
| --- | ---: | ---: | ---: |
| 120°F | 60% | 69% | 79% |
| 130°F | 53% | 61% | 70% |
| 140°F | 46% | 53% | 61% |
| 150°F | 41% | 47% | 54% |

At 130°F, those central scenarios correspond to estimated reductions of approximately 47% for PG64, 39% for PG70, and 30% for PG76.

:::note[What these scenarios mean]
We have not validated the grade-shift model with Asphalt Anchor pull tests on PG70 or PG76 pavement. Binder modification and the complete asphalt mixture can change high-temperature behavior in ways that are not represented by a simple horizontal shift. Treat these values as research scenarios, not rated capacities.
:::

## Pavement Grade Is Not a Surface Reading

The high number in a Superpave PG binder grade is based on pavement design temperature derived from historical conditions. It is traditionally evaluated about 20 mm below the pavement surface and uses an average seven-day maximum pavement temperature. It is not equivalent to a momentary surface reading from an infrared thermometer.

An anchor interacts with asphalt across a much greater depth and therefore experiences a temperature gradient. A surface IR measurement is useful for field screening, but it does not fully describe the temperature of the asphalt supporting the anchor.

The [FHWA Superpave Asphalt Mixture Design workbook](https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/asphalt/mixdsgn.pdf) explains pavement design temperature, the 20 mm reference depth, and the 6°C increments used for standard high-temperature PG grades.

## How to Use This Information Today

* **Known PG64-16 pavement:** Use the Sonoma curve only as a preliminary reference and preserve the uncertainty shown above.
* **Known PG70 or PG76 pavement:** The shifted values can help explore a scenario, but they are not validated design corrections.
* **Unknown pavement:** Do not infer an exact binder grade from location alone. Local specifications can suggest likely grades but do not identify the mix actually installed.
* **Critical application:** Obtain the job-mix formula or binder certificate when possible and perform on-site pull testing in representative conditions.

The most useful mix information is the binder PG grade and modification, recycled asphalt percentage, aggregate gradation, pavement age, and air-void content. Better validation would condition representative slabs, loose mix, or cores at several temperatures and test identical anchor installations using the same cure time and pull rate.

Binder or mixture temperature-stiffness measurements would provide a stronger calibration variable than temperature alone. FHWA research confirms that increasing temperature reduces binder stiffness, while also showing that binder grade by itself does not fully explain mixture performance—especially for modified binders. See [FHWA Performance Testing for Superpave and Structural Validation](https://www.fhwa.dot.gov/publications/research/infrastructure/pavements/11045/001.cfm).

## Installation Temperature Is a Separate Issue

Hot pavement capacity concerns the cured anchor while it is under load. Adhesive temperature limits determine whether the anchor can be installed and how quickly the adhesive cures. See [Bad Weather Installation](/installation/bad-weather/) for adhesive handling in hot, cold, or wet conditions.
