---
# Sidenav top-level section
# should be the same for all markdown files
section: extensions
subsection: Component groups
# Sidenav secondary level section
# should be the same for all markdown files
id: Error state
# Tab (react | react-demos | html | html-demos | design-guidelines | accessibility)
source: react
# If you use typescript, the name of the interface to display props for
# These are found through the sourceProps function provided in patternfly-docs.source.js
propComponents: ['ErrorState']
---

import ErrorState from "@patternfly/react-component-groups/dist/dynamic/ErrorState";

The **error state** component repurposes the `EmptyState` component to display an error to users.

## Examples

### Basic error state

To provide users with error details, a basic error state should contain an appropriate and informative `errorTitle` and `errorDescription`. 

```js file="./ErrorStateExample.tsx"

```
