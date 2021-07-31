import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query allUsers {
    allUsers {
      itemsPerPage
      currentPage
      totalCount
      totalPages
      pageInfo {
        hasNextPage
        hasPrevPage
      }
      items {
        id
        name
        email
        phoneNumber
        mobileNumber
        cpf
        avatar
        confirmed
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_USER_BY_NAME = gql`
  query getUserByName($name: String!) {
    userByName(name: $name) {
      id
      name
      email
      phoneNumber
      mobileNumber
      cpf
      avatar
      createdAt
      updatedAt
    }
  }
`;
