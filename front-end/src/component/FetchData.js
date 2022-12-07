import React from "react";

export const FetchData = () => {
    const [user, setUser] = React.useState({})
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/users/1/")
                let actualData = await response.json()
                setUser(actualData)
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

    return (
        <div>
            <h1>{JSON.stringify(user, null, 2)}</h1>
            <button onClick={handleClick}>刷新{count}次</button>
        </div>
    )
}
