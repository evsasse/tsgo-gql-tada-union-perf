import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1715 } from "./fragment1715";
import type { FragmentToken1716 } from "./fragment1716";

export const FRAGMENT_1717 = gql(`
  fragment Fragment1717 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult1717 = ResultOf<typeof FRAGMENT_1717>;
type FragmentSelf1717 = NonNullable<FragmentResult1717>;

export type FragmentToken1717 =
  | FragmentSelf1717["__typename"]
  | FragmentSelf1717["typenameHint"] | FragmentToken1715 | FragmentToken1716;
