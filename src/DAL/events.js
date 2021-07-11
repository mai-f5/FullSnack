//NOTIFICATIONS

//GET
const getUsersNewNotifications = async userId => {
    try {
        const res = await fetch(`http://localhost:3100/events/notifications/${userId}`)
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
            body: newNotificationData,
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
        const res = await fetch(`http://localhost:3100/events/likes/${userId}/${projectId}`)
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
            body: newLikeData,
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
            method: 'DELETE'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

module.exports = { getUsersNewNotifications, updateNotificationsAsRead, addNewNotification, getDidUserLikeProject, addLike, removeLike }