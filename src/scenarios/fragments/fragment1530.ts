import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1528 } from "./fragment1528";
import type { FragmentToken1529 } from "./fragment1529";

export const FRAGMENT_1530 = gql(`
  fragment Fragment1530 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult1530 = ResultOf<typeof FRAGMENT_1530>;
type FragmentSelf1530 = NonNullable<FragmentResult1530>;

export type FragmentToken1530 =
  | FragmentSelf1530["__typename"]
  | FragmentSelf1530["typenameHint"] | FragmentToken1528 | FragmentToken1529;
