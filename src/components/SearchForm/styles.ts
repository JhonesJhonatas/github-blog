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

    input{
        width: 100%;
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
`