import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1119 } from "./fragment1119";
import type { FragmentToken1120 } from "./fragment1120";

export const FRAGMENT_1121 = gql(`
  fragment Fragment1121 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult1121 = ResultOf<typeof FRAGMENT_1121>;
type FragmentSelf1121 = NonNullable<FragmentResult1121>;

export type FragmentToken1121 =
  | FragmentSelf1121["__typename"]
  | FragmentSelf1121["typenameHint"] | FragmentToken1119 | FragmentToken1120;
