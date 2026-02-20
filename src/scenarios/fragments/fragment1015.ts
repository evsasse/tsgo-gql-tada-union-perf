import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1013 } from "./fragment1013";
import type { FragmentToken1014 } from "./fragment1014";

export const FRAGMENT_1015 = gql(`
  fragment Fragment1015 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult1015 = ResultOf<typeof FRAGMENT_1015>;
type FragmentSelf1015 = NonNullable<FragmentResult1015>;

export type FragmentToken1015 =
  | FragmentSelf1015["__typename"]
  | FragmentSelf1015["typenameHint"] | FragmentToken1013 | FragmentToken1014;
