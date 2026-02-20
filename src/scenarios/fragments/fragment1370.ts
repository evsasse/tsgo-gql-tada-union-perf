import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1368 } from "./fragment1368";
import type { FragmentToken1369 } from "./fragment1369";

export const FRAGMENT_1370 = gql(`
  fragment Fragment1370 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult1370 = ResultOf<typeof FRAGMENT_1370>;
type FragmentSelf1370 = NonNullable<FragmentResult1370>;

export type FragmentToken1370 =
  | FragmentSelf1370["__typename"]
  | FragmentSelf1370["typenameHint"] | FragmentToken1368 | FragmentToken1369;
