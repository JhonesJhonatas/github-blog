import { UsersThree, GithubLogo, Buildings, ArrowSquareOut } from '@phosphor-icons/react'
import { ProfileBox } from './styles'
import { useContext } from 'react'
import { UserInfoContext } from '../../contexts/userContext'

export function ProfileCard() {

    const { userInfo } = useContext(UserInfoContext)

    return (

        <ProfileBox >

            <img src="https://github.com/jhonesjhonatas.png" />

            <div>

                <header>

                    <h1>{userInfo.name}</h1>
                    <a href={`https://github.com/${userInfo.login}`} target="_blank">GitHub <ArrowSquareOut /></a>

                </header>

                <p>{userInfo.bio}</p>

                <footer>
                    <p><GithubLogo /> {userInfo.login}</p>
                    <p><Buildings /> {userInfo.company === null ? 'Não informado' : userInfo.company}</p>
                    <p><UsersThree /> {userInfo.followers}</p>
                </footer>

            </div>

        </ProfileBox>


    )
}