
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider
} from '@apollo/client'
import { Layout } from '../components'
import '../assets/css/App.css'
import '../assets/css/nav.css'

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache()
})

const MyApp = ({ Component, pageProps }) => {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	)
}

export default MyApp