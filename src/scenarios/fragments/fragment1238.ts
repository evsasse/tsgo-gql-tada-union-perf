import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1236 } from "./fragment1236";
import type { FragmentToken1237 } from "./fragment1237";

export const FRAGMENT_1238 = gql(`
  fragment Fragment1238 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult1238 = ResultOf<typeof FRAGMENT_1238>;
type FragmentSelf1238 = NonNullable<FragmentResult1238>;

export type FragmentToken1238 =
  | FragmentSelf1238["__typename"]
  | FragmentSelf1238["typenameHint"] | FragmentToken1236 | FragmentToken1237;
