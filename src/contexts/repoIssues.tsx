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
}

interface RepoIssuesProviderProps {
    children: ReactNode
}


export const RepoIssuesContext = createContext({} as repoIssuesContextSchema)

export function RepoIssuesProvider({ children }: RepoIssuesProviderProps) {

    const [repoIssues, setRepoIssues] = useState<repoIssues[]>([])

    useEffect(() => {
        axios.get('https://api.github.com/search/issues?q=repo:jhonesjhonatas/dt-money')
            .then(response => {
                setRepoIssues([...response.data.items])
            })
    }, [])

    return (

        <RepoIssuesContext.Provider value={{ repoIssues }}>

            {children}

        </RepoIssuesContext.Provider>

    )
}