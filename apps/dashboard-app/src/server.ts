/* eslint-disable @typescript-eslint/no-explicit-any */
// Polyfill para WebSocket no ambiente Node (SSR)
(global as any).WebSocket = require('ws');

// Importa o zone.js para o SSR
import 'zone.js/node';

import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Endpoints de API REST podem ser definidos aqui, se necessário.
 * Exemplo:
 * app.get('/api/**', (req, res) => {
 *   // Lógica da API
 * });
 */

/**
 * Serve arquivos estáticos da pasta /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

/**
 * Trata todas as outras requisições renderizando a aplicação Angular.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

/**
 * Inicia o servidor se este módulo for o entry point principal.
 * O servidor ouve na porta definida pela variável de ambiente PORT ou, por padrão, 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * O handler de requisição usado pelo Angular CLI (dev-server e durante o build).
 */
export const reqHandler = createNodeRequestHandler(app);
