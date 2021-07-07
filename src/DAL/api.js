const api = () => {
    //////////////////GET REQUESTS////////////////////////////
    //-------------------Static Data-----------------------//
    const getDifficultyLevelsList = () => {
        return fetch('http://localhost:3100/staticdata/difficultylevels')
            .then(res => res.json())
    }

    const getGenderList = () => {
        return fetch('http://localhost:3100/staticdata/gender')
            .then(res => res.json())
    }

    const getOccupationsList = () => {
        return fetch('http://localhost:3100/staticdata/occupations')
            .then(res => res.json())
    }

    const getRequiredTechsList = () => {
        return fetch('http://localhost:3100/staticdata/requiredtechs')
            .then(res => res.json())
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

    //---------------------------projects cards---------------------------------//
    const getProjectsData = (formData) => {
        if (!formData.projectId) {
            return fetch(`http://localhost:3100/explore/?search=${formData.searchTxt}&reqtechs=${formData.requiredTechs}&difflvls=${formData.difficultyLevels}&assets=${formData.assets}&sortby=${formData.sortBy}&amount=${formData.amount}&currentpage=${formData.currentPage}&user=${formData.userId}`).then(res => res.json())
        }
        return fetch(`http://localhost:3100/explore/?pid=${formData.projectId}`).then(res => res.json())
    }

    const getProjectsReqTechs = projectIdList => {
        //query to get projects required techs by id in list
        /**select pt.project_id, rt.name
        // from required_techs rt join project_tech pt on pt.tech_id = rt.id;
        // where pt.project_id in () */
        return Promise.resolve(
            [
                { project_id: 1, name: 'HTML' },
                { project_id: 1, name: 'CSS' }
            ]
        )
    }

    const getProjectsLikesCount = projectIdList => {
        return Promise.resolve(
            { project_id: 1, likesCount: 2 }
        )
    }

    const getProjectsFirstPic = projectIdList => {
        return Promise.resolve(
            { id: 1, project_id: 1, pic_src: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/4e/7b/au-t2-e-5093-pancake-recipe-english_ver_5.jpg' }
        )
    }
    //---------------------------specific project---------------------------------//
    const getProjectsAllPics = projectId => {
        return Promise.resolve(
            { id: 1, pic_src: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/4e/7b/au-t2-e-5093-pancake-recipe-english_ver_5.jpg' },
            { id: 2, pic_src: 'https://wgbh.brightspotcdn.com/dims4/default/09cb564/2147483647/strip/true/crop/1359x741+0+0/resize/990x540!/quality/70/?url=https%3A%2F%2Fwgbh.brightspotcdn.com%2Fcb%2F02%2F098fb19f47b9a56d92bc18b8a279%2Fcooking-apps-lead.jpg' },
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

    const getThreadComments = threadId => {
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
    const getUserUsername = projectId => {

        return Promise.resolve(
            { user_id: 1, username: 'leebaronx3' }
        )
    }
    //---------------------------user data---------------------------------//



    const login = (username, password) => {
        // return users.
        //     find(user => user.username === username && user.password === password)
        //query to find this username where users.username = username AND users.password = password and is_active = true// do I want to seperate them
        // return username === 'leebaronx3' && password === 'Lb123456' ? 1 : 'ERR';
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

    const getDidUserLikeProject = userId => {
        return Promise.resolve(
            { didLike: true }
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
                    project_id: 1,
                    type: 3,
                    timestamp: '2020-02-02 12:12:12'
                }
            ]
        )
    }


    //////////////////POST REQUESTS////////////////////////////
    const tempUsersTable = [];
    const tempProjectsTable = [];
    const tempProjectsTechsTable = [];
    const tempPicturesTable = [];
    const tempThreadsTable = [];
    const tempCommentsTable = [];
    const tempNotificationsTable = [];
    const tempLikesTable = [];

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

    const addLike = (userId, projectId) => {
        tempLikesTable.push(
            {
                user_id: userId,
                liked_project_id: projectId
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



    ///user get data
    const getUserData = userId => {
        return fetch(`http://localhost:3100/users/${userId}`).then(res => res.json())
    }


    /////////////////////////////////////////////////////////////////////
    //UPDATE REQUESTS
    //user settings
    const updateUserData = updatedUserData => {
        //console.log(updatedUserData.get('profileImg'))
        return fetch(`http://localhost:3100/users/${updatedUserData.get('userId')}`, {
            method: 'PUT',
            body: updatedUserData,
        }).then(res => res.json())
    }






    //user password
    const updateUserPassword = updatedPassword => {
        return Promise.resolve(updatedPassword)
    }
    //project row data
    const updateProjectData = updatedProjectData => {
        return Promise.resolve(updatedProjectData)
    }
    //notification read
    const updateNotificationsAsRead = userId => {
        return Promise.resolve(tempNotificationsTable.forEach(notification => {
            if (!notification.is_read) notification.is_read = true;
        }))
    }
    // hide project
    const hideProject = projectId => {
        return Promise.resolve(
            tempProjectsTable.find(project => project.id === projectId).is_visible = false
        )
    }
    // deactivate user
    // const deactivateUser = userId => {
    //     return Promise.resolve(
    //         tempUsersTable.find(user => user.id === userId).is_active = false
    //     )
    // }


    /////////////////////////////DELETE REQUESTS///////////////////////////
    // project required tech
    const removeReqTech = (projectId, reqTechId) => {
        delete tempProjectsTechsTable[tempProjectsTechsTable.indexOf(tempProjectsTechsTable.find(row => row.project_id === projectId && row.tech_id === reqTechId))]
    }
    // project picture
    const removePicture = (picId) => {
        delete tempPicturesTable[tempPicturesTable.indexOf(tempPicturesTable.find(pic => pic.id === picId))]
    }
    // user like on project
    const removeLike = (userId, projectId) => {
        delete tempLikesTable[tempLikesTable.indexOf(tempLikesTable.find(row => row.user_id === userId && row.liked_project_id === projectId))]
    }
    // maybe thread
    // maybe comment
    return {
        getDifficultyLevelsList, getGenderList, getOccupationsList, getRequiredTechsList, getNotificationsTypesList, getProjectsData, getProjectsReqTechs, getProjectsLikesCount, getProjectsFirstPic, getProjectsAllPics, getProjectsThreads, getThreadComments, getUserUsername, login, getDidUserLikeProject, getUsersNewNotifications, getUserData,

        addNewProject, addNewUser, addLike, addNewThread, addNewComment, addNewNotification,

        updateUserData, updateUserPassword, updateProjectData, updateNotificationsAsRead, hideProject,

        removeReqTech, removePicture, removeLike
    }
}

export default api();
