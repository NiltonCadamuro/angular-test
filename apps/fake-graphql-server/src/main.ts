import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    numbers(count: Int!, min: Int, max: Int): [Int!]!
  }
`;

const resolvers = {
  Query: {
    numbers: (
      _parent: any,
      args: { count: number; min?: number; max?: number }
    ) => {
      const { count, max, min } = args;

      if (min !== undefined && max !== undefined) {
        return Array.from({ length: count }, () =>
          Math.floor(Math.random() * (max - min) + min)
        );
      }

      return Array.from({ length: count }, () =>
        Math.floor(Math.random() * 100)
      );
    },
  },
};

async function bootstrap() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await server.listen({ port: 4000 });
  console.log(`Fake GraphQL rodando em ${url}`);
}

bootstrap();
