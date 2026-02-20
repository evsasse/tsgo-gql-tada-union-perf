import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1645 } from "./fragment1645";
import type { FragmentToken1646 } from "./fragment1646";

export const FRAGMENT_1647 = gql(`
  fragment Fragment1647 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult1647 = ResultOf<typeof FRAGMENT_1647>;
type FragmentSelf1647 = NonNullable<FragmentResult1647>;

export type FragmentToken1647 =
  | FragmentSelf1647["__typename"]
  | FragmentSelf1647["typenameHint"] | FragmentToken1645 | FragmentToken1646;
