import people from './api/people';

function routes(app) {
  app.use('/api/people', people);
}

export default routes;