import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3654 } from "./fragment3654";
import type { FragmentToken3655 } from "./fragment3655";

export const FRAGMENT_3656 = gql(`
  fragment Fragment3656 on Member15 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_15
    memberCount_15
    memberMetric_15
  }
`);

type FragmentResult3656 = ResultOf<typeof FRAGMENT_3656>;
type FragmentSelf3656 = NonNullable<FragmentResult3656>;

export type FragmentToken3656 =
  | FragmentSelf3656["__typename"]
  | FragmentSelf3656["typenameHint"] | FragmentToken3654 | FragmentToken3655;
