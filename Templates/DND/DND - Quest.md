---
type: quest
locations: 
questGivers: 
campaign: <% tp.user.getThisCampaign(tp) %>
campaign: <% tp.file.folder(false) %>
creation_date: <% tp.date.now("YYYY-MM-DD") %>
description: ""
tags: <% tp.user.toKebabCase(tp.user.getThisCampaign(tp)) %>
completed: false
---
# [<% tp.file.title %>](<% tp.file.title %>)

## description

## content

## completion rewards

- [ ]

## references

```dataview
TABLE file.cday as Created
FROM "DND/<% tp.user.getThisCampaign(tp) %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
