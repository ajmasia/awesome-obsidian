---
id: <% "\"" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X") + "\""  %>
aliases:
  - <% "\"" + tp.user.get_legible_title(tp.file.title) + "\"" %>
tags:
  - troubleshooting
  - wip
cssclasses:
---
# <% tp.user.get_legible_title(tp.file.title) %> 
<% await tp.file.move("inbox/note_" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X")) %>

#### 🔎 Síntoma
`Describe el error o situación`

#### ⚠️ Causa posible
- 

#### 🛠️ Solución
1. 
2. 

#### 🔍 Verificación
- 

#### 📌 Notas
- 

