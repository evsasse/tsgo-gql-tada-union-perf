import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1619 } from "./fragment1619";
import type { FragmentToken1620 } from "./fragment1620";

export const FRAGMENT_1621 = gql(`
  fragment Fragment1621 on Member220 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_220
    memberCount_220
    memberMetric_220
  }
`);

type FragmentResult1621 = ResultOf<typeof FRAGMENT_1621>;
type FragmentSelf1621 = NonNullable<FragmentResult1621>;

export type FragmentToken1621 =
  | FragmentSelf1621["__typename"]
  | FragmentSelf1621["typenameHint"] | FragmentToken1619 | FragmentToken1620;
