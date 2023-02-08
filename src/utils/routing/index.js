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
  // HOME
  dashboard: createRoute('/dashboard', LINKS.DASHBOARD),
  
  // APPLICATIONS //
  applications: createRoute('applications', LINKS.DASHBOARD),

  // MESSAGES //
  messages: createRoute('messages', LINKS.DASHBOARD),
  // PAYMENT //
  payment: createRoute('payments', LINKS.DASHBOARD),
  addCard: createRoute('add-card', LINKS.DASHBOARD),
  addBank: createRoute('add-bank-transfer', LINKS.DASHBOARD),

  // LIBRARY //
  documentLibrary: createRoute('document-library', LINKS.DASHBOARD),

  // PROGRESS //
  applicationProgress: createRoute('application-progress', LINKS.DASHBOARD),


  // ADMIN
  // HOME
  admin: createRoute('/admin', LINKS.ADMIN),

  home: createRoute('home', LINKS.ADMIN),
  application: createRoute('application', LINKS.ADMIN),
  all: createRoute('all', LINKS.ADMIN),

  adminUtilities: createRoute('admin-utilities', LINKS.ADMIN),
  accounts: createRoute('accounts', LINKS.ADMIN),

  policyDocument: createRoute('policy-document', LINKS.ADMIN),

  institution: createRoute('institutions', LINKS.ADMIN),

  fees: createRoute('fees', LINKS.ADMIN),

  registeredUsers: createRoute('registered-users', LINKS.ADMIN),

  financials: createRoute('financials', LINKS.ADMIN),

  settings: createRoute('settings', LINKS.ADMIN),

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
