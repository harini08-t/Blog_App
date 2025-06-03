import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture:{
      type:String,
      default:'https://www.google.com/imgres?q=profile%20image&imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F10%2F05%2F22%2F37%2Fblank-profile-picture-973460_1280.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fvectors%2Fblank-profile-picture-mystery-man-973460%2F&docid=wg0CyFWNfK7o5M&tbnid=ycNOFIKv7gjqcM&vet=12ahUKEwiql_Xku9ONAxVTT2wGHaOhB68QM3oECCQQAA..i&w=1280&h=1280&hcb=2&ved=2ahUKEwiql_Xku9ONAxVTT2wGHaOhB68QM3oECCQQAA',
    },
}, {timestamps:true}
);
const User = mongoose.model('User', userSchema);
export default User;