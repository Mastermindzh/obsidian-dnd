---
type: NPC
location: 
faction: 
campaign: Example campaign
campaign: Creatures
creation_date: 2023-12-16
description: Grotesque undead that moves slowly
race: Undead
gender: unknown
aliases: 
tags:
  - example-campaign
---
# [Zombie (summoned)](Zombie%20(summoned).md)

![zombie|250](attachments/Pasted%20image%2020231216004414.png)

## description

![](attachments/Pasted%20image%2020231216004357.png)

## relationships

-

## facts & skills

-  

## quests

- [ ]

## references

```dataview
TABLE file.cday as Created
FROM "DND/Example campaign" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
