<%*
	moment.locale("es")
	const thisDay = window.moment(new Date(tp.file.title))
	const thisDayLong = thisDay.format("DD [de] MMMM [de] YYYY")
-%>
---
id: <% "\"" + tp.user.get_file_title(tp.file.title)  + "\"" %>
aliases:
  - <% thisDayLong %>
tags:
  - daily-note
---
# <% thisDayLong %>
> [[note_pending-tasks_1758634861|Pending Tasks]]

<% tp.file.cursor() %>
