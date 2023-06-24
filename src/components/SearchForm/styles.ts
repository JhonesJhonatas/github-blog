import { styled } from 'styled-components'

export const SearchFormContet = styled.div`
    max-width: 900px;
    margin: 0 auto;
    margin-top: 3rem;
    
    div{
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        color: ${props => props.theme['--white']};
    }

    span:first-child{
        color: ${props => props.theme['--white']};
        font-size: 1.5rem;
        font-weight: bold;
    }

    form{
        display: flex;
        gap: 0.75rem;

        input{
        flex: 1;
        padding: 1rem;
        border-radius: 6px;
        border: 1px;
        border-style: solid;
        border-color: ${props => props.theme['--gray-300']};
        background-color: ${props => props.theme['--gray-900']};
        color: ${props => props.theme['--gray-100']};

        &::placeholder{
            font-weight: bold;
            color: ${props => props.theme['--gray-400']};
        }
    }
    }
`

export const SearchButton = styled.button`
    border: 1;
    border-style: solid;
    border-color: ${props => props.theme['--gray-300']};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 1rem;
    border-radius: 6px;
    background-color: transparent;
    color: ${props => props.theme['--gray-100']};
    cursor: pointer;
    font-weight: bold;
    transition: all 0.1s ease-in-out;

    &:hover{
        background-color: ${props => props.theme['--gray-400']};
    }
`