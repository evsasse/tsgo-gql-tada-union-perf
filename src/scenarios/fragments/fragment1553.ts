import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1551 } from "./fragment1551";
import type { FragmentToken1552 } from "./fragment1552";

export const FRAGMENT_1553 = gql(`
  fragment Fragment1553 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult1553 = ResultOf<typeof FRAGMENT_1553>;
type FragmentSelf1553 = NonNullable<FragmentResult1553>;

export type FragmentToken1553 =
  | FragmentSelf1553["__typename"]
  | FragmentSelf1553["typenameHint"] | FragmentToken1551 | FragmentToken1552;
