---
id: <% "\"" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X") + "\""  %>
aliases:
  - <% "\"" + tp.user.get_legible_title(tp.file.title) + "\"" %>
tags:
  - snippet
  - code
  - wip
cssclasses:
---
# <% tp.user.get_legible_title(tp.file.title) %> 
<% await tp.file.move("inbox/snippet_" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X")) %>

#### 📖 Descripción
`Explica en qué contexto usar este snippet.`

#### 🧑‍💻 Código
```<% tp.system.prompt("lenguaje", "bash") %>
# ejemplo de código aquí

