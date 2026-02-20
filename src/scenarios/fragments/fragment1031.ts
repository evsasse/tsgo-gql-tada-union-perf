import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1029 } from "./fragment1029";
import type { FragmentToken1030 } from "./fragment1030";

export const FRAGMENT_1031 = gql(`
  fragment Fragment1031 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult1031 = ResultOf<typeof FRAGMENT_1031>;
type FragmentSelf1031 = NonNullable<FragmentResult1031>;

export type FragmentToken1031 =
  | FragmentSelf1031["__typename"]
  | FragmentSelf1031["typenameHint"] | FragmentToken1029 | FragmentToken1030;
