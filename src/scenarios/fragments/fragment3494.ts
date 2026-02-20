import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3492 } from "./fragment3492";
import type { FragmentToken3493 } from "./fragment3493";

export const FRAGMENT_3494 = gql(`
  fragment Fragment3494 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult3494 = ResultOf<typeof FRAGMENT_3494>;
type FragmentSelf3494 = NonNullable<FragmentResult3494>;

export type FragmentToken3494 =
  | FragmentSelf3494["__typename"]
  | FragmentSelf3494["typenameHint"] | FragmentToken3492 | FragmentToken3493;
