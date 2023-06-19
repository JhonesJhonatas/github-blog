import { HeaderCover } from "./styles";
import logoGitHub from '../../assets/github-blog-logo.svg'

export function Header(){
    return(

        <HeaderCover>

            <img src={logoGitHub} />

        </HeaderCover>

    )
}