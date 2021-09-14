//GET
const getProjectsThreadsComments = async projectId => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/forum/${projectId}`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//POST
const addNewThread = async newThreadData => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/forum/thread`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newThreadData),
            credentials: 'include'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const addNewComment = async newCommentData => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/forum/comment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCommentData),
            credentials: 'include'
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

export { getProjectsThreadsComments, addNewThread, addNewComment }