import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { graphqlUploadExpress } from 'graphql-upload';
import http from 'http';
import helmet from 'helmet';
import nextjsApp from 'next';
import cors from 'cors';
import 'dotenv/config';

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import db from './db';
import authorization from './utils/authorization';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from 'apollo-server-core';

const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = nextjsApp({ dev });
const handle = nextApp.getRequestHandler();
const port: number = Number(process.env.PORT);

const App: () => Promise<void> = async () => {
  try {
    await nextApp.prepare();
    const app: Express = express();
    const httpServer = http.createServer(app);

    app.use(
      helmet({
        contentSecurityPolicy: false,
      }),
      cors(),
      express.urlencoded({ extended: true, limit: '10mb' }),
      express.json({ limit: '10mb' })
    );
    const server = new ApolloServer({
      context: ({ req }) => authorization(req),
      typeDefs,
      resolvers,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
        dev
          ? ApolloServerPluginLandingPageGraphQLPlayground()
          : ApolloServerPluginLandingPageDisabled(),
      ],
    });

    await server.start();
    app.use(graphqlUploadExpress());
    server.applyMiddleware({ app, path: '/api' });
    await new Promise<void>((resolve) => app.listen({ port }, resolve));
    await db();

    app.all('*', (req, res) => handle(req, res));
    app.get('/static/*', (req, res) => {
      // Disallow travelling up in the file tree
      let target = req.originalUrl.replace('..', '');
      return res.sendFile(__dirname + '/static' + target);
    });
    //await setup();

    console.log(`🚀 Server ready at ${server.graphqlPath}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default App;
