import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1684 } from "./fragment1684";
import type { FragmentToken1685 } from "./fragment1685";

export const FRAGMENT_1686 = gql(`
  fragment Fragment1686 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult1686 = ResultOf<typeof FRAGMENT_1686>;
type FragmentSelf1686 = NonNullable<FragmentResult1686>;

export type FragmentToken1686 =
  | FragmentSelf1686["__typename"]
  | FragmentSelf1686["typenameHint"] | FragmentToken1684 | FragmentToken1685;
