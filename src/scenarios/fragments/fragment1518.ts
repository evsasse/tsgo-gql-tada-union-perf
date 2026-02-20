import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1516 } from "./fragment1516";
import type { FragmentToken1517 } from "./fragment1517";

export const FRAGMENT_1518 = gql(`
  fragment Fragment1518 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult1518 = ResultOf<typeof FRAGMENT_1518>;
type FragmentSelf1518 = NonNullable<FragmentResult1518>;

export type FragmentToken1518 =
  | FragmentSelf1518["__typename"]
  | FragmentSelf1518["typenameHint"] | FragmentToken1516 | FragmentToken1517;
