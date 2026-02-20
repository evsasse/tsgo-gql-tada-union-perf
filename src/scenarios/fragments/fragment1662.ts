import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1660 } from "./fragment1660";
import type { FragmentToken1661 } from "./fragment1661";

export const FRAGMENT_1662 = gql(`
  fragment Fragment1662 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult1662 = ResultOf<typeof FRAGMENT_1662>;
type FragmentSelf1662 = NonNullable<FragmentResult1662>;

export type FragmentToken1662 =
  | FragmentSelf1662["__typename"]
  | FragmentSelf1662["typenameHint"] | FragmentToken1660 | FragmentToken1661;
