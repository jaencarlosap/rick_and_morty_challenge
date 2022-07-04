import { useQuery, gql } from '@apollo/client'

export const useCharacters = () => {
	const query = gql`
    query getList($page: Int,$filtro: FilterCharacter ) {
        characters(page:$page, filter:$filtro){
            info {
                count,
                pages,
                next,
                prev
            }
            results{
                name,
                status,
                species,
                gender,
                image,
                location{
                    name,
                    dimension
                }
            }
        }            
    }
 `

	return useQuery(query)
}