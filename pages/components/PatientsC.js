import { useRouter } from 'next/router'
import React from 'react'
//patient/1

const PatientsC = ({ patient }) => {
  const router = useRouter()
  async function deletePatient() {
    const url = '/api/patients/' + patient.id
    const response = await fetch(url, {
      method: 'DELETE',
    })
    const deletedPatients = await response.json()
    console.log(deletedPatients)
    router.reload()
  }
function showDetail(){
  const url = '/patients/' + patient.id;
  router.push(url);
}
 

  return (
    <div>
      {patient.first_name}
      {patient.last_name}
      {patient.phone_number}
      {patient.email}
      <button onClick={deletePatient}>delete</button>
     <button onClick={showDetail}>show detail</button>
    </div>
  )
}

export default PatientsC


