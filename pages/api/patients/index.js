import pool from '../db/connection'

export default async function handler(req, res) {
  const patients = req.body
  if (req.method === 'POST') {
    try {
      const newPatient = await pool.query(
        'INSERT INTO patients(first_name, last_name, phone_number, email) VALUES($1,$2,$3,$4) RETURNING *',
        [
          patients.first_name,
          patients.last_name,
          patients.phone_number,
          patients.email,
        ],
      )
      console.log(newPatient.rows[0])
      res.json(newPatient.rows[0])
    } catch (e) {
      console.log(e.message)
    }
  } else if (req.method === 'GET') {
    try {
      const patients = await pool.query('SELECT * FROM patients')
      console.log(patients.rows)
      res.json(patients.rows)
    } catch (e) {
      console.log(e.messages)
    }
  }
}
