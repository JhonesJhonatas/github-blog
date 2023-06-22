import { ReactNode, createContext, useEffect, useState } from 'react'
import axios from 'axios'

interface UserProviderProps {
    children: ReactNode
}

interface UserInfoSchema {
    name: string,
    bio: string,
    login: string,
    company: string | null,
    followers: number

}

interface UserInfoContextSchema {
    userInfo: UserInfoSchema
}

export const UserInfoContext = createContext({} as UserInfoContextSchema)

export function UserProvider({ children }: UserProviderProps) {

    const [userInfo, setUserInfo] = useState<UserInfoSchema>({
        name: '',
        bio: '',
        login: '',
        company: null,
        followers: 0
    })

    useEffect(() => {

        axios.get('https://api.github.com/users/jhonesjhonatas')
            .then(response => {
                setUserInfo({
                    name: response.data.name,
                    bio: response.data.bio,
                    login: response.data.login,
                    company: response.data.company,
                    followers: response.data.followers
                })
            })

    }, [])

    return (
        <UserInfoContext.Provider value={{ userInfo }}>

            {children}

        </UserInfoContext.Provider>
    )
}