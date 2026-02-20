import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1802 } from "./fragment1802";
import type { FragmentToken1803 } from "./fragment1803";

export const FRAGMENT_1804 = gql(`
  fragment Fragment1804 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult1804 = ResultOf<typeof FRAGMENT_1804>;
type FragmentSelf1804 = NonNullable<FragmentResult1804>;

export type FragmentToken1804 =
  | FragmentSelf1804["__typename"]
  | FragmentSelf1804["typenameHint"] | FragmentToken1802 | FragmentToken1803;
