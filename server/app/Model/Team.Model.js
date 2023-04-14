const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    users: { type: [mongoose.Types.ObjectId], default: [] },
    ownwer: { type: [mongoose.Types.ObjectId], required: true },
  },
  {
    timestamps: true,
  }
);
const ProjectModel = mongoose.model("Project", ProjectSchema);
module.exports = {
  ProjectModel,
};
