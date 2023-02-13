export type User = {
  localId: string;
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

export type Me = {
  email: string;
  displayName: string;
  localId: string;
};
