import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1519 } from "./fragment1519";
import type { FragmentToken1520 } from "./fragment1520";

export const FRAGMENT_1521 = gql(`
  fragment Fragment1521 on Member120 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_120
    memberCount_120
    memberMetric_120
  }
`);

type FragmentResult1521 = ResultOf<typeof FRAGMENT_1521>;
type FragmentSelf1521 = NonNullable<FragmentResult1521>;

export type FragmentToken1521 =
  | FragmentSelf1521["__typename"]
  | FragmentSelf1521["typenameHint"] | FragmentToken1519 | FragmentToken1520;
