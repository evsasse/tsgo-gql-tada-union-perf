import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3864 } from "./fragment3864";
import type { FragmentToken3865 } from "./fragment3865";

export const FRAGMENT_3866 = gql(`
  fragment Fragment3866 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult3866 = ResultOf<typeof FRAGMENT_3866>;
type FragmentSelf3866 = NonNullable<FragmentResult3866>;

export type FragmentToken3866 =
  | FragmentSelf3866["__typename"]
  | FragmentSelf3866["typenameHint"] | FragmentToken3864 | FragmentToken3865;
