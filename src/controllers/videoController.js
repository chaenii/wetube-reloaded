export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
  return res.send(`Watch video #${req.params.id}`);
};
export const edit = (req, res) => {
  return res.send("Edit Videos");
};
export const search = (req, res) => res.send("Search Videos");
export const upload = (req, res) => res.send("Upload Videos");
export const deleteVideo = (req, res) => {
  return res.send("Delete Videos");
};
