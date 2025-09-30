---
id: <% "\"" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X") + "\""  %>
aliases:
  - <% "\"" + tp.user.get_legible_title(tp.file.title) + "\"" %>
tags:
  - wip
  - learning
cssclasses:
---
# <% tp.user.get_legible_title(tp.file.title) %> 
<% await tp.file.move("00-inbox/note_" + tp.user.get_file_title(tp.file.title) + "_" + tp.date.now("X")) %>

### 📝 Context
- <% tp.file.cursor() %>
### 🔍 Example

```language
// code example
```

