import bcrypt from "bcrypt"

export const encryptedPwd = async (password) => await bcrypt.hash(password, 12);

export const passwordMatch = async (clientPass, dbPass) => await bcrypt.compare(clientPass, dbPass);

