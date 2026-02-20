import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1145 } from "./fragment1145";
import type { FragmentToken1146 } from "./fragment1146";

export const FRAGMENT_1147 = gql(`
  fragment Fragment1147 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult1147 = ResultOf<typeof FRAGMENT_1147>;
type FragmentSelf1147 = NonNullable<FragmentResult1147>;

export type FragmentToken1147 =
  | FragmentSelf1147["__typename"]
  | FragmentSelf1147["typenameHint"] | FragmentToken1145 | FragmentToken1146;
