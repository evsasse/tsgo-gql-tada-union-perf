import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1090 } from "./fragment1090";
import type { FragmentToken1091 } from "./fragment1091";

export const FRAGMENT_1092 = gql(`
  fragment Fragment1092 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult1092 = ResultOf<typeof FRAGMENT_1092>;
type FragmentSelf1092 = NonNullable<FragmentResult1092>;

export type FragmentToken1092 =
  | FragmentSelf1092["__typename"]
  | FragmentSelf1092["typenameHint"] | FragmentToken1090 | FragmentToken1091;
