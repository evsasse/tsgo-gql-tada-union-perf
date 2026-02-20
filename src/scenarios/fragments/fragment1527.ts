import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1525 } from "./fragment1525";
import type { FragmentToken1526 } from "./fragment1526";

export const FRAGMENT_1527 = gql(`
  fragment Fragment1527 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult1527 = ResultOf<typeof FRAGMENT_1527>;
type FragmentSelf1527 = NonNullable<FragmentResult1527>;

export type FragmentToken1527 =
  | FragmentSelf1527["__typename"]
  | FragmentSelf1527["typenameHint"] | FragmentToken1525 | FragmentToken1526;
