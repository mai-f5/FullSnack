//NOTIFICATIONS

//GET
const getUsersNewNotifications = async userId => {
    try {
        const res = await fetch(`http://localhost:3100/events/notifications/${userId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//PUT
const updateNotificationsAsRead = async userId => {
    try {
        const res = await fetch(`http://localhost:3100/events/notifications/${userId}`, {
            method: 'PUT',
            credentials: 'include'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//POST
const addNewNotification = async newNotificationData => {
    try {
        const res = await fetch(`http://localhost:3100/events/notifications`, {
            method: 'POST',
            body: JSON.stringify(newNotificationData),
            headers: { 'Content-Type': 'application/json' }
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}



//LIKES

//GET
const getDidUserLikeProject = async (userId, projectId) => {
    try {
        const res = await fetch(`http://localhost:3100/events/likes/${userId}/${projectId}`, {
            method: 'GET',
            credentials: 'include'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//POST
const addLike = async newLikeData => {
    try {
        const res = await fetch(`http://localhost:3100/events/likes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newLikeData),
            credentials: 'include'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//DELETE
const removeLike = async (userId, projectId) => {
    try {
        const res = await fetch(`http://localhost:3100/events/likes/${userId}/${projectId}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

module.exports = { getUsersNewNotifications, updateNotificationsAsRead, addNewNotification, getDidUserLikeProject, addLike, removeLike }