import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1518 } from "./fragment1518";
import type { FragmentToken1519 } from "./fragment1519";

export const FRAGMENT_1520 = gql(`
  fragment Fragment1520 on Member119 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_119
    memberCount_119
    memberMetric_119
  }
`);

type FragmentResult1520 = ResultOf<typeof FRAGMENT_1520>;
type FragmentSelf1520 = NonNullable<FragmentResult1520>;

export type FragmentToken1520 =
  | FragmentSelf1520["__typename"]
  | FragmentSelf1520["typenameHint"] | FragmentToken1518 | FragmentToken1519;
