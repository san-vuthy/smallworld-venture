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
const MessageType = require("../type/messageType");
const ApplicationType = require("../type/applicationType");

// === Model Section ===
const Company = require("../../models/companyModel");
const Message = require("../../models/messageModel");
const Application = require("../../models/applicationModel");

// === AdminQuery ===
const AdminQuery = new GraphQLObjectType({
  name: "AdminQuery",
  fields: {
    // ====== get all companies
    get_companies: {
      type: new GraphQLList(CompanyType),
      description: "List of companies",
      resolve: async () => {
        const com = await Company.find().sort({ createdAt: -1 });
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

    // ====== get all opportunties ======
    get_opportunities: {
      type: new GraphQLList(OpportunityType),
      description: "List of opportunities",
      resolve: async () => {
        const op = await Opportunity.find().sort({ createdAt: -1 });
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
    // ======= get message from users =======
    get_messages: {
      type: new GraphQLList(MessageType),
      description: "List of message from users",
      resolve: async () => {
        let message = await Message.find().sort({ createdAt: -1 });
        return message;
      },
    },
    // ====== get applicant's form ======
    get_applications: {
      type: new GraphQLList(ApplicationType),
      description: "List of applicant's info",
      resolve: async () => {
        let app = await Application.find();
        return app;
      },
    },
    // ====== get application by id ======
    get_application: {
      type: ApplicationType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
        let app = await Application.findById(args.id);
        return app;
      },
    },
  },
});

module.exports = AdminQuery;
