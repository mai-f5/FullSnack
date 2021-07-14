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

const removeFileHandler = async (type, id, filesArr = [], file = null, userId) => {
    console.log('type', type, 'id:', id, 'filesArr', filesArr, 'file', file)
    switch (type) {
        case 'Project':
            const hideRes = await hideProject(id, userId)
            console.log('hide res', hideRes)
            return hideRes;


        case 'File': //assetsSrc
            return [];

        case 'Picture':
            if (typeof file !== 'string') {
                console.log([...filesArr].splice(0, 1))
                filesArr.splice(id, 1)
                console.log('new files array-pics', filesArr)
                return filesArr;
            }

            else {
                const removePicRes = await removePicture(id)
                return removePicRes;
            }
    }
}

export { inputChangeHandler, removeFileHandler }
