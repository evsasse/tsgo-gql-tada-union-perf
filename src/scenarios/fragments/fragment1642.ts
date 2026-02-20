import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1640 } from "./fragment1640";
import type { FragmentToken1641 } from "./fragment1641";

export const FRAGMENT_1642 = gql(`
  fragment Fragment1642 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult1642 = ResultOf<typeof FRAGMENT_1642>;
type FragmentSelf1642 = NonNullable<FragmentResult1642>;

export type FragmentToken1642 =
  | FragmentSelf1642["__typename"]
  | FragmentSelf1642["typenameHint"] | FragmentToken1640 | FragmentToken1641;
