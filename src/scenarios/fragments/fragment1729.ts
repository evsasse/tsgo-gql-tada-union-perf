import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1727 } from "./fragment1727";
import type { FragmentToken1728 } from "./fragment1728";

export const FRAGMENT_1729 = gql(`
  fragment Fragment1729 on Member48 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_48
    memberCount_48
    memberMetric_48
  }
`);

type FragmentResult1729 = ResultOf<typeof FRAGMENT_1729>;
type FragmentSelf1729 = NonNullable<FragmentResult1729>;

export type FragmentToken1729 =
  | FragmentSelf1729["__typename"]
  | FragmentSelf1729["typenameHint"] | FragmentToken1727 | FragmentToken1728;
