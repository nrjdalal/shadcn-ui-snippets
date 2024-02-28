import -

```jsx
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
```

---

default -

```jsx
<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <Image src="..." alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
</div>
```
