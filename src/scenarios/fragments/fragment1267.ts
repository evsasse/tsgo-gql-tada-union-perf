import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1265 } from "./fragment1265";
import type { FragmentToken1266 } from "./fragment1266";

export const FRAGMENT_1267 = gql(`
  fragment Fragment1267 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult1267 = ResultOf<typeof FRAGMENT_1267>;
type FragmentSelf1267 = NonNullable<FragmentResult1267>;

export type FragmentToken1267 =
  | FragmentSelf1267["__typename"]
  | FragmentSelf1267["typenameHint"] | FragmentToken1265 | FragmentToken1266;
