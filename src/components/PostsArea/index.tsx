import { PostBox } from "../PostBox";
import { PostsAreaConainer } from "./styles";
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { RepoIssuesContext } from "../../contexts/repoIssues";


export function PostsArea() {

    const { repoIssues } = useContext(RepoIssuesContext)

    return (

        <PostsAreaConainer>

            {repoIssues.map(issue => {
                return (
                    <NavLink key={issue.id} to={`/post/${issue.number}`}>

                        <PostBox title={issue.title} date={issue.updated_at} description={issue.body} />

                    </NavLink>
                )
            })}

        </PostsAreaConainer>

    )
}