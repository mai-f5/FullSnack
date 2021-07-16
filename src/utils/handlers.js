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

const removeHandler = async (type, id, filesArr = [], file = null, userId) => {
    switch (type) {
        case 'Project':
            const hideRes = await hideProject(id, userId)
            console.log('hide res', hideRes)
            return hideRes;

        case 'File': //assetsSrc
            return [];

        case 'Picture':
            if (typeof file !== 'string') {
                filesArr.splice(id, 1)
                return filesArr;
            }

            else {
                const removePicRes = await removePicture(id)
                return removePicRes;
            }
    }
}

export { inputChangeHandler, removeHandler }
