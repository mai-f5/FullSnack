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
    },
    oldPassword: {
        required: true,
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
    requiredTechnologies: {
        required: true,
    },
    githubLink: {
        required: false,
    },
    description: {
        required: false,
    },
    pictures: {
        required: true,
    },
    assetsSrc: {
        required: false,
    },
    topic: {
        required: true,
        pattern: /.{2,75}$/
    },
    body: {
        pattern: /.{0,500}$/
    },
    gender: {
        required: false
    },
    birthdate: {
        required: false
    },
    occupation: {
        required: false
    },
    profileImg: {
        required: false
    }
}


const validateInput = ({ target: { value, name } }, formData) => {
    let newError = '';
    const validations = inputsRequirements[name];
    if (!value && validations.required) {

        newError = `${splitCamelCase(name)} is required`;
    } else if (validations.pattern && !validations.pattern.test(value)) {
        newError = `Invalid ${name} value`;
    }
    else if (('passwordConfirm' in formData)
        && (name === 'passwordConfirm' || name === 'password')
        && (formData.password.value && formData.passwordConfirm.value)) {
        if (!comparePasswords(formData.password.value, formData.passwordConfirm.value)) {
            newError = 'Passwords don\'t match!'
        }
    } else if (name === 'pictures' || (name === 'requiredTechnologies')) {
        console.log(name, formData, 'pictures' in formData, formData.name.value !== '')
        if (value.length < 1) {
            newError = `at least 1 ${name === 'pictures' ? 'image' : 'technology'} is required`
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

//Full Form Validation
function isFormValid(formData) {
    for (const input in formData) {
        if (input === 'userId') continue;
        if ((inputsRequirements[input].required && (!formData[input].value || formData[input].value.length < 1)) || formData[input].error) {
            return false;
        }
    }
    return true;
}

function comparePasswords(password, passwordConfirm) {
    if (password === passwordConfirm) return true;
    return false;
}

function splitCamelCase(name) {
    for (const letter of name) {
        if (letter === letter.toUpperCase()) {
            const words = name.split(letter)
            return `${words[0]} ${letter.toLowerCase()}${words[1]}`
        }
    }
    return name;
}


export { validateInput, isFormValid };