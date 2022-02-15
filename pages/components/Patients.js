import React from 'react'
import PatientsC from './PatientsC'
const Patients = ({ patients }) => {
  return (
    <div>
      {patients.map((patient) => (
        <PatientsC key={patient.id} patient={patient} />
      ))}
    </div>
  )
}

export default Patients
