import { styled } from "styled-components";

export const PostHeaderContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    background-color: ${props => props.theme['--gray-700']};
    margin-top: -5.5rem;
    border-radius: 6px;
    padding: 2rem;
    color: ${props => props.theme['--gray-100']};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;


    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }
    }

    footer{
        display: flex;
        gap: 3rem;

        div{
            display: flex;
            align-items: center;
            gap: 0.5rem
        }
    }
`

export const PostContentArea = styled.div`
    max-width: 850px;
    margin: 0 auto;
    margin-top: 3rem;
    color: ${props => props.theme['--gray-100']};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const PostCodeContent = styled.div`
    background-color: ${props => props.theme['--gray-600']};;
    padding: 2rem;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`