function lastGameTitle(tp) {
  const folders = tp.file.folder(true).split("/");
  const thisWorld = folders[folders.length - 2];
  const titles = app.plugins.plugins.dataview.api
    .pages(`"DND/${thisWorld}/Sessions"`)
    .where((page) => {
      if (page.type === "session") {
        return true;
      }
    })
    .sort((b) => b.sessionNum);
  console.log(titles);
  if (titles.length > 1) {
    const filename = titles[titles.length - 2].file.path
      .split("/")
      .reverse()
      .slice(0, 1);
    return filename;
  } else {
    return "none";
  }
}
module.exports = lastGameTitle;
