import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3151 } from "./fragment3151";
import type { FragmentToken3152 } from "./fragment3152";

export const FRAGMENT_3153 = gql(`
  fragment Fragment3153 on Member72 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_72
    memberCount_72
    memberMetric_72
  }
`);

type FragmentResult3153 = ResultOf<typeof FRAGMENT_3153>;
type FragmentSelf3153 = NonNullable<FragmentResult3153>;

export type FragmentToken3153 =
  | FragmentSelf3153["__typename"]
  | FragmentSelf3153["typenameHint"] | FragmentToken3151 | FragmentToken3152;
