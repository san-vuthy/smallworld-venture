const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// ==== Graphql Type Section ====
const CompanyType = require("../type/companyType");
const DepartmentType = require("../type/departmentType");
const OpportunityType = require("../type/opportunityType");

// === Model Section ===
const Company = require("../../models/companyModel");
const Department = require("../../models/departmentModel");
const Opportunity = require("../../models/opportunityModel");

// === RootQuery ===
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // ====== get all companies
    get_companies: {
      type: new GraphQLList(CompanyType),
      description: "List of companies",
      resolve: async () => {
        const com = await Company.find();
        return com;
      },
    },
    // ==== get company by id ======
    get_company: {
      type: CompanyType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        return Company.findById(args.id);
      },
    },
    // ====== get all departments ======
    get_departments: {
      type: new GraphQLList(DepartmentType),
      description: "List of departments",
      resolve: async () => {
        const dep = await Department.find();
        return dep;
      },
    },
    // ====== get opportunitiy by id ======
    get_department: {
      type: DepartmentType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        return Department.findById(args.id);
      },
    },
    // ====== get all opportunties ======
    get_opportunities: {
      type: new GraphQLList(OpportunityType),
      description: "List of opportunities",
      resolve: async () => {
        const op = await Opportunity.find();
        return op;
      },
    },
    // ====== get opportunity by id ======
    get_opportunity: {
      type: OpportunityType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        return Opportunity.findById(args.id);
      },
    },
  },
});

module.exports = RootQuery;
