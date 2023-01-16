import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { list } from '../redux/actions'
import { selectEmpList } from '../redux/selector'
import Layout from './Layout'

export const List = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const empList = useSelector(selectEmpList)

  useEffect(() => {
    dispatch(list())
  }, [dispatch])

  const handleUpdate = (id) => {
    navigate(`/form/${id}`)
  }

  return (
    <Layout>
    <table className='wrap'>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Edit</th>
      </tr>
      {empList?.map((item) => (
        <tr>
          <td>{item?.employee_name}</td>
          <td>{item?.employee_age}</td>
          <td>{item?.employee_salary}</td>
          <td className='text-center'><button className='mt-5 customButton' onClick={() => handleUpdate(item.id)}>Edit</button></td>
        </tr>
      ))}
    </table>

    </Layout>
  )
}
