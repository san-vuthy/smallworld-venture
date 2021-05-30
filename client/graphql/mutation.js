import { gql } from "@apollo/client";

// === message ===
const POST_MESSAGE = gql`
  mutation ($fullname: String!, $email: String!, $message: String!) {
    post_message(fullname: $fullname, email: $email, message: $message) {
      respond
    }
  }
`;
// === application ===
const POST_APPLICATION = gql`
  mutation (
    $name: String!
    $email: String!
    $additional: String
    $phone: String!
    $cv: String!
  ) {
    post_application(
      name: $name
      email: $email
      additional: $additional
      phone: $phone
      cv: $cv
    ) {
      message
    }
  }
`;
export { POST_MESSAGE, POST_APPLICATION };
