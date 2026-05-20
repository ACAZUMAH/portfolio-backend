const hello = () => "hello world";

const healthCheck = () => "OK";

export const idResolver = (parent: { _id: string }) => {
  return `${parent._id}`;
};

export const generalResolvers = {
  Query: {
    hello,
    healthCheck,
  },
};

export const getId = () => ({
  id: idResolver,
});
