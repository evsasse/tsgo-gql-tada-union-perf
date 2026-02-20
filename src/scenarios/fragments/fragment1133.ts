import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1131 } from "./fragment1131";
import type { FragmentToken1132 } from "./fragment1132";

export const FRAGMENT_1133 = gql(`
  fragment Fragment1133 on Member12 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_12
    memberCount_12
    memberMetric_12
  }
`);

type FragmentResult1133 = ResultOf<typeof FRAGMENT_1133>;
type FragmentSelf1133 = NonNullable<FragmentResult1133>;

export type FragmentToken1133 =
  | FragmentSelf1133["__typename"]
  | FragmentSelf1133["typenameHint"] | FragmentToken1131 | FragmentToken1132;
