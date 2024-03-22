---
type: NPC
locations: 
faction: 
campaign: <% tp.user.getThisCampaign(tp) %>
creation_date: <% tp.date.now("YYYY-MM-DD") %>
description: ""
race: 
gender: 
aliases: 
tags: <% tp.user.toKebabCase(tp.user.getThisCampaign(tp)) %>
---
# [<% tp.file.title %>](<% tp.file.title %>)

![](../../../Templates-attachments/npc-placeholder.png)

## Description

## Relationships

-

## Facts & skills

-  

## Quests

```dataview
TABLE file.cday as Created
FROM "DND/<% tp.user.getThisCampaign(tp) %>" where file.name != this.file.name AND 
contains(type, "quest") AND
contains(questGivers, this.file.link)
SORT file.cday DESC
```

## References

```dataview
TABLE file.cday as Created
FROM "DND/<% tp.user.getThisCampaign(tp) %>" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
