import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1100 } from "./fragment1100";
import type { FragmentToken1101 } from "./fragment1101";

export const FRAGMENT_1102 = gql(`
  fragment Fragment1102 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult1102 = ResultOf<typeof FRAGMENT_1102>;
type FragmentSelf1102 = NonNullable<FragmentResult1102>;

export type FragmentToken1102 =
  | FragmentSelf1102["__typename"]
  | FragmentSelf1102["typenameHint"] | FragmentToken1100 | FragmentToken1101;
