import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1069 } from "./fragment1069";
import type { FragmentToken1070 } from "./fragment1070";

export const FRAGMENT_1071 = gql(`
  fragment Fragment1071 on Member230 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_230
    memberCount_230
    memberMetric_230
  }
`);

type FragmentResult1071 = ResultOf<typeof FRAGMENT_1071>;
type FragmentSelf1071 = NonNullable<FragmentResult1071>;

export type FragmentToken1071 =
  | FragmentSelf1071["__typename"]
  | FragmentSelf1071["typenameHint"] | FragmentToken1069 | FragmentToken1070;
