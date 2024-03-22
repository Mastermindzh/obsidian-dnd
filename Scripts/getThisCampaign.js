function getThisCampaign(tp) {
  const folders = tp.file.folder(true).split("/");
  const thisFolder = folders[folders.length - 2];
  return thisFolder;
}
module.exports = getThisCampaign;
