//GET
const getProjectsCardData = async formData => {
    try {
        const res = await fetch(`http://localhost:3100/projects/?search=${formData.searchTxt}&reqtechs=${formData.requiredTechs}&difflvls=${formData.difficultyLevels}&assets=${formData.assets}&sortby=${formData.sortBy}&amount=${formData.amount}&currentpage=${formData.currentPage}`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getUsersProjectsCardData = async formData => {
    try {
        const res = await fetch(`http://localhost:3100/projects/dashboard/?search=${formData.searchTxt}&reqtechs=${formData.requiredTechs}&difflvls=${formData.difficultyLevels}&assets=${formData.assets}&sortby=${formData.sortBy}&amount=${formData.amount}&currentpage=${formData.currentPage}&userId=${formData.userId}`, { credentials: 'include' })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getProjectData = async projectId => {
    try {
        const res = await fetch(`http://localhost:3100/projects/${projectId}`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//PUT
const updateProjectData = async updatedProjectData => {
    try {
        const res = await fetch(`http://localhost:3100/projects`, {
            method: 'PUT',
            body: updatedProjectData,
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const hideProject = async projectId => {
    try {
        const res = await fetch(`http://localhost:3100/projects/${projectId}/remove`, {
            method: 'PUT',
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

//POST
const addNewProject = async newProjectData => {
    try {
        const res = await fetch(`http://localhost:3100/projects`, {
            method: 'POST',
            body: newProjectData,
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}


//DELETE
const removeReqTech = async (projectId, reqTechId) => {
    try {
        const res = await fetch(`http://localhost:3100/projects/remove/requiredtech/${projectId}/${reqTechId}`, {
            method: 'DELETE',
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const removePicture = async pictureId => {
    try {
        const res = await fetch(`http://localhost:3100/projects/remove/picture/${pictureId}`, {
            method: 'DELETE',
        })
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

export { getProjectsCardData, getUsersProjectsCardData, getProjectData, updateProjectData, hideProject, addNewProject, removeReqTech, removePicture }