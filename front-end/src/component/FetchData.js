import React from "react";

export const FetchData = () => {
    const [users, setUsers] = React.useState({})
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/users/")
                let actualData = await response.json()
                setUsers(actualData)
                console.log("set")
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [count])

    const handleClick = () => {
        setCount(count + 1)
    }

    const userList = Object.values(users).map((user, index) => {
        return (
            <tr key={index}>
                <th scope="col">{user.pk}</th>
                <th scope="col">{user.username}</th>
                <th scope="col">{user.email}</th>
                <th scope="col">{user.is_superuser ? "True" : "False"}</th>
            </tr>
        )

    })

    return (
        <div className="container-fluid text-center table-container fetchData-page" id="fetchData">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">is_superuser</th>
                </tr>
                </thead>
                <tbody>
                {userList}
                </tbody>
            </table>

            <button type="button" className="btn btn-light" onClick={handleClick}>
                刷新{count}次
            </button>
        </div>
    )
}
