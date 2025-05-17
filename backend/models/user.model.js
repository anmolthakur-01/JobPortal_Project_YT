import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["jobseeker", "recruiter"],
      required: true,
    },
    profile: {
      bio: { type: String, default: null },
      skills: [{ type: String, default: null }],
      profilePhoto: { type: Array, default: ["no_image.jpg"] },
      resume: { type: Array, default: ["no_image.jpg"] }, // URL to resume file
      resumeOriginalName: { type: Array, default: null },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
