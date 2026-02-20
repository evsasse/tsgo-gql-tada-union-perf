import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3438 } from "./fragment3438";
import type { FragmentToken3439 } from "./fragment3439";

export const FRAGMENT_3440 = gql(`
  fragment Fragment3440 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult3440 = ResultOf<typeof FRAGMENT_3440>;
type FragmentSelf3440 = NonNullable<FragmentResult3440>;

export type FragmentToken3440 =
  | FragmentSelf3440["__typename"]
  | FragmentSelf3440["typenameHint"] | FragmentToken3438 | FragmentToken3439;
