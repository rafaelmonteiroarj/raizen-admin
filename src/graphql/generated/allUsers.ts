/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: allUsers
// ====================================================

export interface allUsers_allUsers_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface allUsers_allUsers_items {
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

export interface allUsers_allUsers {
  __typename: "PaginateUserResponse";
  itemsPerPage: number;
  currentPage: number;
  totalCount: number;
  totalPages: number;
  pageInfo: allUsers_allUsers_pageInfo;
  items: allUsers_allUsers_items[] | null;
}

export interface allUsers {
  allUsers: allUsers_allUsers;
}
