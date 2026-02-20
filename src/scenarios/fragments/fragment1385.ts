import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1383 } from "./fragment1383";
import type { FragmentToken1384 } from "./fragment1384";

export const FRAGMENT_1385 = gql(`
  fragment Fragment1385 on Member264 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_264
    memberCount_264
    memberMetric_264
  }
`);

type FragmentResult1385 = ResultOf<typeof FRAGMENT_1385>;
type FragmentSelf1385 = NonNullable<FragmentResult1385>;

export type FragmentToken1385 =
  | FragmentSelf1385["__typename"]
  | FragmentSelf1385["typenameHint"] | FragmentToken1383 | FragmentToken1384;
