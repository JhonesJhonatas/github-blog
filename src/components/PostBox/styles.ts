import styled from "styled-components";

export const PostBoxContainer = styled.div`
    color: ${props => props.theme['--gray-100']} ;
    background-color: ${props => props.theme['--gray-500']};
    padding: 1rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 10rem;

    header{
        display: flex;
        justify-content: space-between;
        align-items: start;

        span:first-child{
            font-size: 1.25rem;
            font-weight: bold;
        }

        span:last-child{
            font-size: 0.75rem;
            width: 25%;
            text-align: right;
            color: ${props => props.theme['--gray-300']};
        }
    }

`