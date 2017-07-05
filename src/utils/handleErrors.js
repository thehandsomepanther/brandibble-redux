export default (response) => {
  const { errors } = response;
  return errors || response;
};
