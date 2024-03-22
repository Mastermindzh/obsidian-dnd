---
type: player
campaign: Example campaign
campaign: Players
creation_date: <% tp.date.now("YYYY-MM-DD") %>
description: Powerful wizard who keeps resurrecting himself for unknown reasons
race: Variant Thiefling
gender: male
class: Wizard -> Necromancy
status: alive
skills: Skilled in magic with a focus on Necromancy. No trade skills whatsoever
aliases:
  - The immortal death knight
  - James
  - Caballero de la meurte immortal
tags:
  - example-campaign
---
# [Caballero](Caballero.md)

![](attachments/image_002.webp)

## description

## relationships

Currently has the following creatures under his wing:

- [Karel](../Creatures/Karel.md)

## facts

- [ ] When revived, starts again at lvl 1

## references

```dataview
TABLE file.cday as Created
FROM "DND/Example campaign" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
