import React, {useState} from 'react'
import { findBookAndDelete } from '../../api/library/UsersApi'



function UserBooksTable({
    name,
    category,
    author,
    date,
    subID,
    id,
    deleteItem,
    userId
}) {
   
    function deleteItem(userId, subID){
        findBookAndDelete(userId, subID)
      console.log(userId)
    }


  return (
    <tr>
      <td>{date}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{author}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteItem(userId, subID)}
        >
          Ištrinti
        </button>
      </td>
      <td></td>
    </tr>
  )
}

export default UserBooksTable