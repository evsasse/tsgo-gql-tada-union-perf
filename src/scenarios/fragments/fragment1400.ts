import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1398 } from "./fragment1398";
import type { FragmentToken1399 } from "./fragment1399";

export const FRAGMENT_1400 = gql(`
  fragment Fragment1400 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult1400 = ResultOf<typeof FRAGMENT_1400>;
type FragmentSelf1400 = NonNullable<FragmentResult1400>;

export type FragmentToken1400 =
  | FragmentSelf1400["__typename"]
  | FragmentSelf1400["typenameHint"] | FragmentToken1398 | FragmentToken1399;
