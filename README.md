# shadcn-ui-snippets

### How to use?

To import the `Alert` component, type `shadcn-alert-import` in your tsx file and to use it, use `shadcn-alert`.

> Similarly, for other components, use `shadcn-[component]-import` to import and `shadcn-[component]` to use.

```tsx
// shadcn-alert-import
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// shadcn-alert
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>;
```

### Components added so far

- Accordion
- Alert
- ... more to be added soon
