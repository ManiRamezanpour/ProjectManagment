const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String },
    text: { type: String },
    image: { type: String },
    tags: { type: String, default: [] },
    owner: { type: [mongoose.Types.ObjectId], default: [], required: true },
    teams: { type: [mongoose.Types.ObjectId], default: [] },
    Private: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);
const ProjectModel = mongoose.model("Project", ProjectSchema);
module.exports = {
  ProjectModel,
};
