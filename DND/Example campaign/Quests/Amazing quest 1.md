---
type: quest
locations: 
questGivers: 
campaign: Example campaign
campaign: Quests
creation_date: 2024-01-05
description: ""
tags: []
completed: false
---
# [Amazing quest 1](Amazing%20quest%201.md)

## description
  
## references

```dataview
TABLE file.cday as Created
FROM "DND/Example campaign" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
