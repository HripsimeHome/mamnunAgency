export enum EUserRoles {
  admin = "admin",
}

export const userRolesArr = [EUserRoles.admin];

export interface IUser {
  id: number;
  email: string;
  password: string;
  role?: EUserRoles;
  passwordResetToken?: string | null;
  passwordResetExpires?: Date | null;
}
