
//GET
const getUserData = async userId => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}`, { method: 'GET', credentials: 'include' })
        return await res.json();
    } catch (err) {
        console.log(err)
    }
}

//PUT
const updateUserData = async updatedUserData => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${updatedUserData.get('userId')}`, {
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
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/password/${updatedPasswordData.userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedPasswordData),
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
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, {
            method: 'POST',
            credentials: 'include',
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
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUsersData),
        })
        return await res.json()
    } catch (err) {
        console.log(err)
        return err
    }
}


export { getUserData, updateUserData, updateUserPassword, login, addNewUser }