import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1076 } from "./fragment1076";
import type { FragmentToken1077 } from "./fragment1077";

export const FRAGMENT_1078 = gql(`
  fragment Fragment1078 on Member237 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_237
    memberCount_237
    memberMetric_237
  }
`);

type FragmentResult1078 = ResultOf<typeof FRAGMENT_1078>;
type FragmentSelf1078 = NonNullable<FragmentResult1078>;

export type FragmentToken1078 =
  | FragmentSelf1078["__typename"]
  | FragmentSelf1078["typenameHint"] | FragmentToken1076 | FragmentToken1077;
