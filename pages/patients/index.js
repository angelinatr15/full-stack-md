import pool from '../api/db/connection'
import Patients from '../components/Patients'
import PatientsForm from '../components/PatientsForm'

const patients = ({ patients }) => {
  return (
    <div>
      <Patients patients={patients} />
      <PatientsForm />
    </div>
  )
}

export default patients

export async function getStaticProps() {
  let patients = {}

  try {
    patients = await pool.query('SELECT * FROM patients')
  } catch (e) {
    console.log(e.message)
  }

  return {
    props: {
      patients: patients.rows,
    },
  }
}
