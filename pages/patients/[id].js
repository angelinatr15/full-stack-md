import React from 'react'
import pool from '../api/db/connection'


const patientDetails = ({ patient }) => {
  return (
    <div>
      {patient.id} {patient.first_name} {patient.last_name}
    </div>
  )
}

export default patientDetails

export async function getStaticProps(context) {
  let patient = []
  const id = context.params.id
  try {
    patient = await pool.query('SELECT * FROM patients WHERE id=$1', [id])
  } catch (error) {
    console.log(error.message)
  }
  return {
    props: { patient: patient.rows[0] },
  }
}

export async function getStaticPaths() {
    let ids =[]
  try {
    ids = await pool.query('SELECT id FROM patients')
  } catch (error) {
    console.log(error.message)
  }
  return {
    fallback: 'blocking',
    paths: ids.rows.map((id) => ({
      params: { id: id.toString() },
    })),
  }
}
