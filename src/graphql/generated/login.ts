/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AuthInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
  mobileNumber: string | null;
  cpf: string | null;
  avatar: string | null;
  confirmed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface login_login {
  __typename: "AuthType";
  user: login_login_user;
  access_token: string;
}

export interface login {
  login: login_login;
}

export interface loginVariables {
  data: AuthInput;
}
