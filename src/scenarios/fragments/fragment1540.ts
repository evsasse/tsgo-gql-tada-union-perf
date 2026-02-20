import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1538 } from "./fragment1538";
import type { FragmentToken1539 } from "./fragment1539";

export const FRAGMENT_1540 = gql(`
  fragment Fragment1540 on Member139 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_139
    memberCount_139
    memberMetric_139
  }
`);

type FragmentResult1540 = ResultOf<typeof FRAGMENT_1540>;
type FragmentSelf1540 = NonNullable<FragmentResult1540>;

export type FragmentToken1540 =
  | FragmentSelf1540["__typename"]
  | FragmentSelf1540["typenameHint"] | FragmentToken1538 | FragmentToken1539;
