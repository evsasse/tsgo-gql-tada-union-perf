import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3926 } from "./fragment3926";
import type { FragmentToken3927 } from "./fragment3927";

export const FRAGMENT_3928 = gql(`
  fragment Fragment3928 on Member07 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_07
    memberCount_07
    memberMetric_07
  }
`);

type FragmentResult3928 = ResultOf<typeof FRAGMENT_3928>;
type FragmentSelf3928 = NonNullable<FragmentResult3928>;

export type FragmentToken3928 =
  | FragmentSelf3928["__typename"]
  | FragmentSelf3928["typenameHint"] | FragmentToken3926 | FragmentToken3927;
