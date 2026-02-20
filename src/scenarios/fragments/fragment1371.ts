import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1369 } from "./fragment1369";
import type { FragmentToken1370 } from "./fragment1370";

export const FRAGMENT_1371 = gql(`
  fragment Fragment1371 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult1371 = ResultOf<typeof FRAGMENT_1371>;
type FragmentSelf1371 = NonNullable<FragmentResult1371>;

export type FragmentToken1371 =
  | FragmentSelf1371["__typename"]
  | FragmentSelf1371["typenameHint"] | FragmentToken1369 | FragmentToken1370;
