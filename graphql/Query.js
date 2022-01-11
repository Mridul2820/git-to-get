import { gql } from "@apollo/client";

export const GET_USER = gql `
    query searchUser($username: String!) {
        user(login: $username) {
            avatarUrl
            name
            url
            login
            bio
            websiteUrl
            location
            company
            twitterUsername
            email
            following {
                totalCount
            }
            followers {
                totalCount
            }
            repositories(orderBy: {field: UPDATED_AT, direction: DESC}, ownerAffiliations: OWNER, privacy:PUBLIC, isFork: false, first: 100){
                nodes {
                    languages(first: 20) {
                        edges{
                            size
                            node {
                                name
                                color
                            }
                        }
                    }
                }
            }
        }
    }
`;