import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1636 } from "./fragment1636";
import type { FragmentToken1637 } from "./fragment1637";

export const FRAGMENT_1638 = gql(`
  fragment Fragment1638 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult1638 = ResultOf<typeof FRAGMENT_1638>;
type FragmentSelf1638 = NonNullable<FragmentResult1638>;

export type FragmentToken1638 =
  | FragmentSelf1638["__typename"]
  | FragmentSelf1638["typenameHint"] | FragmentToken1636 | FragmentToken1637;
