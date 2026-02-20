import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3378 } from "./fragment3378";
import type { FragmentToken3379 } from "./fragment3379";

export const FRAGMENT_3380 = gql(`
  fragment Fragment3380 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult3380 = ResultOf<typeof FRAGMENT_3380>;
type FragmentSelf3380 = NonNullable<FragmentResult3380>;

export type FragmentToken3380 =
  | FragmentSelf3380["__typename"]
  | FragmentSelf3380["typenameHint"] | FragmentToken3378 | FragmentToken3379;
