import { styled } from "styled-components";

export const PostsAreaConainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 4rem;

    a{
        text-decoration: none;
        transition: all 0.1s ease-in-out;
    
    &:hover{
        transform: scale(1.02);
    }

    }
`