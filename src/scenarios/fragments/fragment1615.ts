import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1613 } from "./fragment1613";
import type { FragmentToken1614 } from "./fragment1614";

export const FRAGMENT_1615 = gql(`
  fragment Fragment1615 on Member214 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_214
    memberCount_214
    memberMetric_214
  }
`);

type FragmentResult1615 = ResultOf<typeof FRAGMENT_1615>;
type FragmentSelf1615 = NonNullable<FragmentResult1615>;

export type FragmentToken1615 =
  | FragmentSelf1615["__typename"]
  | FragmentSelf1615["typenameHint"] | FragmentToken1613 | FragmentToken1614;
