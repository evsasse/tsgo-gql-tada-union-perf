import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1650 } from "./fragment1650";
import type { FragmentToken1651 } from "./fragment1651";

export const FRAGMENT_1652 = gql(`
  fragment Fragment1652 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult1652 = ResultOf<typeof FRAGMENT_1652>;
type FragmentSelf1652 = NonNullable<FragmentResult1652>;

export type FragmentToken1652 =
  | FragmentSelf1652["__typename"]
  | FragmentSelf1652["typenameHint"] | FragmentToken1650 | FragmentToken1651;
