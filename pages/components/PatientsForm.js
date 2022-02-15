import { createRouteLoader } from 'next/dist/client/route-loader'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
//This is where I left off 02.12.2021 will resume here to continue my form
const PatientsForm = () => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const phoneNumberRef = useRef()
  const emailRef = useRef()
  const router = useRouter()
  async function submitForm(e) {
    e.preventDefault()
    try {
      const newPatient = {
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
        phone_number: phoneNumberRef.current.value,
        email: emailRef.current.value,
      }

      const response = await fetch('/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPatient),
      })
      const patient = await response.json()
      console.log(patient)
      router.reload()
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          ref={firstNameRef}
          placeholder="First Name"
          type="text"
          required
        />
        <input ref={lastNameRef} placeholder="Last Name" type="text" required />
        <input
          ref={phoneNumberRef}
          placeholder="Phone Number"
          type="text"
          required
        />
        <input ref={emailRef} placeholder="Email" type="text" required />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default PatientsForm
