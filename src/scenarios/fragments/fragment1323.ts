import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1321 } from "./fragment1321";
import type { FragmentToken1322 } from "./fragment1322";

export const FRAGMENT_1323 = gql(`
  fragment Fragment1323 on Member202 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_202
    memberCount_202
    memberMetric_202
  }
`);

type FragmentResult1323 = ResultOf<typeof FRAGMENT_1323>;
type FragmentSelf1323 = NonNullable<FragmentResult1323>;

export type FragmentToken1323 =
  | FragmentSelf1323["__typename"]
  | FragmentSelf1323["typenameHint"] | FragmentToken1321 | FragmentToken1322;
