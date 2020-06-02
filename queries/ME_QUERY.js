import {gql} from "apollo-boost"

const ME_QUERY = gql`
    query ME_QUERY {
        user {
            id,
            name,
            email
        }
    }
`

export default ME_QUERY
