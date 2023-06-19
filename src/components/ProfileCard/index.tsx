import { UsersThree, GithubLogo, Buildings, ArrowSquareOut } from '@phosphor-icons/react'
import { ProfileBox } from './styles'

export function ProfileCard() {
    return (

        <ProfileBox >

            <img src="https://github.com/jhonesjhonatas.png" />

            <div>

                <header>

                    <h1>Jhones Jhonatas</h1>
                    <a href="https://github.com/jhonesjhonatas" target="_blank">GitHub <ArrowSquareOut /></a>

                </header>

                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                <footer>
                    <p><GithubLogo /> username</p>
                    <p><Buildings /> enterprise</p>
                    <p><UsersThree /> 253</p>
                </footer>

            </div>

        </ProfileBox>


    )
}