const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

// === Model ===
const Job = require("../../models/jobModel");
const Company = require("../../models/companyModel");

const EmployerType = new GraphQLObjectType({
  name: "employer",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    gender: { type: GraphQLString },
    phone: { type: GraphQLString },
    // === jobs under employer ===
    jobs: {
      // === Job Type ===
      type: GraphQLList(require("./jobType")),
      resolve: async (parent) => {
        let jobs = await Job.find({ employerId: parent.id });
        return jobs;
      },
    },
    // === companies under employer ===
    companies: {
      // === Company Type ===
      type: GraphQLList(require("./companyType")),
      resolve: async (parent) => {
        let coms = await Company.find({ employerId: parent.id });
        return coms;
      },
    },
    message: { type: GraphQLString },
  }),
});

module.exports = EmployerType;
