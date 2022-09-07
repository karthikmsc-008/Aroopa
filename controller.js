const Profile = require("./model");

const saveProfile = async (req, res) => {
  const profile = {
    title: req.body.title,
  };
  let prof = await Profile.create(profile);
  res.sendStatus(201);
  res.send({
    message: "Successfully Created",
    response: prof,
  });
};

const updateProfile = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  let update_boards = await Profile.findOne({
    where: {
      id: id,
    },
  });
  console.log(update_boards);
  if (req.body.stage <= 3) {
    update_boards
      .update({
        stage: req.body.stage,
      })
      .then(() => {
        res.sendStatus(200);
      });
  } else {
    res.sendStatus(400);
  }
};

module.exports.saveProfile = saveProfile;
module.exports.updateProfile = updateProfile;
