# shadcn-ui-snippets

### How to use?

To import the `Alert` component, type `shadcn-import-alert` in your tsx file and to use it, use `shadcn-use-alert`.

> Similarly, for other components, use `shadcn-import-` to import and `shadcn-use-` to use.

```tsx
// shadcn-import-alert
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// shadcn-use-alert
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>;
```

### Components added so far

- Alert
- ... more to be added soon
