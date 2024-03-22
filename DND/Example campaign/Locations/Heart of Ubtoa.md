---
type: location
description: The Heart of Ubtao was an earthmote that hovered over the Aldani Basin in Chult. It was a sacred site for worshipers of Ubtao, the deity known as the Creator of Chult
campaign: Example campaign
campaign: Locations
creation_date: 2023-12-29
tags:
  - example-campaign
---
# [Heart of Ubtoa](Heart%20of%20Ubtoa.md)

```leaflet
id: heart-of-ubtoa-location-map
image: ../attachments/heart.png
lat: 50%
long: 50%
minZoom: 5
maxZoom: 10
defaultZoom: 8
scale: 1
lock: true
```

## description

- Tree roots are still connected to the heart
- floating few 100 feet above the ground
- On top of the heart there is a dead tree.
- The tree's roots look like veins for the heart.
- There is a red liquid coming from the roots, further reinforcing the idea that it's a heart.
- There is a cave mouth, and there is a young woman in the cave mouth.
- The heart also rotates slowly.

## facts

-

## NPCs

```dataview
TABLE file.cday as Created
FROM "DND/Example campaign" where type="NPC" AND file.name != this.file.name AND contains(location, this.file.name)
SORT file.cday DESC
```

## references

```dataview
TABLE file.cday as Created
FROM "DND/Example campaign" where file.name != this.file.name AND contains(file.outlinks.file.name, this.file.name)
SORT file.cday DESC
```
