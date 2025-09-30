---
id: notas-wip-agrupadas-por-carpetas_1758792121
aliases:
  - Notas WIP agrupadas por carpetas
tags:
  - toc
cssclasses:
---
# Notas WIP agrupadas por carpeta
```dataviewjs
let pages = dv.pages("#wip")
  .where(p => !p.file.folder.includes("support"));

if (pages.length === 0) {
  dv.paragraph("ℹ️ No se han encontrado notas **WIP** en tu vault.");
} else {
  dv.list(
    pages
      .groupBy(p => p.file.folder)
      .map(group => {
        return [
          `## 📁 ${group.key}`,
          ...group.rows.map(p => {
            let alias = (p.aliases && p.aliases.length > 0) ? p.aliases[0] : p.file.name;
            return `- [[${p.file.path}|${alias}]]`;
          })
        ].join("\n");
      })
  );
}
