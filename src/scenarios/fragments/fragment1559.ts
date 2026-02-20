import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1557 } from "./fragment1557";
import type { FragmentToken1558 } from "./fragment1558";

export const FRAGMENT_1559 = gql(`
  fragment Fragment1559 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult1559 = ResultOf<typeof FRAGMENT_1559>;
type FragmentSelf1559 = NonNullable<FragmentResult1559>;

export type FragmentToken1559 =
  | FragmentSelf1559["__typename"]
  | FragmentSelf1559["typenameHint"] | FragmentToken1557 | FragmentToken1558;
