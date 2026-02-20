import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1866 } from "./fragment1866";
import type { FragmentToken1867 } from "./fragment1867";

export const FRAGMENT_1868 = gql(`
  fragment Fragment1868 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult1868 = ResultOf<typeof FRAGMENT_1868>;
type FragmentSelf1868 = NonNullable<FragmentResult1868>;

export type FragmentToken1868 =
  | FragmentSelf1868["__typename"]
  | FragmentSelf1868["typenameHint"] | FragmentToken1866 | FragmentToken1867;
