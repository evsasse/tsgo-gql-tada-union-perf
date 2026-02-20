import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1561 } from "./fragment1561";
import type { FragmentToken1562 } from "./fragment1562";

export const FRAGMENT_1563 = gql(`
  fragment Fragment1563 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult1563 = ResultOf<typeof FRAGMENT_1563>;
type FragmentSelf1563 = NonNullable<FragmentResult1563>;

export type FragmentToken1563 =
  | FragmentSelf1563["__typename"]
  | FragmentSelf1563["typenameHint"] | FragmentToken1561 | FragmentToken1562;
