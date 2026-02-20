import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1213 } from "./fragment1213";
import type { FragmentToken1214 } from "./fragment1214";

export const FRAGMENT_1215 = gql(`
  fragment Fragment1215 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult1215 = ResultOf<typeof FRAGMENT_1215>;
type FragmentSelf1215 = NonNullable<FragmentResult1215>;

export type FragmentToken1215 =
  | FragmentSelf1215["__typename"]
  | FragmentSelf1215["typenameHint"] | FragmentToken1213 | FragmentToken1214;
