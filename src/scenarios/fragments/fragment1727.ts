import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1725 } from "./fragment1725";
import type { FragmentToken1726 } from "./fragment1726";

export const FRAGMENT_1727 = gql(`
  fragment Fragment1727 on Member46 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_46
    memberCount_46
    memberMetric_46
  }
`);

type FragmentResult1727 = ResultOf<typeof FRAGMENT_1727>;
type FragmentSelf1727 = NonNullable<FragmentResult1727>;

export type FragmentToken1727 =
  | FragmentSelf1727["__typename"]
  | FragmentSelf1727["typenameHint"] | FragmentToken1725 | FragmentToken1726;
