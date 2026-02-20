import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1782 } from "./fragment1782";
import type { FragmentToken1783 } from "./fragment1783";

export const FRAGMENT_1784 = gql(`
  fragment Fragment1784 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult1784 = ResultOf<typeof FRAGMENT_1784>;
type FragmentSelf1784 = NonNullable<FragmentResult1784>;

export type FragmentToken1784 =
  | FragmentSelf1784["__typename"]
  | FragmentSelf1784["typenameHint"] | FragmentToken1782 | FragmentToken1783;
