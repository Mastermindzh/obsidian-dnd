---
type: player
campaign: <% tp.user.getThisCampaign(tp) %>
campaign: <% tp.user.getThisCampaign(tp) %>
creation_date: <% tp.date.now("YYYY-MM-DD") %>
description: ""
race: 
gender: 
class: 
status: alive
skills: 
aliases: 
tags: <% tp.user.toKebabCase(tp.user.getThisCampaign(tp)) %>
---

# [<% tp.file.title %>](<% tp.file.title %>)

![](../../../Templates-attachments/npc-placeholder.png)

## description

## relationships

-

## facts

-

## references

```dataview
TABLE file.cday as Created
FROM "DND/<% tp.user.getThisCampaign(tp) %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
