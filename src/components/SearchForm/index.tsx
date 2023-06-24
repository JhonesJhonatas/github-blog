import { SearchFormContet } from "./styles";
import { ChangeEvent, useContext } from 'react'
import { RepoIssuesContext } from '../../contexts/repoIssues'

export function SearchForm(){

    const { repoIssues } = useContext(RepoIssuesContext)

    function handleChangeInput(event: ChangeEvent<HTMLInputElement>){

        console.log(event?.target.value)
        
    }

    return (

        <SearchFormContet>

            <div>
                <span>Publicações</span>
                <span>{repoIssues.length} publicações</span>
            </div>

            <input name="searchInput" onChange={handleChangeInput} type="text" placeholder="Buscar conteúdo" />

        </SearchFormContet>
    )
}