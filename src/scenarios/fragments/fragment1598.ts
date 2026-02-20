import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1596 } from "./fragment1596";
import type { FragmentToken1597 } from "./fragment1597";

export const FRAGMENT_1598 = gql(`
  fragment Fragment1598 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult1598 = ResultOf<typeof FRAGMENT_1598>;
type FragmentSelf1598 = NonNullable<FragmentResult1598>;

export type FragmentToken1598 =
  | FragmentSelf1598["__typename"]
  | FragmentSelf1598["typenameHint"] | FragmentToken1596 | FragmentToken1597;
