
export async function fetchAllUsers() {
    try {
        const res = await fetch('https://dummyjson.com/users?limit=6')
        const data = await res.json()
        return data.users
    } catch (error) {
        throw new Error(error)
    }
}

export async function fetchSearchUsers(queryData) {
    console.log("queryData:", queryData)
    try {
        const res = await fetch(`https://dummyjson.com/users/search?q=${queryData}`)
        const data = await res.json()
        return data.users
    } catch (error) {
        throw new Error(error)
    }
}