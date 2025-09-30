---
id: <% "\"" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X") + "\""  %>
aliases:
  - <% "\"" + tp.user.get_legible_title(tp.file.title) + "\"" %>
tags:
  - checklist
  - wip
cssclasses:
---
# <% tp.user.get_legible_title(tp.file.title) %> 
<% await tp.file.move("inbox/note_" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X")) %>

#### 📌 Contexto
`Explica qué cubre esta checklist...`

#### 🔧 Tareas
- [ ] 
- [ ] 
- [ ] 

#### 📌 Observaciones
- 

