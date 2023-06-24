import { PostContentArea, PostHeaderContainer } from "./styles";
import { CaretLeft, ArrowSquareOut, GithubLogo, Calendar, ChatCircle } from '@phosphor-icons/react'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

interface issueInfosSchema {
    user: {
        login: string
    },
    body: string,
    comments: number,
    created_at: Date,
    html_url: string,
    title: string,
}

const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export function Post() {

    const { issueNumber } = useParams()
    const [issueInfos, setIssueInfos] = useState<issueInfosSchema>({
        user: {
            login: ''
        },
        body: '',
        comments: 0,
        created_at: new Date(),
        html_url: '',
        title: '',
    })

    useEffect(() => {

        axios.get(`https://api.github.com/repos/jhonesjhonatas/dt-money/issues/${issueNumber}`)
            .then(response => setIssueInfos(response.data))

    }, [issueNumber])

    return (
        <>

            <section>

                <PostHeaderContainer>

                    <header>
                        <NavLink to={'/'}>
                            <span><CaretLeft />VOLTAR</span>
                        </NavLink>
                        <a href={issueInfos.html_url} target="_blank">
                            <span><ArrowSquareOut />VER NO GITHUB</span>
                        </a>
                    </header>

                    <h1>{issueInfos.title}</h1>

                    <footer>
                        <div>
                            <GithubLogo />
                            <p>{issueInfos.user.login}</p>
                        </div>
                        <div>
                            <Calendar />
                            <p>{dateFormatter.format(new Date(issueInfos.created_at))}</p>
                        </div>
                        <div>
                            <ChatCircle />
                            <p>{`${issueInfos.comments} comentários`}</p>
                        </div>
                    </footer>

                </PostHeaderContainer>

            </section>

            <PostContentArea>

                <ReactMarkdown>

                    {issueInfos.body}

                </ReactMarkdown>

            </PostContentArea>

        </>
    )
}