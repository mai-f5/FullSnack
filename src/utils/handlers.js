import { hideProject, removePicture } from '../DAL/projects'

const inputChangeHandler = ({ target }, formData) => {
    return {
        ...formData,
        [target.name]: {
            ...formData[target.name],
            value: target.value
        }
    }
}

const removeHandler = async (type, id, idx, filesArr = [], file = null, userId) => {
    switch (type) {
        case 'Project':
            const hideRes = await hideProject(id, userId)
            return hideRes;

        case 'File': //assetsSrc
            return [];

        case 'Picture':
            if (!file.pic_src) {
                filesArr.splice(idx, 1)
                return filesArr;
            } else {
                try {
                    const removePicRes = await removePicture({ userId: userId, picId: id })
                    filesArr.splice(idx, 1)
                    return filesArr;
                } catch (err) {
                    console.log(err)
                }
            }
    }
}

function handleTimestamp(timestamp) {
    var d = new Date(timestamp);
    const hours = d.getUTCHours() < 10 ? `0${d.getUTCHours()}` : d.getUTCHours();
    const minutes = d.getUTCMinutes() < 10 ? `0${d.getUTCMinutes()}` : `${d.getUTCMinutes()}`

    const day = d.getUTCDate();
    const month = d.getUTCMonth() < 10 ? `0${d.getUTCMonth()}` : `${d.getUTCMonth()}`
    const year = d.getUTCFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

export { inputChangeHandler, removeHandler, handleTimestamp }
