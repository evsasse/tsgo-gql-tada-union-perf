import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1342 } from "./fragment1342";
import type { FragmentToken1343 } from "./fragment1343";

export const FRAGMENT_1344 = gql(`
  fragment Fragment1344 on Member223 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_223
    memberCount_223
    memberMetric_223
  }
`);

type FragmentResult1344 = ResultOf<typeof FRAGMENT_1344>;
type FragmentSelf1344 = NonNullable<FragmentResult1344>;

export type FragmentToken1344 =
  | FragmentSelf1344["__typename"]
  | FragmentSelf1344["typenameHint"] | FragmentToken1342 | FragmentToken1343;
