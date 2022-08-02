import * as bcrypt from 'bcrypt';

export default async function hashComparePassword(
  password: string,
  userPasswordToken: string,
) {

  console.log(password, userPasswordToken);
  const isMatch = await bcrypt.compare(password, userPasswordToken);

  return isMatch;
}