import { Router } from 'express';

import {
  handleGetAllPeople,
  handleCreatePeople,
  handleGetByCountry,
} from './people.controller';

const router = Router();

router.get('/', handleGetAllPeople);
// router.get('/:id', handleGetUser);
router.get('/country/:country', handleGetByCountry);
router.post('/', handleCreatePeople);
// router.patch('/:id', handleUpdateUser);
// router.delete('/:id', handleDeleteUser);

export default router;