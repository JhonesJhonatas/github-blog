import { PostCodeContent, PostContentArea, PostHeaderContainer } from "./styles";
import { CaretLeft, ArrowSquareOut, GithubLogo, Calendar, ChatCircle } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Post() {
    return (
        <>

            <section>

                <PostHeaderContainer>

                    <header>
                        <NavLink to={'/'}>
                            <span><CaretLeft />VOTLAR</span>
                        </NavLink>
                        <a href="">
                            <span><ArrowSquareOut />VER NO GITHUB</span>
                        </a>
                    </header>

                    <h1>JavaScript data types and data structures</h1>

                    <footer>
                        <div>
                            <GithubLogo />
                            <p>cameronwll</p>
                        </div>
                        <div>
                            <Calendar />
                            <p>Há 1 dia</p>
                        </div>
                        <div>
                            <ChatCircle />
                            <p>5 comentários</p>
                        </div>
                    </footer>

                </PostHeaderContainer>

            </section>

            <PostContentArea>

                <p>
                    Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </p>

                <a href="">Dynamic typing</a>

                <p>
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>

                <PostCodeContent>

                    <p>
                        let foo = 42;   // foo is now a number
                    </p>
                    <p>
                        foo = ‘bar’;    // foo is now a string
                    </p>
                    <p>
                        foo = true;     // foo is now a boolean
                    </p>

                </PostCodeContent>

            </PostContentArea>

        </>
    )
}