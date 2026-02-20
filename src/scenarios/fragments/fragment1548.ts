import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1546 } from "./fragment1546";
import type { FragmentToken1547 } from "./fragment1547";

export const FRAGMENT_1548 = gql(`
  fragment Fragment1548 on Member147 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_147
    memberCount_147
    memberMetric_147
  }
`);

type FragmentResult1548 = ResultOf<typeof FRAGMENT_1548>;
type FragmentSelf1548 = NonNullable<FragmentResult1548>;

export type FragmentToken1548 =
  | FragmentSelf1548["__typename"]
  | FragmentSelf1548["typenameHint"] | FragmentToken1546 | FragmentToken1547;
