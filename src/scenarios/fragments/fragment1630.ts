import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1628 } from "./fragment1628";
import type { FragmentToken1629 } from "./fragment1629";

export const FRAGMENT_1630 = gql(`
  fragment Fragment1630 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult1630 = ResultOf<typeof FRAGMENT_1630>;
type FragmentSelf1630 = NonNullable<FragmentResult1630>;

export type FragmentToken1630 =
  | FragmentSelf1630["__typename"]
  | FragmentSelf1630["typenameHint"] | FragmentToken1628 | FragmentToken1629;
