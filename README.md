# shadcn-ui-snippets

### How to use?

To import the `Alert` component, type `shadcn-alert-import` in your tsx file and to use it, use `shadcn-alert`.

> Similarly, for other components, use `shadcn-[component]-import` to import and `shadcn-[component]` to use.

```tsx
// shadcn-alert-import
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// shadcn-alert
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>;
```

### Components added so far

- Accordion
- Alert
- Alert Dialog
- Aspect Ratio
- ... more to be added soon

### How to contribute?

Use this link - [Snippet Generation](https://snippet-generator.app/?description=https%3A%2F%2Fui.shadcn.com%2Fdocs%2Fcomponents&tabtrigger=shadcn-&snippet=&mode=vscode) to generate snippets for the components and add them to the `snippets` folder accordingly.
