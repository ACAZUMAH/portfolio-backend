import { unwrapResolverError } from "@apollo/server/errors";
import { GraphQLFormattedError } from "graphql/error";
import createHttpError from "http-errors";
import { ErrorCode } from "src/common/enums";
import { logger, rollbar } from "src/logger";

const errorCodes: Record<number, ErrorCode> = {
  400: ErrorCode.BAD_REQUEST,
  401: ErrorCode.UNAUTHORIZED,
  403: ErrorCode.FORBIDDEN,
  404: ErrorCode.NOT_FOUND,
  500: ErrorCode.INTERNAL_SERVER_ERROR,
};

export const formatError = (
  formattedError: GraphQLFormattedError,
  error: unknown
): GraphQLFormattedError => {
  const unwrappedError: any = unwrapResolverError(error);
  logger.error(unwrappedError);

  if (!createHttpError.isHttpError(unwrappedError)) {
    rollbar.error(`GraphQL Error: ${unwrappedError?.message || "Unknown error"}`);
    return formattedError;
  }

  return {
    ...formattedError,
    message: unwrappedError.message,
    extensions: {
      ...formattedError.extensions,
      code: errorCodes[unwrappedError.statusCode] || ErrorCode.INTERNAL_SERVER_ERROR,
    },
  };
};
