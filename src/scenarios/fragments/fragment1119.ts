import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1117 } from "./fragment1117";
import type { FragmentToken1118 } from "./fragment1118";

export const FRAGMENT_1119 = gql(`
  fragment Fragment1119 on Member278 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_278
    memberCount_278
    memberMetric_278
  }
`);

type FragmentResult1119 = ResultOf<typeof FRAGMENT_1119>;
type FragmentSelf1119 = NonNullable<FragmentResult1119>;

export type FragmentToken1119 =
  | FragmentSelf1119["__typename"]
  | FragmentSelf1119["typenameHint"] | FragmentToken1117 | FragmentToken1118;
