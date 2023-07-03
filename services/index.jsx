
export async function fetchAllUsers(limit, skip) {
    try {
        const res = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
        const data = await res.json()
        return data.users
    } catch (error) {
        throw new Error(error)
    }
}
export async function fetchSearchUsers(queryData) {
    try {
        const res = await fetch(`https://dummyjson.com/users/search?q=${queryData}`)
        const data = await res.json()
        return data.users
    } catch (error) {
        throw new Error(error)
    }
}