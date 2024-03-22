# [Game list](Game%20list.md)

```button
name Add New Game
type command
action QuickAdd: Add DND campaign
```

## List of current campaigns

```dataviewjs
let totalGames;
function getNumOfGames(campaign) {
 let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"DND/${campaign}"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.campaign === campaign) {
                  totalGames = totalGames +1;
                  return true;
                }
            }
        }).length
 return numOfGames
}

dv.table(["Name","System","Sessions", "Role","Status"],dv.pages('"DND"')
  .where(frontmatter => frontmatter.type === "campaign")
  .sort(campaign => campaign.status)
  .map(b => [dv.fileLink(b.file.path,false,[b.campaign]),b.system,getNumOfGames(b.campaign),b.role,b.status]))
```

## Useful resources

- [A bestiary of enemies](https://dr-eigenvalue.github.io/bestiary/)
-
