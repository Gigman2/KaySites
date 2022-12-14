const ENV = process.env.REACT_APP_ENVIRONMENT as string;
export const APP_API = process.env[`REACT_APP_${ENV}_APP_API`] as string;
