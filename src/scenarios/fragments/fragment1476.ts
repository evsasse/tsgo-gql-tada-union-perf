import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1474 } from "./fragment1474";
import type { FragmentToken1475 } from "./fragment1475";

export const FRAGMENT_1476 = gql(`
  fragment Fragment1476 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult1476 = ResultOf<typeof FRAGMENT_1476>;
type FragmentSelf1476 = NonNullable<FragmentResult1476>;

export type FragmentToken1476 =
  | FragmentSelf1476["__typename"]
  | FragmentSelf1476["typenameHint"] | FragmentToken1474 | FragmentToken1475;
