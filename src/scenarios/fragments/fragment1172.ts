import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1170 } from "./fragment1170";
import type { FragmentToken1171 } from "./fragment1171";

export const FRAGMENT_1172 = gql(`
  fragment Fragment1172 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult1172 = ResultOf<typeof FRAGMENT_1172>;
type FragmentSelf1172 = NonNullable<FragmentResult1172>;

export type FragmentToken1172 =
  | FragmentSelf1172["__typename"]
  | FragmentSelf1172["typenameHint"] | FragmentToken1170 | FragmentToken1171;
