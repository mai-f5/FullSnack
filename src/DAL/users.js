
//GET
const getUserData = async userId => {
    try {
        const res = await fetch(`http://localhost:3100/users/${userId}`, { method: 'GET', credentials: 'include' })
        return await res.json();
    } catch (err) {
        console.log(err)
    }
}

//PUT
const updateUserData = async updatedUserData => {
    try {
        const res = await fetch(`http://localhost:3100/users/${updatedUserData.get('userId')}`, {
            method: 'PUT',
            body: updatedUserData,
            credentials: 'include'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const updateUserPassword = async updatedPasswordData => {
    try {
        const res = await fetch(`http://localhost:3100/users/${updatedPasswordData.userId}`, {
            method: 'PUT',
            body: updatedPasswordData,
            credentials: 'include'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//POST
const login = async loginData => {
    try {
        const res = await fetch(`http://localhost:3100/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData),
        })
        return await res.json()
    } catch (err) {
        console.log(err)
        return "Incorrect Username/Password"
    }
}

const addNewUser = async newUsersData => {
    try {
        const res = await fetch(`http://localhost:3100/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUsersData),
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}


export { getUserData, updateUserData, updateUserPassword, login, addNewUser }