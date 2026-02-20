import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1296 } from "./fragment1296";
import type { FragmentToken1297 } from "./fragment1297";

export const FRAGMENT_1298 = gql(`
  fragment Fragment1298 on Member177 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_177
    memberCount_177
    memberMetric_177
  }
`);

type FragmentResult1298 = ResultOf<typeof FRAGMENT_1298>;
type FragmentSelf1298 = NonNullable<FragmentResult1298>;

export type FragmentToken1298 =
  | FragmentSelf1298["__typename"]
  | FragmentSelf1298["typenameHint"] | FragmentToken1296 | FragmentToken1297;
