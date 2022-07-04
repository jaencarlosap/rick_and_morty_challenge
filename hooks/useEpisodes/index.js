import { useQuery, gql } from '@apollo/client'

export const useEpisodes = () => {
	const query = gql`
    query getList($page: Int) {
        episodes(page:$page){
            info { count, pages, next, prev }
            results{
                id,
                name,
                episode,
                characters{
                    id,name,image
                }
            }
        }
    }
	`

	return useQuery(query)
}