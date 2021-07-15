//GET
const getProjectsThreadsComments = async projectId => {
    try {
        const res = await fetch(`http://localhost:3100/forum/${projectId}`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//POST
const addNewThread = async newThreadData => {
    try {
        const res = await fetch(`http://localhost:3100/forum/thread`, {
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
        const res = await fetch(`http://localhost:3100/forum/comment`, {
            method: 'POST',
            body: newCommentData,
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

export { getProjectsThreadsComments, addNewThread, addNewComment }