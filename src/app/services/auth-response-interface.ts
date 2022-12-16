export interface AuthResponseData {
    kind: string;
    token: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?:boolean;
  }