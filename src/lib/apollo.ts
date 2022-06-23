import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qhb2my3vrk01z43buh4yxj/master',
    cache: new InMemoryCache()
})