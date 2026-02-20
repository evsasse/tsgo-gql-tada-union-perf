import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3212 } from "./fragment3212";
import type { FragmentToken3213 } from "./fragment3213";

export const FRAGMENT_3214 = gql(`
  fragment Fragment3214 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult3214 = ResultOf<typeof FRAGMENT_3214>;
type FragmentSelf3214 = NonNullable<FragmentResult3214>;

export type FragmentToken3214 =
  | FragmentSelf3214["__typename"]
  | FragmentSelf3214["typenameHint"] | FragmentToken3212 | FragmentToken3213;
