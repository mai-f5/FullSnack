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

export { inputChangeHandler, removeHandler }
