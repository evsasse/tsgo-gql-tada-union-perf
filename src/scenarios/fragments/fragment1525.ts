import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1523 } from "./fragment1523";
import type { FragmentToken1524 } from "./fragment1524";

export const FRAGMENT_1525 = gql(`
  fragment Fragment1525 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult1525 = ResultOf<typeof FRAGMENT_1525>;
type FragmentSelf1525 = NonNullable<FragmentResult1525>;

export type FragmentToken1525 =
  | FragmentSelf1525["__typename"]
  | FragmentSelf1525["typenameHint"] | FragmentToken1523 | FragmentToken1524;
