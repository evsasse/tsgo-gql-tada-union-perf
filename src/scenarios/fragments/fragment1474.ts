import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1472 } from "./fragment1472";
import type { FragmentToken1473 } from "./fragment1473";

export const FRAGMENT_1474 = gql(`
  fragment Fragment1474 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult1474 = ResultOf<typeof FRAGMENT_1474>;
type FragmentSelf1474 = NonNullable<FragmentResult1474>;

export type FragmentToken1474 =
  | FragmentSelf1474["__typename"]
  | FragmentSelf1474["typenameHint"] | FragmentToken1472 | FragmentToken1473;
