import Router from "express";
// const userController = require('../controllers/user.controller')
// const authMiddleware = require('../middlewares/authMiddleware')
const router = new Router
// const {check} = require('express-validator')


// router.post('/user_register', [
//   // check('username', 'ИМя пользователя не может быть пустым').notEmpty()
//   // check('password', 'Пароль не может быть короче 4 и длиннее 10 символов').isLength({min:4, max:10})
// ], userController.registerUser)

// router.post('/user', authMiddleware, userController.createUser)
// router.post('/user', userController.createUser)

// router.get('/user', userController.getUsers)
// router.get('/user/:id', userController.getOneUser)

// router.put('/user', userController.updateUser)
// router.delete('/user/:id', userController.deleteUser)

router.get('/user/:id', (req, res) => {
  const userId = req.params.id || 0
	res.send({userId})
})

router.get('/json/:id', (req, res) => {
  const userId = req.params.id || 0
  const data = {
    name: 'Ivan',
    id: userId,
    email: 'ivan@mail.com'
  }
  res.json(data)
})

router.get('*', (req, res) => {
  // res.contentType('text/html');
	res.send({name: 'НИЧЕГО НЕ НАЙДЕНО!!!'})
})

export default router