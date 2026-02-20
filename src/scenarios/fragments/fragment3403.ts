import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3401 } from "./fragment3401";
import type { FragmentToken3402 } from "./fragment3402";

export const FRAGMENT_3403 = gql(`
  fragment Fragment3403 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult3403 = ResultOf<typeof FRAGMENT_3403>;
type FragmentSelf3403 = NonNullable<FragmentResult3403>;

export type FragmentToken3403 =
  | FragmentSelf3403["__typename"]
  | FragmentSelf3403["typenameHint"] | FragmentToken3401 | FragmentToken3402;
