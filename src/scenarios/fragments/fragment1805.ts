import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1803 } from "./fragment1803";
import type { FragmentToken1804 } from "./fragment1804";

export const FRAGMENT_1805 = gql(`
  fragment Fragment1805 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult1805 = ResultOf<typeof FRAGMENT_1805>;
type FragmentSelf1805 = NonNullable<FragmentResult1805>;

export type FragmentToken1805 =
  | FragmentSelf1805["__typename"]
  | FragmentSelf1805["typenameHint"] | FragmentToken1803 | FragmentToken1804;
