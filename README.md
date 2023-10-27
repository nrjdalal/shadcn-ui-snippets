# shadcn-ui-snippets

### What is this?

Install the extension given below and easily import and use shadcn-ui components with ease using snippets within VSCode. Just type `shadcn` in you jsx/tsx file and you will get a list of all the components to choose from.

https://marketplace.visualstudio.com/items?itemName=VeroXyle.shadcn-ui-snippets

![shadcn-ui-snippets](https://raw.githubusercontent.com/nrjdalal/shadcn-ui-snippets/main/images/usage.png)

### How to use?

1. Components

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

2. Page based components

> Some compenents are page specific and can be imported using `shadcn-page-[component]`, modular parts to be added later.

```tsx
// shadcn-page-form
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-5">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

### Components/Pages added so far

- Accordion
- Alert
- Alert Dialog
- Aspect Ratio
- Avatar
- Badge
- Button
- Form
- ... more to be added soon

### To be added later

> Some components require useState, etc to also be imported, so they will be added later.

- Calendar

### How to contribute?

Use this link - [Snippet Generation](https://snippet-generator.app/?description=https%3A%2F%2Fui.shadcn.com%2Fdocs%2Fcomponents&tabtrigger=shadcn-&snippet=&mode=vscode) to generate snippets and add/update them to the `snippets` folder accordingly.
