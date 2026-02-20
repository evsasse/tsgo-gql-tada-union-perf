import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1104 } from "./fragment1104";
import type { FragmentToken1105 } from "./fragment1105";

export const FRAGMENT_1106 = gql(`
  fragment Fragment1106 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult1106 = ResultOf<typeof FRAGMENT_1106>;
type FragmentSelf1106 = NonNullable<FragmentResult1106>;

export type FragmentToken1106 =
  | FragmentSelf1106["__typename"]
  | FragmentSelf1106["typenameHint"] | FragmentToken1104 | FragmentToken1105;
