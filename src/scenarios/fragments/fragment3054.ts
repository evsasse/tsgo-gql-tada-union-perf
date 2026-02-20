import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3052 } from "./fragment3052";
import type { FragmentToken3053 } from "./fragment3053";

export const FRAGMENT_3054 = gql(`
  fragment Fragment3054 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult3054 = ResultOf<typeof FRAGMENT_3054>;
type FragmentSelf3054 = NonNullable<FragmentResult3054>;

export type FragmentToken3054 =
  | FragmentSelf3054["__typename"]
  | FragmentSelf3054["typenameHint"] | FragmentToken3052 | FragmentToken3053;
