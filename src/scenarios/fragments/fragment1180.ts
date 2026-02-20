import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1178 } from "./fragment1178";
import type { FragmentToken1179 } from "./fragment1179";

export const FRAGMENT_1180 = gql(`
  fragment Fragment1180 on Member59 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_59
    memberCount_59
    memberMetric_59
  }
`);

type FragmentResult1180 = ResultOf<typeof FRAGMENT_1180>;
type FragmentSelf1180 = NonNullable<FragmentResult1180>;

export type FragmentToken1180 =
  | FragmentSelf1180["__typename"]
  | FragmentSelf1180["typenameHint"] | FragmentToken1178 | FragmentToken1179;
