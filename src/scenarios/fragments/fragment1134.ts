import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1132 } from "./fragment1132";
import type { FragmentToken1133 } from "./fragment1133";

export const FRAGMENT_1134 = gql(`
  fragment Fragment1134 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult1134 = ResultOf<typeof FRAGMENT_1134>;
type FragmentSelf1134 = NonNullable<FragmentResult1134>;

export type FragmentToken1134 =
  | FragmentSelf1134["__typename"]
  | FragmentSelf1134["typenameHint"] | FragmentToken1132 | FragmentToken1133;
