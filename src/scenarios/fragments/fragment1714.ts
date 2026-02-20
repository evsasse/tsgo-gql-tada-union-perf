import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1712 } from "./fragment1712";
import type { FragmentToken1713 } from "./fragment1713";

export const FRAGMENT_1714 = gql(`
  fragment Fragment1714 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult1714 = ResultOf<typeof FRAGMENT_1714>;
type FragmentSelf1714 = NonNullable<FragmentResult1714>;

export type FragmentToken1714 =
  | FragmentSelf1714["__typename"]
  | FragmentSelf1714["typenameHint"] | FragmentToken1712 | FragmentToken1713;
