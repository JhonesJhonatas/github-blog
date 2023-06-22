import styled from "styled-components";

export const ProfileBox = styled.div`
    background-color: ${props => props.theme['--gray-700']};
    border-radius: 6px;
    display: flex;
    max-width: 900px;
    margin: 0 auto;
    margin-top: -7rem;
    padding: 2rem;
    gap: 2rem;
    color: ${props => props.theme['--gray-100']};

    img{
        max-width: 10.2rem;
        border-radius: 10px;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        header{
            display: flex;
            justify-content: space-between;
            align-items: center;

            a{
                text-decoration: none;
                color: ${props => props.theme['--blue']}
            }
        }

        footer{
            display: flex;
            align-items: center;
            gap: 1.75rem;

            p{
                display: flex;
                align-items: center;
                font-size: 1rem;
                gap: 0.5rem;
            }
        }
    }
`