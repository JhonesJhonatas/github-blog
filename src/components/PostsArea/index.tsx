import { PostBox } from "../PostBox";
import { PostsAreaConainer } from "./styles";
import { NavLink } from 'react-router-dom'

export function PostsArea() {
    return (

        <PostsAreaConainer>

            <NavLink to={'/post'}>

                <PostBox />

            </NavLink>

            <NavLink to={'/post'}>

                <PostBox />

            </NavLink>

            <NavLink to={'/post'}>

                <PostBox />

            </NavLink>

        </PostsAreaConainer>

    )
}