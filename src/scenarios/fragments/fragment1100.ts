import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1098 } from "./fragment1098";
import type { FragmentToken1099 } from "./fragment1099";

export const FRAGMENT_1100 = gql(`
  fragment Fragment1100 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult1100 = ResultOf<typeof FRAGMENT_1100>;
type FragmentSelf1100 = NonNullable<FragmentResult1100>;

export type FragmentToken1100 =
  | FragmentSelf1100["__typename"]
  | FragmentSelf1100["typenameHint"] | FragmentToken1098 | FragmentToken1099;
