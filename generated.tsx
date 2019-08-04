import gql from "graphql-tag";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  users: User;
};

export type QueryUsersArgs = {
  take?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  reverse?: Maybe<Scalars["Boolean"]>;
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
};
export namespace AllUsers {
  export type Variables = AllUsersQueryVariables;
  export type Query = AllUsersQuery;
  export type Users = AllUsersQuery["users"];
  export const Document = AllUsersDocument;
  export type Props = AllUsersProps;
  export const HOC = withAllUsers;
  export const Component = AllUsersComponent;
}
export type AllUsersQueryVariables = {};

export type AllUsersQuery = { __typename?: "Query" } & {
  users: { __typename?: "User" } & Pick<User, "id">;
};

export const AllUsersDocument = gql`
  query allUsers {
    users {
      id
    }
  }
`;

export function useAllUsersQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<AllUsersQueryVariables>
) {
  return ReactApolloHooks.useQuery<AllUsersQuery, AllUsersQueryVariables>(
    AllUsersDocument,
    baseOptions
  );
}
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
