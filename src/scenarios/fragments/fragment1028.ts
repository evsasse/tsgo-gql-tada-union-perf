import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1026 } from "./fragment1026";
import type { FragmentToken1027 } from "./fragment1027";

export const FRAGMENT_1028 = gql(`
  fragment Fragment1028 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult1028 = ResultOf<typeof FRAGMENT_1028>;
type FragmentSelf1028 = NonNullable<FragmentResult1028>;

export type FragmentToken1028 =
  | FragmentSelf1028["__typename"]
  | FragmentSelf1028["typenameHint"] | FragmentToken1026 | FragmentToken1027;
