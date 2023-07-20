import { Group, Route } from 'express-custom';

import * as contact from './contact';

const route = new Route({
  name: 'Contact',
  description: 'The contact route',
  path: '/contact',
}).addEndpoint(contact.contactSubmission);

export const websiteGroup = new Group({
  name: 'Website',
  description: 'The website group',
  path: '/',
}).addRoute(route);
