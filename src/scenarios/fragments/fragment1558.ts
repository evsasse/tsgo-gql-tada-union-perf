import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1556 } from "./fragment1556";
import type { FragmentToken1557 } from "./fragment1557";

export const FRAGMENT_1558 = gql(`
  fragment Fragment1558 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult1558 = ResultOf<typeof FRAGMENT_1558>;
type FragmentSelf1558 = NonNullable<FragmentResult1558>;

export type FragmentToken1558 =
  | FragmentSelf1558["__typename"]
  | FragmentSelf1558["typenameHint"] | FragmentToken1556 | FragmentToken1557;
