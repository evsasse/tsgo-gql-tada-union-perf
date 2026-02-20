import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3149 } from "./fragment3149";
import type { FragmentToken3150 } from "./fragment3150";

export const FRAGMENT_3151 = gql(`
  fragment Fragment3151 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult3151 = ResultOf<typeof FRAGMENT_3151>;
type FragmentSelf3151 = NonNullable<FragmentResult3151>;

export type FragmentToken3151 =
  | FragmentSelf3151["__typename"]
  | FragmentSelf3151["typenameHint"] | FragmentToken3149 | FragmentToken3150;
