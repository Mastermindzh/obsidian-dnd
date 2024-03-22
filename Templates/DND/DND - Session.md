---
type: session
campaign: <% tp.file.folder(true).split('/').reverse().slice(1,2) %>
campaign: <% tp.user.getThisCampaign(tp) %>
sessionNum: <% tp.user.getThisGameNum(tp) %>
location: 
date: <% tp.date.now("YYYY-MM-DD") %>
summary: ""
tags: <% tp.user.toKebabCase(tp.user.getThisCampaign(tp)) %>
---
# [<% tp.file.title %>](<% tp.file.title %>)

## Session Summary

 > [!tldr] [<% tp.file.title %>](<% tp.file.title %>)
> Add summary content here ^summary

---

## Recap

![<% tp.user.getLastGameTitle(tp) %>#^summary](<% tp.user.getLastGameTitle(tp) %>#^summary)

---

## Notes
