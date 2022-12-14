import React from "react";

export const FetchData = () => {
  const [users, setUsers] = React.useState({})
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    return async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/users/")
        let actualData = await response.json()
        setUsers(actualData)
        console.log("get data success...")
      } catch (error) {
        console.log(error)
      }
    }
  }, [count])

  const handleClick = () => {
    setCount(count + 1)
  }

  const userList = Object.values(users).map((user, index) => {
    return (
      <tr key={index} className="table-title">
        <th>{user.pk}</th>
        <th>{user.username}</th>
        <th>{user.email}</th>
        <th>{user.is_superuser ? "True" : "False"}</th>
      </tr>
    )

  })

  return (
    <div className="container-fluid table-container fetchData-page" id="fetchData">
      <div className="data-card">
        <table className="data-table">
          <thead>
          <tr className="table-title">
            <th>iD</th>
            <th>Name</th>
            <th>Email</th>
            <th>is_superuser</th>
          </tr>
          </thead>
          <tbody>
          {userList}
          </tbody>
        </table>

        <button type="button" className="btn btn-light fresh-btn" onClick={handleClick}>
          刷新{count}次
        </button>
      </div>
    </div>
  )
}
