const getDifficultyLevelsList = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/staticdata/difficultylevels`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getGenderList = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/staticdata/gender`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getOccupationsList = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/staticdata/occupations`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getRequiredTechsList = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/staticdata/requiredtechs`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getNotificationsTypesList = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/staticdata/notificationstypes`)
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

export { getDifficultyLevelsList, getGenderList, getOccupationsList, getRequiredTechsList, getNotificationsTypesList }