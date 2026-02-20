import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1235 } from "./fragment1235";
import type { FragmentToken1236 } from "./fragment1236";

export const FRAGMENT_1237 = gql(`
  fragment Fragment1237 on Member116 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_116
    memberCount_116
    memberMetric_116
  }
`);

type FragmentResult1237 = ResultOf<typeof FRAGMENT_1237>;
type FragmentSelf1237 = NonNullable<FragmentResult1237>;

export type FragmentToken1237 =
  | FragmentSelf1237["__typename"]
  | FragmentSelf1237["typenameHint"] | FragmentToken1235 | FragmentToken1236;
