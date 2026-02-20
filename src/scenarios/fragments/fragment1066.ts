import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1064 } from "./fragment1064";
import type { FragmentToken1065 } from "./fragment1065";

export const FRAGMENT_1066 = gql(`
  fragment Fragment1066 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult1066 = ResultOf<typeof FRAGMENT_1066>;
type FragmentSelf1066 = NonNullable<FragmentResult1066>;

export type FragmentToken1066 =
  | FragmentSelf1066["__typename"]
  | FragmentSelf1066["typenameHint"] | FragmentToken1064 | FragmentToken1065;
