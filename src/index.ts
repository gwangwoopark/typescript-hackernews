import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { context } from "./context";

import { schema } from "./schema";
export const server = new ApolloServer({
    schema,
    context,
    introspection: true, // apollo turns off intorspection in production by default 
    plugins: [ApolloServerPluginLandingPageLocalDefault()], // apollo turns off Apollo Sandbox in production
});

const port = process.env.PORT || 3000;
server.listen({ port }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
