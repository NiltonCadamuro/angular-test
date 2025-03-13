import { ApplicationConfig } from '@angular/core';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { provideApollo } from 'apollo-angular';
import {
  ApolloClientOptions,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { getMainDefinition } from '@apollo/client/utilities';

export function createApollo(): ApolloClientOptions<any> {
  const platformId = inject(PLATFORM_ID);

  const http = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  let ws;

  if (isPlatformBrowser(platformId)) {
    ws = new GraphQLWsLink(
      createClient({
        url: 'ws://localhost:4000/graphql',
        lazy: false,
        keepAlive: 10000,
      })
    );
  }

  const link =
    isPlatformBrowser(platformId) && ws
      ? split(
          // A função de divisão: se a operação for subscription, use o link WS; caso contrário, use HTTP
          ({ query }) => {
            const definition = getMainDefinition(query);
            return (
              definition.kind === 'OperationDefinition' &&
              definition.operation === 'subscription'
            );
          },
          ws,
          http
        )
      : http;

  return {
    link,
    cache: new InMemoryCache(),
    queryDeduplication: false,
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideRouter(appRoutes),
    provideApollo(createApollo),
  ],
};
