import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UPDATE_EMPLOYEE } from '../endpoints'
import { apiUpdate } from '../fetcher'
import { detail } from '../redux/actions'
import { selectEmpDetail } from '../redux/selector'
import Layout from './Layout'

const Form = () => {
  const params = useParams()
  const dispatch = useDispatch()
  const emp_detail = useSelector(selectEmpDetail)
  const [employee_detail, setEmployee_detail] = useState()

  useEffect(() => {
    dispatch(detail(params.id))
  }, [params.id, dispatch])

  useEffect(() => {
    setEmployee_detail(emp_detail)
  }, [emp_detail])

  const handleChange = (e, key) => {
    setEmployee_detail((prev) => ({
      ...prev,
      [key]: e.target.value
    }))
  }
  const handleSubmit = async () => {
    try {
      const resp = await apiUpdate(UPDATE_EMPLOYEE + '/' + params.id, emp_detail)
      if (resp.status === 'success') {
        toast(resp.message)
      } else {
        toast('Wait for 1 minute')
      }
    } catch (err) {
      if (err.response.status === 429) {
        toast('Wait for 1 Minute')
      }
    }
  }
  return (
    <Layout>
      <div className='wrap flex items-center justify-center' style={{ maxWidth: '50%', margin: 'auto' }}>
        <div style={{ width: '40%' }}>
          <input value={employee_detail?.employee_name} placeholder='Employee Name' name='name' className={`customInput mt-5`} onChange={(e) => handleChange(e, 'employee_name')} />
          <input value={employee_detail?.employee_age} placeholder='Employee Age' name='age' className={`customInput mt-5`} onChange={(e) => handleChange(e, 'employee_age')} />
          <input value={employee_detail?.employee_salary} placeholder='Employee Salary' name='sal' className={`customInput mt-5`} onChange={(e) => handleChange(e, 'employee_salary')} />
          <button className='mt-5 customButton' type='submit' onClick={handleSubmit}>Submit</button>
        </div>
      </div>

    </Layout>
  )
}

export default Form