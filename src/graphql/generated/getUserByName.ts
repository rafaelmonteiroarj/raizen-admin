/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserByName
// ====================================================

export interface getUserByName_userByName {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
  mobileNumber: string | null;
  cpf: string | null;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface getUserByName {
  userByName: getUserByName_userByName[];
}

export interface getUserByNameVariables {
  name: string;
}
