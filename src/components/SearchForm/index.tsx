import { SearchFormContet } from "./styles";

export function SearchForm(){
    return (
        <SearchFormContet>

            <div>
                <span>Publicações</span>
                <span>6 publicações</span>
            </div>

            <input type="text" placeholder="Buscar conteúdo" />

        </SearchFormContet>
    )
}