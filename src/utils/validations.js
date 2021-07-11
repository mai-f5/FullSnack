const inputsRequirements = {
    username: {
        required: true,
        pattern: /^[a-zA-Z0-9]{4,12}$/
    },
    password: {
        required: true,
        pattern: /^(?=.*\d)(?=.*[0-9a-zA-Z])(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
    },
    passwordConfirm: {
        required: true,
        pattern: ''
    },
    email: {
        required: true,
        pattern: ''
    },
    projectName: {
        required: true,
        pattern: ''
    },
    difficultyLevel: {
        required: true,
        pattern: ''
    },
    requiredTechnologies: {
        required: true,
        pattern: ''
    },
    githubLink: {
        required: false,
        pattern: ''
    },
    projectDescription: {
        required: false,
        pattern: ''
    },
    projectPictures: {
        required: false,
        pattern: ''
    },
    projectAssets: {
        required: false,
        pattern: ''
    },
    topic: {
        required: true,
        pattern: ''
    },
    comment: {
        required: true,
        pattern: ''
    }
}


const validateInput = ({ target: { value, name } }, formData) => {

    let newError = '';
    const validations = inputsRequirements[name];
    console.log(value, validations.pattern.test(value))
    if (!value && validations.required) {
        newError = `${name} is required`;
    } else if (validations.pattern && !validations.pattern.test(value)) {
        newError = `Invalid ${name} value`;
    }

    return {
        ...formData,
        [name]: {
            ...formData[name],
            value: value,
            error: newError
        }
    };
};

export default validateInput;