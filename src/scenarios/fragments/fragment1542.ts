import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1540 } from "./fragment1540";
import type { FragmentToken1541 } from "./fragment1541";

export const FRAGMENT_1542 = gql(`
  fragment Fragment1542 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult1542 = ResultOf<typeof FRAGMENT_1542>;
type FragmentSelf1542 = NonNullable<FragmentResult1542>;

export type FragmentToken1542 =
  | FragmentSelf1542["__typename"]
  | FragmentSelf1542["typenameHint"] | FragmentToken1540 | FragmentToken1541;
