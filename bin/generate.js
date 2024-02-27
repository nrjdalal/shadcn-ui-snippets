#!/usr/bin/env bun

import fs from "fs"

const files = fs.readdirSync("src/components")

const importJson = {}
const usageJson = {}

for (const file of files) {
  const name = file.split(".")[0]
  const fileContent = fs.readFileSync(`src/components/${file}`, "utf8")

  let modifyContent = fileContent.split("---").map((s) =>
    s
      .trim()
      .split(" -\n\n```jsx\n")
      .map((s) => [s.split("\n")])
      .flat()
  )

  modifyContent = modifyContent.map((arr) => {
    const type = arr[0][0]
    const component = `${name.replace("-", " ")} ${type}`
      .split(" ")
      .map((s) => s[0].toUpperCase() + s.slice(1))
      .join(" ")
      .replace("Import", "")
      .replace("Default", "")
      .trim()
    const prefix = [
      type === "import"
        ? [`shadcn-i-${name}`, `cni-${name}`]
        : type === "default"
        ? [`shadcn-x-${name}`, `cnx-${name}`]
        : [
            `shadcn-x-${name}-${type.replace(/ /g, "-")}`,
            `cnx-${name}-${type.replace(/ /g, "-")}`,
          ],
    ].flat()

    if (type === "import") {
      return (importJson[component] = {
        prefix,
        body: [arr[1].slice(0, -1)].flat(),
        description: `https://ui.shadcn.com/docs/components/${name}`,
      })
    }

    return (usageJson[component] = {
      prefix,
      body: [arr[1].slice(0, -1)].flat(),
      description: `https://ui.shadcn.com/docs/components/${name}`,
    })
  })
}

// mkdir dist && write json to components.code-snippets

fs.mkdirSync("dist", { recursive: true })
fs.writeFileSync(
  "dist/import.code-snippets",
  JSON.stringify(importJson, null, 2)
)
fs.writeFileSync("dist/usage.code-snippets", JSON.stringify(usageJson, null, 2))
