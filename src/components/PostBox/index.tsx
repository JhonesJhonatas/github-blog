import { PostBoxContainer } from "./styles";
import ReactMarkdown from 'react-markdown'

interface PostBoxProps {
    title: string,
    date: Date,
    description: string,
}

const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export function PostBox({title, date ,description}:PostBoxProps){

    const reducedText = description.substring(0, 80)
    const completeReducedText = reducedText + ' ...'

    return(
        <PostBoxContainer>
            <header>
                <span>{title}</span>
                <span>{dateFormatter.format(new Date(date))}</span>
            </header>
            <ReactMarkdown>
                {completeReducedText}
            </ReactMarkdown>
        </PostBoxContainer>
    )
}