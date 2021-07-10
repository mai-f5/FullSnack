const getDifficultyLevelsList = async () => {
    try {
        const res = await fetch('http://localhost:3100/staticdata/difficultylevels')
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getGenderList = async () => {
    try {
        const res = await fetch('http://localhost:3100/staticdata/gender')
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getOccupationsList = async () => {
    try {
        const res = await fetch('http://localhost:3100/staticdata/occupations')
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getRequiredTechsList = async () => {
    try {
        const res = await fetch('http://localhost:3100/staticdata/requiredtechs')
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

const getNotificationsTypesList = async () => {
    try {
        const res = await fetch('http://localhost:3100/staticdata/notificationstypes')
        return await res.json()
    } catch (err) {
        console.log(err)
    }
}

export { getDifficultyLevelsList, getGenderList, getOccupationsList, getRequiredTechsList, getNotificationsTypesList }