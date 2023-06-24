import { SearchButton, SearchFormContet } from "./styles";
import { useContext } from 'react'
import { RepoIssuesContext } from '../../contexts/repoIssues'
import { MagnifyingGlass } from "@phosphor-icons/react";

export function SearchForm() {

    const { repoIssues, changeSearchParams } = useContext(RepoIssuesContext)

    function handleChangeInput(event: any) {

        event.preventDefault()

        changeSearchParams(event?.target.searchInput.value)

    }

    return (

        <SearchFormContet>

            <div>
                <span>Publicações</span>
                <span>{repoIssues.length} publicações</span>
            </div>

            <form onSubmit={handleChangeInput}>

                <input name="searchInput" type="text" placeholder="Buscar conteúdo" />
                
                <SearchButton type="submit" ><MagnifyingGlass /> Pesquisar</SearchButton>

            </form>

        </SearchFormContet>
    )
}