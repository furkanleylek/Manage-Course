
export async function fetchAllUsers() {
    try {
        const res = await fetch('https://dummyjson.com/users?limit=6')
        const data = await res.json()
        return data.users
    } catch (error) {
        throw new Error(error)
    }
}
