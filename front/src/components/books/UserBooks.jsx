import React, {useState, useEffect} from 'react'
import UserBooksTable from './UserBooksTable';
import { useGlobalUserContext } from "../context/UserContext";



function UserBooks() {
  const { userData } = useGlobalUserContext();
  const [userId, setUserId] = useState ("")

  useEffect(() => {
    setUserId(userData._id)
    console.log(userId)
    
}, []);



  if (Object.keys(userData).length !== 0) {
    var books = userData.books.map((item) => {
      return (
        <UserBooksTable
          key={item._id}
          name={item.name}
          category={item.category}
          date={item.date}
          subID={item._id}
          author={item.author}
          userId= {userId}
        />
      );
    });
  }

  return (
    <>
    <div className="container">
      <table className="table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Knygos pavadinimas</th>
          <th>Autorius</th>
          <th>Žanras</th>
          <th>Veiksmas</th>
        </tr>
      </thead>
      <tbody>{books}</tbody>
      </table>
      </div>
      </>
  )
}

export default UserBooks