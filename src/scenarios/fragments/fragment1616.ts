import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1614 } from "./fragment1614";
import type { FragmentToken1615 } from "./fragment1615";

export const FRAGMENT_1616 = gql(`
  fragment Fragment1616 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult1616 = ResultOf<typeof FRAGMENT_1616>;
type FragmentSelf1616 = NonNullable<FragmentResult1616>;

export type FragmentToken1616 =
  | FragmentSelf1616["__typename"]
  | FragmentSelf1616["typenameHint"] | FragmentToken1614 | FragmentToken1615;
