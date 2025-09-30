---
id: <% "\"" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X") + "\""  %>
aliases:
  - <% "\"" + tp.user.get_legible_title(tp.file.title) + "\"" %>
tags:
  - howto
  - wip
cssclasses:
---
# <% tp.user.get_legible_title(tp.file.title) %> 
<% await tp.file.move("inbox/note_" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X")) %>
#### 📖 Descripción
<% tp.file.cursor() %> `Comineza con una breve explicación de qué resuelve esta guía ...`
#### ✅ Requisitos previos
- Sistema operativo: 
- Versiones: 
- Dependencias: 
#### 📝 Pasos
1. 
2. 
3. 
#### 🔍 Verificación
- Comando:  
- Resultado esperado:  
#### ⚠️ Notas / Problemas comunes
- 

