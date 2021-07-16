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
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    name: {
        required: true,
        pattern: /^[\s\S]{4,20}$/
    },
    difficultyLevel: {
        required: true,
    },
    requiredTechs: {
        required: true,
    },
    githubLink: {
        required: false,
        pattern: /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi
    },
    description: {
        required: false,
    },
    pictures: {
        required: true,
        pattern: ''
    },
    assetsSrc: {
        required: false,
        pattern: ''
    },
    topic: {
        required: true,
        pattern: /^.{2,75}$/
    },
    body: {
        pattern: /^.{0,500}$/
    },
}


const validateInput = ({ target: { value, name } }, formData) => {

    let newError = '';
    const validations = inputsRequirements[name];
    if (!value && validations.required) {
        newError = name === 'passwordConfirm' ? 'password confirmation is required' : `${name} is required`;
    } else if (validations.pattern && !validations.pattern.test(value)) {
        newError = `Invalid ${name} value`;
    } else if (name === 'passwordConfirm') {
        if (!comparePasswords(formData.password.value, formData.passwordConfirm.value)) {
            newError = 'Passwords don\'t match!'
        }
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

function comparePasswords(password, passwordConfirm) {
    if (password === passwordConfirm) return true;
    return false;
}

//Full Form Validation
function isFormValid(formData) {
    for (const input in formData) {
        if (input === 'userId') break;
        if (inputsRequirements[input].required && formData[input].error.includes('is required')) {
            return false;
        }
    }
    return true;
}



export { validateInput, isFormValid };