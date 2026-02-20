import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1276 } from "./fragment1276";
import type { FragmentToken1277 } from "./fragment1277";

export const FRAGMENT_1278 = gql(`
  fragment Fragment1278 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult1278 = ResultOf<typeof FRAGMENT_1278>;
type FragmentSelf1278 = NonNullable<FragmentResult1278>;

export type FragmentToken1278 =
  | FragmentSelf1278["__typename"]
  | FragmentSelf1278["typenameHint"] | FragmentToken1276 | FragmentToken1277;
