import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1313 } from "./fragment1313";
import type { FragmentToken1314 } from "./fragment1314";

export const FRAGMENT_1315 = gql(`
  fragment Fragment1315 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult1315 = ResultOf<typeof FRAGMENT_1315>;
type FragmentSelf1315 = NonNullable<FragmentResult1315>;

export type FragmentToken1315 =
  | FragmentSelf1315["__typename"]
  | FragmentSelf1315["typenameHint"] | FragmentToken1313 | FragmentToken1314;
