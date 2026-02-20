import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1569 } from "./fragment1569";
import type { FragmentToken1570 } from "./fragment1570";

export const FRAGMENT_1571 = gql(`
  fragment Fragment1571 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult1571 = ResultOf<typeof FRAGMENT_1571>;
type FragmentSelf1571 = NonNullable<FragmentResult1571>;

export type FragmentToken1571 =
  | FragmentSelf1571["__typename"]
  | FragmentSelf1571["typenameHint"] | FragmentToken1569 | FragmentToken1570;
