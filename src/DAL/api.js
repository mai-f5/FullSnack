
//////////// Static data tables////////////////////////
const getDifficultyLevelsList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const difficulty_levels = [
                { id: 1, name: 'Easy' },
                { id: 2, name: 'Medium' },
                { id: 3, name: 'Hard' }
            ];
            resolve(difficulty_levels)
        }, 500)
    })
}

const getGenderList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const gender = [
                { id: 1, name: 'Female' },
                { id: 2, name: 'Male' },
                { id: 3, name: 'Other' }
            ];
            resolve(gender)
        }, 500)
    })
}

const getOccupationsList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const occupations = [
                { id: 1, name: "Student" },
                { id: 2, name: 'Junior Developer' },
                { id: 3, name: 'Senior Developer' },
                { id: 4, name: 'Other' }
            ];
            resolve(occupations)
        }, 500)
    })
}

const getRequiredTechsList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const required_techs = [
                { id: 1, name: 'HTML' },
                { id: 2, name: 'CSS' },
                { id: 3, name: 'JavaScript' },
                { id: 4, name: 'Python' }
            ];
            resolve(required_techs)
        }, 500)
    })
}

const getNotificationsTypesList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const notifications_types = [
                { id: 1, name: 'project thread', notifications_text: 'posted a new thread on your project' },
                { id: 2, name: 'project like', notifications_text: 'liked your project' },
                { id: 3, name: 'project comment', notifications_text: 'commented on a thread in your project' },
                { id: 4, name: 'project thread', notifications_text: 'commented on your thread' }
            ];
            resolve(notifications_types)
        }, 500)
    })
}

export { getDifficultyLevelsList, getGenderList, getOccupationsList, getRequiredTechsList, getNotificationsTypesList };

///////////////////////////////////////////////////

const getProjectsReqTechs = projectId => {
    //query to get projects required techs by id
    /*
    select rt.name
    from required_techs rt join project_tech pt on pt.tech_id = rt.id
    where pt.project_id = 1;
 */
    return Promise.resolve(
        [
            { name: 'HTML' },
            { name: 'CSS' }
        ]
    )
}

const getFilteredProjectsListRequiredTechs = projectsIdList => {
    /**select pt.project_id, rt.name
    from required_techs rt join project_tech pt on pt.tech_id = rt.id;
    where pt.project_id in () */
    return Promise.resolve(
        [
            { project_id: 1, name: 'HTML' },
            { project_id: 1, name: 'CSS' }
        ]
    )
}

const getProjectsMinimalData = (sortBy = 'likes', amount = 20) => {
    return Promise.resolve(
        //query to get <amount> projects sorted by <sortBy> //limit 20 - will check pagination like in facebook, added at bottom every scroll
        //reqired techs will be seperate
        [
            { id: 1, user_id: 1, name: 'Recipe\'s Notebook', difficulty_level: 'Medium', likesCounter: 52 }
        ]
    )
}

// const filterProjectsList = (projectsList, txt, difficultyLevel, hasAssets) => {
//     //query that filters by given values
//     return Promise.resolve(
//         projectsList.filter(project => project.includes(txt) && project.difficulty_level === difficultyLevel && !!project.assets_src === hasAssets)
//     )
// }

const login = (username, password) => {
    // return users.
    //     find(user => user.username === username && user.password === password)
    //query to find this username where users.username = username AND users.password = password and is_active = true// do I want to seperate them
    return username === 'leebaronx3' && password === 'Lb123456' ? 1 : 'ERR';
}

const getUsersData = userId => {
    return Promise.resolve(
        {
            id: 1,
            username: 'leebaronx3',
            email: 'leebaronx3@gmail.com',
            password: 'Lb123456',
            birthdate: '26/03/1994',
            gender_id: 1,
            occupation: null,
            profile_img: null,
        }
    )
}

const getUsersProjectsList = userId => {
    return Promise.resolve(
        //query to get projects minimaldata by user id   (id, name, lvl, hasassets, likes by user_id)
        [
            {
                id: 1,
                user_id: 1,
                name: 'Recipe\'s notebook',
                difficulty_level: 2,
                likes_counter: 2,
                assets_src: "assets.com",
                timestamp: '2021-06-17 20:14:00',
                // requiredTechs: ['HTML', 'CSS']
            }
        ]
    )
}

const getProjectsRowData = projectId => {
    return Promise.resolve(
        {
            id: 1,
            user_id: 1,
            name: 'Recipe\'s notebook',
            difficulty_level: 2,
            likes_counter: 2,
            description: "",
            assets_src: "assets.com",
            github_url: "https://hamuf.github.io/recipes-mockup/#!/my-recipes",
            timestamp: '2021-06-17 20:14:00',
            is_visible: true
        }
    )
}

const getProjectsPicturesList = projectId => {
    return Promise.resolve(
        [
            { id: 1, pic_src: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/4e/7b/au-t2-e-5093-pancake-recipe-english_ver_5.jpg' },
            { id: 2, pic_src: 'https://wgbh.brightspotcdn.com/dims4/default/09cb564/2147483647/strip/true/crop/1359x741+0+0/resize/990x540!/quality/70/?url=https%3A%2F%2Fwgbh.brightspotcdn.com%2Fcb%2F02%2F098fb19f47b9a56d92bc18b8a279%2Fcooking-apps-lead.jpg' },

        ]
    )
}

const getProjectsThreads = projectId => {
    return Promise.resolve(
        {
            id: 1,
            project_id: 1,
            user_id: 2,
            timestamp: '2021-06-17 20:14:00',
            topic: 'Toggle Buttons',
            body: 'hi i tried to create the toggle buttons but couldnt find the component. please help',
        }
    )

}

const getThreadsComments = threadId => {
    return Promise.resolve(
        [
            {
                id: 1,
                user_id: 1,
                text: 'i\'ll help ya',
                timestamp: '2021-07-09 21:21:21'
            },
            {
                id: 2,
                user_id: 1,
                text: 'i\'ll help ya',
                timestamp: '2021-07-09 21:21:21'
            }
        ]
    )
}

const getUsersNewNotifications = userId => {
    //query to get notification isread false
    /**
    select n.id, u.username, nt.text, n.timestamp
    from notifications n, notifications_types nt, users u
    where n.type_id = nt.id and u.id = n.acted_user_id and n.notified_user_id = 1 and n.is_read = 0
     */

    return Promise.resolve(
        [
            {
                id: 3,
                acted_user_id: 2,
                text: 'commented on a thread in your project',
                timestamp: '2020-02-02 12:12:12'
            }
        ]
    )
}

export { getProjectsReqTechs, getFilteredProjectsListRequiredTechs, getProjectsMinimalData, getUsersData, getUsersProjectsList, getProjectsRowData, getProjectsPicturesList, getProjectsThreads, getThreadsComments, getUsersNewNotifications }
///////////////////////////

// const getProjectsFullData = projectId => {
//     //maybe wanted final result for each project:
//     const hi = {
//         id: 1,
//         user_id: 1,
//         timestamp: '2021-07-07 21:21:21',
//         name: 'recipes',
//         likes: 2,
//         difficultyLevel: 'Medium',
//         description: 'ssdf',
//         assets_src: 'assets.com',
//         git_url: 'github.com/',
//         requiredTechs: ['HTML', 'CSS'],
//         pictures: ['img.png', 'img2.png'],
//         threads:
//             [
//                 {
//                     id: 1,
//                     timestamp: '2021-07-08 21:21;21',
//                     topic: 'Toggle',
//                     body: 'Hi',
//                     comments:
//                         [
//                             { id: 1, user_id: 1, text: 'i\'ll help ya', timestamp: '2021-07-09 21:21:21' },
//                             { id: 1, user_id: 1, text: 'i\'ll help ya', timestamp: '2021-07-09 21:21:21' },
//                         ]
//                 }
//             ]
//     }

// }

// const getUserFullData = UserId => {
//     const hi2 = {
//         id: 1,
//         username: 'leebaronx3',
//         email: 'leebaronx3@gmail.com',
//         password: 'Lb123456',
//         birthdate: '26/03/1994',
//         gender_id: 'Female',
//         occupation: null,
//         profile_img: null,
//         //notifications: [
//         //                   {id:1, notification_type:1, acted_user_id:2, is_read:0, timestamp:'2021-07-07 21:21:21'}
//         //              ]
//         // projectsIds: [1, 2, 3, 4],//??? OR
//         // projectsMinimalDatas: [
//         //     { id: 1, name: 'Recipe\'s Notebook', difficulty_level: 'Medium', likesCounter: 52, required_techs: ['HTML', 'CSS'] }
//         // ]

//     }
// }



/////////////////////////////////////////////////////////////
///post req
const tempUsersTable = [];
const tempProjectsTable = [];
const tempProjectsTechsTable = [];
const tempPicturesTable = [];
const tempThreadsTable = [];
const tempCommentsTable = [];
const tempNotificationsTable = [];

//some of the pushed data, will be set by default via sql
const addNewProject = projectData => {

    projectData.pictures.map(pic => {
        tempPicturesTable.push(
            { id: tempPicturesTable.length + 1, project_id: tempProjectsTable.length + 1, pic_src: pic }
        )
    });

    projectData.requiredTechs.map(techId => {
        tempProjectsTechsTable.push(
            { tech_id: techId, project_id: tempProjectsTable.length + 1 }
        )
    });

    tempProjectsTable.push(
        {
            id: tempProjectsTable.length + 1,
            user_id: projectData.user_id,
            timestamp: projectData.timestamp,
            name: projectData.name,
            difficultyLevel: projectData.difficultyLevel,
            description: projectData.description,
            assets_src: projectData.assets_src,
            git_url: projectData.git_url,
        }
    )

}
const addNewUser = usersData => {
    tempUsersTable.push(
        {
            id: tempUsersTable.length + 1,
            username: usersData.username,
            email: usersData.email,
            password: usersData.password,
            birthdate: null,
            gender_id: null,
            occupation_id: null,
            profile_img: 'default.png',
            is_active: true
        }
    )
}
const addNewThread = threadData => {
    tempThreadsTable.push(
        {
            id: tempThreadsTable.length + 1,
            project_id: threadData.project_id,
            user_id: threadData.user_id,
            timestamp: threadData.timestamp,
            topic: threadData.topic,
            body: threadData.body
        }
    )
}
const addNewComment = commentData => {
    tempCommentsTable.push(
        {
            id: tempCommentsTable.length + 1,
            user_id: commentData.user_id,
            thread_id: commentData.thread_id,
            text: commentData.text,
            timestamp: commentData.timestamp
        }
    )
}
const addNewNotification = notificationData => {
    tempNotificationsTable.push(
        {
            id: tempNotificationsTable.length + 1,
            type_id: notificationData.type_id,
            acted_user_id: notificationData.acted_user_id,
            notified_user: notificationData.notified_user,
            is_read: false,
            timestamp: notificationData.timestamp
        }
    )
}
/////////////////////////////////////////////////////////////////////
//update request?

export { addNewProject, addNewUser, addNewThread, addNewComment, addNewNotification }