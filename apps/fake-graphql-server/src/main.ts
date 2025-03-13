import { ApolloServer, gql } from 'apollo-server';
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const typeDefs = gql`
  type Query {
    numbers(count: Int!, min: Int, max: Int): [Int!]!
  }

  type Subscription {
    numbersUpdated(count: Int!, min: Int, max: Int): [Int!]!
  }
`;

const resolvers = {
  Query: {
    numbers: (_, args: { count: number; min?: number; max?: number }) => {
      const { count, min, max } = args;
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
  Subscription: {
    numbersUpdated: {
      subscribe: () => {
        // Neste exemplo, os argumentos não são utilizados para filtrar,
        // mas você pode implementar lógica personalizada se precisar.
        return pubsub.asyncIterableIterator('NUMBERS_UPDATED');
      },
    },
  },
};

// Publica uma atualização a cada 10 segundos
setInterval(() => {
  const count = 7;
  const min = 1000;
  const max = 10000;
  const numbers = Array.from({ length: count }, () =>
    Math.floor(Math.random() * (max - min) + min)
  );
  pubsub.publish('NUMBERS_UPDATED', { numbersUpdated: numbers });
}, 10000);

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ${url}`);
});
