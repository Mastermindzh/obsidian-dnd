---
campaign: Example campaign
status: active
role: player
system: DND 5e
type: campaign
tags:
  - example-campaign
---
# The World of Example campaign

```leaflet
id: <% tp.file.folder(false) %>-world-map
image: attachments/world-placeholder.jpg
lat: 50%
long: 50%
minZoom: 1
maxZoom: 10
defaultZoom: 10
scale: 1
lock: true
```

## Description & facts

Some cool description of your campaign

- Fact 1

## Quests

```dataview
TABLE completed as Completed, description as Description from "DND/Example campaign"
WHERE contains(lower(type),"quest")
SORT completed DESC
```

## Player Characters

```dataview
table class as Class, description as Description, skills as Skills, status as Status from "DND/Example campaign"
where contains(type,"player")
```

## Sessions

```button
id add_session
name Add Session
type command
action QuickAdd: Add session
```

```dataview
table summary, date as Date from "DND/Example campaign"
where contains(type,"session")
SORT sessionNum DESC
```

## Locations

```dataview
TABLE description as Description from "DND/Example campaign"
WHERE contains(lower(type),"location")
```

## NPCs

```dataview
TABLE location as Location from "DND/Example campaign"
WHERE contains(lower(type),"npc")
```

## Factions

```dataview
TABLE description as "Description" from "DND/Example campaign"
WHERE contains(lower(type),"faction")
```

## Other things of note

```dataview
TABLE description as "Description" from "DND/Example campaign"
WHERE contains(lower(type),"other")
```

## House rules

1. First house rule
