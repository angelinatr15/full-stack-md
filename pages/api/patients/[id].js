import pool from '../db/connection'

export default async function handler(req, res) {
  const id = req.query.id

  if (req.method === 'DELETE') {
    try {
      const patients = await pool.query(
        'DELETE FROM patients WHERE id=$1 RETURNING *',
        [id],
      )
      console.log(patients.rows[0])
      res.json(patients.rows[0])
    } catch (e) {
      console.log(e.message)
    }
  }else if (req.method==='GET'){
    try {
      const patient = await pool.query('SELECT * FROM patients WHERE id = $1', [id])
      console.log(patient.rows[0]);
      res.json(patient.rows[0])
    } catch (error) {
      console.log(error.message)
    }
  }
}
