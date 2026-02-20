import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1051 } from "./fragment1051";
import type { FragmentToken1052 } from "./fragment1052";

export const FRAGMENT_1053 = gql(`
  fragment Fragment1053 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult1053 = ResultOf<typeof FRAGMENT_1053>;
type FragmentSelf1053 = NonNullable<FragmentResult1053>;

export type FragmentToken1053 =
  | FragmentSelf1053["__typename"]
  | FragmentSelf1053["typenameHint"] | FragmentToken1051 | FragmentToken1052;
