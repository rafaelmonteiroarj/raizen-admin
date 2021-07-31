import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
  mutation login($data: AuthInput!) {
    login(data: $data) {
      user {
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
      access_token
    }
  }
`;
