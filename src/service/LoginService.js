export const loginService = ({doPost}) => {
    
    const doAuthenticate = async (userCred) => {
        try {
            return await doPost({
                url: 'api/auth/login', data: {
                    userName: userCred.username,
                    password: userCred.password
                }
            })
        } catch (e) {
            throw e
        }
    }

    return {doAuthenticate}
}