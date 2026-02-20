import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3197 } from "./fragment3197";
import type { FragmentToken3198 } from "./fragment3198";

export const FRAGMENT_3199 = gql(`
  fragment Fragment3199 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult3199 = ResultOf<typeof FRAGMENT_3199>;
type FragmentSelf3199 = NonNullable<FragmentResult3199>;

export type FragmentToken3199 =
  | FragmentSelf3199["__typename"]
  | FragmentSelf3199["typenameHint"] | FragmentToken3197 | FragmentToken3198;
