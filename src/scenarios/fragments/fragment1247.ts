import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1245 } from "./fragment1245";
import type { FragmentToken1246 } from "./fragment1246";

export const FRAGMENT_1247 = gql(`
  fragment Fragment1247 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult1247 = ResultOf<typeof FRAGMENT_1247>;
type FragmentSelf1247 = NonNullable<FragmentResult1247>;

export type FragmentToken1247 =
  | FragmentSelf1247["__typename"]
  | FragmentSelf1247["typenameHint"] | FragmentToken1245 | FragmentToken1246;
