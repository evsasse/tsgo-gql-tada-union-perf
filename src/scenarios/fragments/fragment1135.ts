import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1133 } from "./fragment1133";
import type { FragmentToken1134 } from "./fragment1134";

export const FRAGMENT_1135 = gql(`
  fragment Fragment1135 on Member14 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_14
    memberCount_14
    memberMetric_14
  }
`);

type FragmentResult1135 = ResultOf<typeof FRAGMENT_1135>;
type FragmentSelf1135 = NonNullable<FragmentResult1135>;

export type FragmentToken1135 =
  | FragmentSelf1135["__typename"]
  | FragmentSelf1135["typenameHint"] | FragmentToken1133 | FragmentToken1134;
