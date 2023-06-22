import { PostBoxContainer } from "./styles";

interface PostBoxProps {
    title: string,
    date: Date,
    description: string,
}

export function PostBox({title, date ,description}:PostBoxProps){
    return(
        <PostBoxContainer>
            <header>
                <span>{title}</span>
                <span>{date}</span>
            </header>
            <p>{description}</p>
        </PostBoxContainer>
    )
}