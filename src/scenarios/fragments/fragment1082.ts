import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1080 } from "./fragment1080";
import type { FragmentToken1081 } from "./fragment1081";

export const FRAGMENT_1082 = gql(`
  fragment Fragment1082 on Member241 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_241
    memberCount_241
    memberMetric_241
  }
`);

type FragmentResult1082 = ResultOf<typeof FRAGMENT_1082>;
type FragmentSelf1082 = NonNullable<FragmentResult1082>;

export type FragmentToken1082 =
  | FragmentSelf1082["__typename"]
  | FragmentSelf1082["typenameHint"] | FragmentToken1080 | FragmentToken1081;
