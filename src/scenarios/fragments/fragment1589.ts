import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1587 } from "./fragment1587";
import type { FragmentToken1588 } from "./fragment1588";

export const FRAGMENT_1589 = gql(`
  fragment Fragment1589 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult1589 = ResultOf<typeof FRAGMENT_1589>;
type FragmentSelf1589 = NonNullable<FragmentResult1589>;

export type FragmentToken1589 =
  | FragmentSelf1589["__typename"]
  | FragmentSelf1589["typenameHint"] | FragmentToken1587 | FragmentToken1588;
