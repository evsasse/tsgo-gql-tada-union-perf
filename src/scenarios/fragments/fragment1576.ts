import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1574 } from "./fragment1574";
import type { FragmentToken1575 } from "./fragment1575";

export const FRAGMENT_1576 = gql(`
  fragment Fragment1576 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult1576 = ResultOf<typeof FRAGMENT_1576>;
type FragmentSelf1576 = NonNullable<FragmentResult1576>;

export type FragmentToken1576 =
  | FragmentSelf1576["__typename"]
  | FragmentSelf1576["typenameHint"] | FragmentToken1574 | FragmentToken1575;
