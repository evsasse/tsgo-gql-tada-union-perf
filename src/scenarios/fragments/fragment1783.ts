import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1781 } from "./fragment1781";
import type { FragmentToken1782 } from "./fragment1782";

export const FRAGMENT_1783 = gql(`
  fragment Fragment1783 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult1783 = ResultOf<typeof FRAGMENT_1783>;
type FragmentSelf1783 = NonNullable<FragmentResult1783>;

export type FragmentToken1783 =
  | FragmentSelf1783["__typename"]
  | FragmentSelf1783["typenameHint"] | FragmentToken1781 | FragmentToken1782;
