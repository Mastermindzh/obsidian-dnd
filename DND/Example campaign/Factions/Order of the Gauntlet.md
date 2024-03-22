---
type: faction
description: The order is always vigilant, ready to smite evil, enforce justice, and enact retribution against any who try to subjugate or harm others.
campaign: Example campaign
campaign: Factions
creation_date: 2023-11-26
tags:
  - example-campaign
---


# [Order of the Gauntlet](Order%20of%20the%20Gauntlet.md)

![|200](attachments/Pasted%20image%2020240105122749.png)

## description

The order is always vigilant, ready to smite evil, enforce justice, and enact retribution against any who try to subjugate or harm others.

## facts

-  

## Members

```dataview
TABLE file.cday as Created
FROM "DND/Example campaign" where type="NPC" AND file.name != this.file.name AND contains(faction, this.file.name)
SORT file.cday DESC
```
