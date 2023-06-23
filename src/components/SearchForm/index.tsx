import { SearchFormContet } from "./styles";
import { useContext } from 'react'
import { RepoIssuesContext } from '../../contexts/repoIssues'

export function SearchForm(){

    const { repoIssues } = useContext(RepoIssuesContext)

    return (

        <SearchFormContet>

            <div>
                <span>Publicações</span>
                <span>{repoIssues.length} publicações</span>
            </div>

            <input type="text" placeholder="Buscar conteúdo" />

        </SearchFormContet>
    )
}