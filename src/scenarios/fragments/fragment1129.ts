import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1127 } from "./fragment1127";
import type { FragmentToken1128 } from "./fragment1128";

export const FRAGMENT_1129 = gql(`
  fragment Fragment1129 on Member08 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_08
    memberCount_08
    memberMetric_08
  }
`);

type FragmentResult1129 = ResultOf<typeof FRAGMENT_1129>;
type FragmentSelf1129 = NonNullable<FragmentResult1129>;

export type FragmentToken1129 =
  | FragmentSelf1129["__typename"]
  | FragmentSelf1129["typenameHint"] | FragmentToken1127 | FragmentToken1128;
