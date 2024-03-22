---
type: NPC
location: 
faction: Order of the Gauntlet
campaign: Example campaign
campaign: NPCs
creation_date: 2023-11-26
description: Dumb but strong orc
race: Half-Orc
gender: female
aliases: 
tags:
  - example-campaign
---
# [Undril Silvertusk](Undril%20Silvertusk.md)

![](attachments/Pasted%20image%2020231126150040.png)

## description

## relationships

- Member of the [Order of the Gauntlet](../Factions/Order%20of%20the%20Gauntlet.md)

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
