import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1264 } from "./fragment1264";
import type { FragmentToken1265 } from "./fragment1265";

export const FRAGMENT_1266 = gql(`
  fragment Fragment1266 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult1266 = ResultOf<typeof FRAGMENT_1266>;
type FragmentSelf1266 = NonNullable<FragmentResult1266>;

export type FragmentToken1266 =
  | FragmentSelf1266["__typename"]
  | FragmentSelf1266["typenameHint"] | FragmentToken1264 | FragmentToken1265;
