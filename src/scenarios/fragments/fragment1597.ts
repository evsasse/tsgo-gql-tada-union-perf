import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1595 } from "./fragment1595";
import type { FragmentToken1596 } from "./fragment1596";

export const FRAGMENT_1597 = gql(`
  fragment Fragment1597 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult1597 = ResultOf<typeof FRAGMENT_1597>;
type FragmentSelf1597 = NonNullable<FragmentResult1597>;

export type FragmentToken1597 =
  | FragmentSelf1597["__typename"]
  | FragmentSelf1597["typenameHint"] | FragmentToken1595 | FragmentToken1596;
