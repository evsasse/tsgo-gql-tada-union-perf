import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1661 } from "./fragment1661";
import type { FragmentToken1662 } from "./fragment1662";

export const FRAGMENT_1663 = gql(`
  fragment Fragment1663 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult1663 = ResultOf<typeof FRAGMENT_1663>;
type FragmentSelf1663 = NonNullable<FragmentResult1663>;

export type FragmentToken1663 =
  | FragmentSelf1663["__typename"]
  | FragmentSelf1663["typenameHint"] | FragmentToken1661 | FragmentToken1662;
