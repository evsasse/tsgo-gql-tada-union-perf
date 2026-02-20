import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1346 } from "./fragment1346";
import type { FragmentToken1347 } from "./fragment1347";

export const FRAGMENT_1348 = gql(`
  fragment Fragment1348 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult1348 = ResultOf<typeof FRAGMENT_1348>;
type FragmentSelf1348 = NonNullable<FragmentResult1348>;

export type FragmentToken1348 =
  | FragmentSelf1348["__typename"]
  | FragmentSelf1348["typenameHint"] | FragmentToken1346 | FragmentToken1347;
