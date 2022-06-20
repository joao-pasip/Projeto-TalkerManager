const { Router } = require('express');
const { PostLoginController } = require('../useCases/PostLogin/PostLoginController');
const { PostTalkerController } = require('../useCases/PostTalker/PostTalkerController');
const { PutByIdTalkerController } = require('../useCases/PutByIdTalker/PutByIdTalkerController');

const { getAllTalkerController } = require('../useCases/GetAllTalker/getAllTalkerController');
const { getByIdController } = require('../useCases/GetByIdTalker/getByIdController');
const { 
  GetSearchTalkerController, 
} = require('../useCases/GetSearchTalker/GetSearchTalkerController');

const { 
  DeleteByIdTalkerController,
} = require('../useCases/DeleteByIdTalker/DeleteByIdTalkerController');

const { TokenValidation } = require('../middleware/TokenValidation');

const { TalkerValidation } = require('../middleware/TalkerValidation');

const { LoginValidation } = require('../middleware/LoginValidation');

const router = Router();

router.get('/talker', async (req, res) => { await getAllTalkerController(req, res); });

router
  .get('/talker/search', TokenValidation, async (req, res) => GetSearchTalkerController(req, res));

router.get('/talker/:id', async (req, res) => { await getByIdController(req, res); });

router.post('/login', LoginValidation, (req, res) => PostLoginController(req, res));

router
  .post('/talker', TokenValidation, TalkerValidation, async (req, res) => { 
    await PostTalkerController(req, res); 
  });

router
  .put('/talker/:id', TokenValidation, TalkerValidation, async (req, res) => { 
    await PutByIdTalkerController(req, res); 
  });

router
  .delete('/talker/:id', TokenValidation, async (req, res) => DeleteByIdTalkerController(req, res));

module.exports = { 
  router,
};