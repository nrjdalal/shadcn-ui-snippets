import -

```jsx
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
```

---

formfield -

```jsx
<FormField
  control={form.control}
  name=""
  render={({ field }) => (
    <FormItem>
      <FormLabel></FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>desc.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```
