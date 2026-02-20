import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1351 } from "./fragment1351";
import type { FragmentToken1352 } from "./fragment1352";

export const FRAGMENT_1353 = gql(`
  fragment Fragment1353 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult1353 = ResultOf<typeof FRAGMENT_1353>;
type FragmentSelf1353 = NonNullable<FragmentResult1353>;

export type FragmentToken1353 =
  | FragmentSelf1353["__typename"]
  | FragmentSelf1353["typenameHint"] | FragmentToken1351 | FragmentToken1352;
