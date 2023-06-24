import { createContext, ReactNode, useState, useEffect } from 'react'
import axios from 'axios'

interface repoIssues {
    id: number,
    number: number,
    body: 'string'
    updated_at: Date,
    title: 'string'
}

interface repoIssuesContextSchema {
    repoIssues: repoIssues[],
    searchParam: string,
    changeSearchParams: Function,
}

interface RepoIssuesProviderProps {
    children: ReactNode
}


export const RepoIssuesContext = createContext({} as repoIssuesContextSchema)

export function RepoIssuesProvider({ children }: RepoIssuesProviderProps) {

    const [repoIssues, setRepoIssues] = useState<repoIssues[]>([])
    const [searchParam, setSearchParam] = useState('')

    function changeSearchParams(text: string){

        setSearchParam(text)

    }

    useEffect(() => {
        axios.get(`https://api.github.com/search/issues?q=${searchParam}repo:jhonesjhonatas/dt-money`)
            .then(response => {
                setRepoIssues([...response.data.items])
            })
    }, [searchParam])

    return (

        <RepoIssuesContext.Provider value={{ repoIssues, searchParam, changeSearchParams }}>

            {children}

        </RepoIssuesContext.Provider>

    )
}