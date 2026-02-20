import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1489 } from "./fragment1489";
import type { FragmentToken1490 } from "./fragment1490";

export const FRAGMENT_1491 = gql(`
  fragment Fragment1491 on Member90 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_90
    memberCount_90
    memberMetric_90
  }
`);

type FragmentResult1491 = ResultOf<typeof FRAGMENT_1491>;
type FragmentSelf1491 = NonNullable<FragmentResult1491>;

export type FragmentToken1491 =
  | FragmentSelf1491["__typename"]
  | FragmentSelf1491["typenameHint"] | FragmentToken1489 | FragmentToken1490;
