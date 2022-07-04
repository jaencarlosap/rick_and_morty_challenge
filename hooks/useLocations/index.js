import { useQuery, gql } from '@apollo/client'

export const useLocations = () => {
	const query = gql`
    query getList($page: Int ) {
        locations(page:$page){
            info {
                count,
                pages,
                next,
                prev
            }
            results{
                name,
                type,
                dimension,
                residents{
                    name,
                    species,
                    image
                }
            }
        }            
    }
	`

	return useQuery(query)
}