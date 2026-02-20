import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1014 } from "./fragment1014";
import type { FragmentToken1015 } from "./fragment1015";

export const FRAGMENT_1016 = gql(`
  fragment Fragment1016 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult1016 = ResultOf<typeof FRAGMENT_1016>;
type FragmentSelf1016 = NonNullable<FragmentResult1016>;

export type FragmentToken1016 =
  | FragmentSelf1016["__typename"]
  | FragmentSelf1016["typenameHint"] | FragmentToken1014 | FragmentToken1015;
