const inputChangeHandler = ({ target }, formData) => {
    return {
        ...formData,
        [target.name]: {
            ...formData[target.name],
            value: target.value
        }
    }
}


// onChange = {(e) => setSignUpData(prevState => ({
//     ...prevState,
//     username: {
//         ...prevState['username'],
//         value: e.target.value
//     }
// })
// )}

export { inputChangeHandler }
