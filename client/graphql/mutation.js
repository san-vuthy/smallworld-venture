import { gql } from "@apollo/client";

// === employer login ===
const EMPLOYER_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login_employer(email: $email, password: $password) {
      message
    }
  }
`;
// === edit employer info ===
const EDIT_EMPLOYER = gql`
  mutation (
    $id: ID!
    $name: String!
    $email: String!
    $gender: String!
    $phone: String!
    $password: String
    $newpassword: String
  ) {
    edit_employer(
      id: $id
      name: $name
      email: $email
      gender: $gender
      phone: $phone
      password: $password
      newpassword: $newpassword
    ) {
      message
    }
  }
`;
// === employer login ===
const JOBSEEKER_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login_jobseeker(email: $email, password: $password) {
      message
    }
  }
`;
// === edit jobseeker info ===
const EDIT_JOBSEEKER = gql`
  mutation (
    $id: ID!
    $name: String!
    $email: String!
    $phone: String!
    $gender: String!
    $interest: [String]
    $cv: String
    $password: String
    $newpassword: String
  ) {
    edit_jobseeker(
      id: $id
      name: $name
      email: $email
      gender: $gender
      phone: $phone
      interest: $interest
      cv: $cv
      password: $password
      newpassword: $newpassword
    ) {
      message
    }
  }
`;
// === Employer add new company ===
const ADD_COMPANY = gql`
  mutation (
    $name: String!
    $city: String!
    $employer_position: String!
    $about: String!
    $logo: String!
    $employerId: ID!
    $website: String!
  ) {
    add_company(
      name: $name
      city: $city
      employer_position: $employer_position
      about: $about
      logo: $logo
      employerId: $employerId
      website: $website
    ) {
      message
    }
  }
`;
// === Employer edit company ===
const EDIT_COMPANY = gql`
  mutation (
    $id: ID!
    $name: String!
    $city: String!
    $employer_position: String!
    $about: String!
    $logo: String!
    $website: String!
  ) {
    edit_company(
      id: $id
      name: $name
      city: $city
      employer_position: $employer_position
      about: $about
      logo: $logo
      website: $website
    ) {
      message
    }
  }
`;
//  === add job ===
const ADD_JOB = gql`
  mutation (
    $position: String!
    $salary: String!
    $company_name: String!
    $type: [String]!
    $requirements: [String]!
    $descriptions: [String]!
    $employerId: ID!
  ) {
    add_job(
      position: $position
      salary: $salary
      company_name: $company_name
      type: $type
      requirements: $requirements
      descriptions: $descriptions
      employerId: $employerId
    ) {
      message
    }
  }
`;
// === edit job ====
const EDIT_JOB = gql`
  mutation (
    $id: ID!
    $position: String!
    $salary: String!
    $company_name: String!
    $type: [String]!
    $requirements: [String]!
    $descriptions: [String]!
  ) {
    edit_job(
      id: $id
      position: $position
      salary: $salary
      company_name: $company_name
      type: $type
      requirements: $requirements
      descriptions: $descriptions
    ) {
      message
    }
  }
`;
// === message ===
const POST_MESSAGE = gql`
  mutation ($fullname: String!, $email: String!, $message: String!) {
    post_message(fullname: $fullname, email: $email, message: $message) {
      respond
    }
  }
`;
// === application ===
// const POST_APPLICATION = gql`
//   mutation (
//     $name: String!
//     $email: String!
//     $additional: String
//     $phone: String!
//     $cv: String!
//     $company: String!
//     $department: String!
//     $position: String!
//   ) {
//     post_application(
//       name: $name
//       email: $email
//       additional: $additional
//       phone: $phone
//       cv: $cv
//       company: $company
//       department: $department
//       position: $position
//     ) {
//       message
//     }
//   }
// `;
export {
  EDIT_EMPLOYER,
  EMPLOYER_LOGIN,
  JOBSEEKER_LOGIN,
  EDIT_JOBSEEKER,
  ADD_COMPANY,
  EDIT_COMPANY,
  ADD_JOB,
  EDIT_JOB,
  POST_MESSAGE,
};
