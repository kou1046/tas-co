export type User = {
  localID: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  photoUrl: string;
  passwordHash: string;
  passwordUpdatedAt: number;
  validSince: string;
  disbled: boolean;
  lastLoginAt: string;
  createdAt: string;
  customAuth: boolean;
};
