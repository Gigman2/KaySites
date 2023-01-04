import { generatePath } from 'react-router-dom';
import { LINKS } from '../types';

// Can be potentially made even smarter:
// see https://www.smashingmagazine.com/2021/01/dynamic-static-typing-typescript/

function createRoute(
  path,
  section
) {
  return {
    path,
    section,
    link: (params) => generatePath(path, params ?? {}),
  };
}

// prettier-ignore
const routes = {
  root: createRoute('/', LINKS.ROOT),
  error: createRoute('404', LINKS.ROOT),
  register: createRoute('signup', LINKS.ROOT),
  login: createRoute('login', LINKS.ROOT),
  logout: createRoute('logout', LINKS.ROOT),

  // DASHBOARD
  dashboard: createRoute('/dashboard', LINKS.DASHBOARD),
  applications: createRoute('applications', LINKS.DASHBOARD),

  // PAYMENT //
  payment: createRoute('payments', LINKS.DASHBOARD),
  addCard: createRoute('add-card', LINKS.DASHBOARD),
  addBank: createRoute('add-bank-transfer', LINKS.DASHBOARD),

  documentLibrary: createRoute('document-library', LINKS.DASHBOARD),
  applicationProgress: createRoute('application-progress', LINKS.DASHBOARD),
}

export const pathTo = Object.fromEntries(
  Object.entries(routes).map(([id, route]) => [id, route.path])
);

export const linkTo = Object.keys(routes).reduce(
  (acc, key) => {
    acc[key] = routes[key].link;
    return acc;
  },
  {}
);

// For Analytics
export const sectionOf = Object.fromEntries(
  Object.entries(routes).map(([, route]) => [route.path, route.section])
);
