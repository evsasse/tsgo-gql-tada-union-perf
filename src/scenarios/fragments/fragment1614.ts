import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1612 } from "./fragment1612";
import type { FragmentToken1613 } from "./fragment1613";

export const FRAGMENT_1614 = gql(`
  fragment Fragment1614 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult1614 = ResultOf<typeof FRAGMENT_1614>;
type FragmentSelf1614 = NonNullable<FragmentResult1614>;

export type FragmentToken1614 =
  | FragmentSelf1614["__typename"]
  | FragmentSelf1614["typenameHint"] | FragmentToken1612 | FragmentToken1613;
