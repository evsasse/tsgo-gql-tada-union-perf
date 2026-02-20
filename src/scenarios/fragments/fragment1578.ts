import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1576 } from "./fragment1576";
import type { FragmentToken1577 } from "./fragment1577";

export const FRAGMENT_1578 = gql(`
  fragment Fragment1578 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult1578 = ResultOf<typeof FRAGMENT_1578>;
type FragmentSelf1578 = NonNullable<FragmentResult1578>;

export type FragmentToken1578 =
  | FragmentSelf1578["__typename"]
  | FragmentSelf1578["typenameHint"] | FragmentToken1576 | FragmentToken1577;
