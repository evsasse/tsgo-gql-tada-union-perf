import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1416 } from "./fragment1416";
import type { FragmentToken1417 } from "./fragment1417";

export const FRAGMENT_1418 = gql(`
  fragment Fragment1418 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult1418 = ResultOf<typeof FRAGMENT_1418>;
type FragmentSelf1418 = NonNullable<FragmentResult1418>;

export type FragmentToken1418 =
  | FragmentSelf1418["__typename"]
  | FragmentSelf1418["typenameHint"] | FragmentToken1416 | FragmentToken1417;
