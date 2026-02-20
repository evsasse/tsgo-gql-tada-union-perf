import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1647 } from "./fragment1647";
import type { FragmentToken1648 } from "./fragment1648";

export const FRAGMENT_1649 = gql(`
  fragment Fragment1649 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult1649 = ResultOf<typeof FRAGMENT_1649>;
type FragmentSelf1649 = NonNullable<FragmentResult1649>;

export type FragmentToken1649 =
  | FragmentSelf1649["__typename"]
  | FragmentSelf1649["typenameHint"] | FragmentToken1647 | FragmentToken1648;
