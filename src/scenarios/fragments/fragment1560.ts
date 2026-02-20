import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1558 } from "./fragment1558";
import type { FragmentToken1559 } from "./fragment1559";

export const FRAGMENT_1560 = gql(`
  fragment Fragment1560 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult1560 = ResultOf<typeof FRAGMENT_1560>;
type FragmentSelf1560 = NonNullable<FragmentResult1560>;

export type FragmentToken1560 =
  | FragmentSelf1560["__typename"]
  | FragmentSelf1560["typenameHint"] | FragmentToken1558 | FragmentToken1559;
