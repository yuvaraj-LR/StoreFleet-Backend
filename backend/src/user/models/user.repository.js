import UserModel from "./user.schema.js";
import mongoose from "mongoose";
import { ObjectId } from "mongoose";

export const createNewUserRepo = async (user) => {
  return await new UserModel(user).save();
};

export const findUserRepo = async (factor, withPassword = false) => {
  if (withPassword) return await UserModel.findOne(factor).select("+password");
  else return await UserModel.findOne(factor);
};

export const findUserForPasswordResetRepo = async (hashtoken) => {
  return await UserModel.findOne({
    resetPasswordToken: hashtoken,
    resetPasswordExpire: { $gt: Date.now() },
  });
};

export const updateUserProfileRepo = async (_id, data) => {
  return await UserModel.findOneAndUpdate(_id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
};

export const getAllUsersRepo = async () => {
  return UserModel.find({});
};

export const deleteUserRepo = async (_id) => {
  return await UserModel.findByIdAndDelete(_id);
};

export const updateUserRoleAndProfileRepo = async (_id, data) => {
  // Write your code here for updating the roles of other users by admin
  return await UserModel.updateMany(
    {_id: _id},
    {
      name: data.name,
      email: data.email,
      role: data.role
    }
  )
};

export const requestForgetPassword = async(user, token) => {
  return await UserModel.updateOne(
    {email: user.email},
    {
      "resetPasswordToken": token,
      "resetPasswordExpire": Date.now() + 10 * 60 * 1000
    }
  )
}

export const resetPassword = async(user, password) => {
  console.log(user, "userr...");
  return await UserModel.updateOne(
    {email: user.email},
    {password: password}
  )
}
