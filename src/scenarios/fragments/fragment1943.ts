import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1941 } from "./fragment1941";
import type { FragmentToken1942 } from "./fragment1942";

export const FRAGMENT_1943 = gql(`
  fragment Fragment1943 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult1943 = ResultOf<typeof FRAGMENT_1943>;
type FragmentSelf1943 = NonNullable<FragmentResult1943>;

export type FragmentToken1943 =
  | FragmentSelf1943["__typename"]
  | FragmentSelf1943["typenameHint"] | FragmentToken1941 | FragmentToken1942;
