const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    pets: [Pet]
  }

  type Pet {
    _id: ID!
    name: String
    age: Int
    gender: String
    species: Species
    owner: User
  }

  type Need {
    _id: ID!
    needType: String!
    description: String!
  }

  type Species {
    _id: ID!
    speciesType: String!
    description: String!
    needs: [Need]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    species: [Species]
  }

  input NeedInput {
    needType: String!
    description: String!
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPet(
      name: String!
      species: ID
      age: Int!
      gender: String!
      owner: ID!
    ): Pet
    updatePet(petID: ID!, name: String!): Pet
    deletePet(petID: ID!, userID: ID!): User
    addSpecies(
      speciesType: String!
      description: String!
      needs: [NeedInput!]
    ): Species
  }
`;

module.exports = typeDefs;
