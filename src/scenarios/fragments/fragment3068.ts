import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3066 } from "./fragment3066";
import type { FragmentToken3067 } from "./fragment3067";

export const FRAGMENT_3068 = gql(`
  fragment Fragment3068 on Member267 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_267
    memberCount_267
    memberMetric_267
  }
`);

type FragmentResult3068 = ResultOf<typeof FRAGMENT_3068>;
type FragmentSelf3068 = NonNullable<FragmentResult3068>;

export type FragmentToken3068 =
  | FragmentSelf3068["__typename"]
  | FragmentSelf3068["typenameHint"] | FragmentToken3066 | FragmentToken3067;
