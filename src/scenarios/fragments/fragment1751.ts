import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1749 } from "./fragment1749";
import type { FragmentToken1750 } from "./fragment1750";

export const FRAGMENT_1751 = gql(`
  fragment Fragment1751 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult1751 = ResultOf<typeof FRAGMENT_1751>;
type FragmentSelf1751 = NonNullable<FragmentResult1751>;

export type FragmentToken1751 =
  | FragmentSelf1751["__typename"]
  | FragmentSelf1751["typenameHint"] | FragmentToken1749 | FragmentToken1750;
