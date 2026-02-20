import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1555 } from "./fragment1555";
import type { FragmentToken1556 } from "./fragment1556";

export const FRAGMENT_1557 = gql(`
  fragment Fragment1557 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult1557 = ResultOf<typeof FRAGMENT_1557>;
type FragmentSelf1557 = NonNullable<FragmentResult1557>;

export type FragmentToken1557 =
  | FragmentSelf1557["__typename"]
  | FragmentSelf1557["typenameHint"] | FragmentToken1555 | FragmentToken1556;
