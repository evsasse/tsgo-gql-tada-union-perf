import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1123 } from "./fragment1123";
import type { FragmentToken1124 } from "./fragment1124";

export const FRAGMENT_1125 = gql(`
  fragment Fragment1125 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult1125 = ResultOf<typeof FRAGMENT_1125>;
type FragmentSelf1125 = NonNullable<FragmentResult1125>;

export type FragmentToken1125 =
  | FragmentSelf1125["__typename"]
  | FragmentSelf1125["typenameHint"] | FragmentToken1123 | FragmentToken1124;
