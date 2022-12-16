export default class DataController {
    async getRecord (req,res) {
        const {name, surname} = req.body
      try {
        res.send('Add record!')
      } catch (error) {
        res.status(400).send('Page not found!')
      }
    }

    async addRecord (req,res) {
        const {name, surname} = req.body
      try {
        res.send('Add record!')
      } catch (error) {
        res.status(400).send('Page not found!')
      }
    }

    async modifyRecord (req,res) {
        const {name, surname} = req.body
      try {
        res.send('Add record!')
      } catch (error) {
        res.status(400).send('Page not found!')
      }
    }

    async deleteRecord (req,res) {
        const {name, surname} = req.body
      try {
        res.send('Add record!')
      } catch (error) {
        res.status(400).send('Page not found!')
      }
    }
}