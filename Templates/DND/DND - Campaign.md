---
campaign: <% tp.user.getThisCampaign(tp) %>
status: active
role: player
system: DND 5e
type: campaign
tags:
  - <%tp.user.toKebabCase(tp.user.getThisCampaign(tp))%>
---
# The World of <% tp.file.folder(false) %>

```leaflet
id: <% tp.frontmatter.campaign %>-world-map
image: attachments/world-placeholder.jpg
lat: 50%
long: 50%
minZoom: 1
maxZoom: 10
defaultZoom: 6.5
scale: 1
lock: true
```

## Description & facts

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et enim non urna dapibus fringilla ut eget odio. Pellentesque vestibulum, lectus ac vulputate mollis, erat risus tempus justo, sed lacinia quam dui sed sapien. Etiam id sagittis justo. Praesent eget mi aliquet, dignissim quam sed, dignissim mauris.

- Fact 1

## Quests

```dataview
TABLE completed as Completed, description as Description from "DND/<% tp.file.folder(false) %>"
WHERE contains(lower(type),"quest")
SORT completed DESC
```

## Player Characters

```dataview
table class as Class, description as Description, skills as Skills, status as Status from "DND/<% tp.file.folder(false) %>"
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
table summary, date as Date from "DND/<% tp.file.folder(false) %>"
where contains(type,"session")
SORT sessionNum DESC
```

## Locations

```dataview
TABLE description as Description from "DND/<% tp.file.folder(false) %>"
WHERE contains(lower(type),"location")
```

## NPCs

```dataview
TABLE location as Location from "DND/<% tp.file.folder(false) %>"
WHERE contains(lower(type),"npc")
```

## Factions

```dataview
TABLE description as "Description" from "DND/<% tp.file.folder(false) %>"
WHERE contains(lower(type),"faction")
```

## Other things of note

```dataview
TABLE description as "Description" from "DND/<% tp.file.folder(false) %>"
WHERE contains(lower(type),"other")
```

## House rules

1.
