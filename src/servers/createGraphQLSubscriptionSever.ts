import { WebSocketServer } from "ws";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useServer } from "graphql-ws/use/ws";
import { CreateGraphQLSubscriptionSever } from "src/common/interfaces";

export const createGraphQLSubscriptionSever = ({
  schema,
  httpServer,
}: CreateGraphQLSubscriptionSever) => {
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  // Hand in the schema we just created and have the
  // WebSocketServer start listening.
  const serverCleanup = useServer({ schema }, wsServer);

  return serverCleanup;
};
