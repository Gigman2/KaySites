/**
 * Method to return backend services urls based on the environment
 * @function
 *
 * */
const configs = () => {
  // Get REACT ENV
  const ENV = process.env.REACT_APP_ENVIRONMENT as string;
  return {
    APP_API: process.env[`REACT_APP_${ENV}_APP_API`],
  };
};

export default configs;
