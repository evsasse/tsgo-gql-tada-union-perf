import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3440 } from "./fragment3440";
import type { FragmentToken3441 } from "./fragment3441";

export const FRAGMENT_3442 = gql(`
  fragment Fragment3442 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult3442 = ResultOf<typeof FRAGMENT_3442>;
type FragmentSelf3442 = NonNullable<FragmentResult3442>;

export type FragmentToken3442 =
  | FragmentSelf3442["__typename"]
  | FragmentSelf3442["typenameHint"] | FragmentToken3440 | FragmentToken3441;
