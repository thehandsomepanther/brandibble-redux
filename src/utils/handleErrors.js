export default (response) => {
  const { errors } = response;
  throw new Error(`Action rejected:\n${JSON.stringify(errors || response, null, 2)}`);
};
