function getThisGameNum(tp) {
  const folders = tp.file.folder(true).split("/");
  const thisCampaign = folders[folders.length - 2];
  let numOfGames = app.plugins.plugins.dataview.api
    .pages(`"DND/${thisCampaign}"`)
    .where((page) => {
      if (page.type === "session") {
        if (page.campaign === thisCampaign) {
          return true;
        }
      }
    }).length;
  numOfGames = JSON.stringify(numOfGames + 1);
  while (numOfGames.length < 3) {
    numOfGames = "0" + numOfGames;
  }
  return numOfGames;
}
module.exports = getThisGameNum;
