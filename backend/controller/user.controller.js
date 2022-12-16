// const db = require('../db')
// const bcrypt = require('bcrypt')
// require('dotenv').config()
// const {validationResult} = require('express-validator')
// const jwt = require('jsonwebtoken')


// const generateAccesToken = (id, role) => {
//   const payload = {
//     id,
//     role
//   }
//   return jwt.sign(payload, process.env.KEY_KEY, {expiresIn: "24h"})
// }

class UserController {
  async registerUser (req,res) {
    try {
      const {name, surname, email, password} = req.body
      //Validation
      // const validationErrors = validationResult(req)
      // if(!validationErrors.isEmpty()) {
      //   return res.status(400).send('Registration error!' + validationErrors)
      // }
      //Проверка на существование пользователя, проверка по логину
      const candidate = await db.query(`SELECT email from USERS where email=$1`, [email])
      console.log(candidate.rows)
      if (candidate.rows.length !== 0) {
        return res.send('Такой пользователь уже существует')
      }
      //Хешируем пароль
      const hashPassword = bcrypt.hashSync(password, 6)
      // const role = await db.query(`SELECT rule from RULES where rule="regularUser"`) Берем из БД нужную роль
      // Сохраняем в БД логин, роль и захешированный пароль
      const addUser = await db.query(`INSERT INTO users (name, surname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`, [name, surname, email, hashPassword])
      // return res.json(name + ' ' + hashPassword)
      return res.json(addUser.rows)
    } catch (error) {
      console.log(error)
    }
  }

  async loginUser (req,res) {
    try {
      // Достаем данные пользователя
      const {email, password} = req.body
      console.log(email, password)
      // Ищем пользователя с таким именем в БД
      const user = await db.query(`SELECT id, email, password from USERS where email=$1`, [email])
      console.log(user.rows)

      if (user.rows.length === 0) {
        return res.send('Такой пользователь не найден.')
      }
      // Сравниваем пароли
      const validPassword = bcrypt.compareSync(password, user.rows[0].password)
      if (!validPassword) {
        return res.send('Пароль не верный')
      }
      // Генерируем JWT
      const token = generateAccesToken(user.rows[0].id, user.rows[0].email)
      // возвращаем токен
      return res.json({token})
    } catch (error) {
      console.log(error)
    }
  }

  // Добавляет пользователя в БД
  async createUser (req,res) {
    const {name, surname} = req.body
    const addUser = await db.query(`INSERT INTO users (name, surname) VALUES ($1, $2) RETURNING *`, [name, surname])
    // return res.json(name + ' ' + surname)
    return res.json(addUser.rows)
  }


  async getUsers (req, res) {
    try {
      const userInfo = await db.query(`SELECT * from users`)
      // res.send(userInfo.rows)
      res.json(userInfo.rows)
    } catch (error) {
      res.status(400).send('Page not found!')
    }
  }

  async getOneUser (req,res) {
    res.send('ONE USERS HERE!' + req)
  }

  async updateUser (req,res) {
    console.log(error)
  }
  async deleteUser (req,res) {
    try {
      const {email, token} = req.body
      console.log(req.params.id)
      console.log(email, token)

      // Проверяем JWT
      try {
        const decoded = jwt.verify(token, process.env.KEY_KEY);
        console.log(decoded)
      } catch (error) {
        res.send('Token is note valid!')
      }

      res.send('Delete')
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new UserController