---
type: other
campaign: <% tp.user.getThisCampaign(tp) %>
creation_date: <% tp.date.now("YYYY-MM-DD") %>
tags: <% tp.user.toKebabCase(tp.user.getThisCampaign(tp)) %>
---
# [<% tp.file.title %>](<% tp.file.title %>)
