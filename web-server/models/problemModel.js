import mongoose from "mongoose";

const ProblemSchema = mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  difficulty: String
});

const problemModel = mongoose.model("ProblemModel", ProblemSchema);

export default problemModel;
