import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1763 } from "./fragment1763";
import type { FragmentToken1764 } from "./fragment1764";

export const FRAGMENT_1765 = gql(`
  fragment Fragment1765 on Member84 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_84
    memberCount_84
    memberMetric_84
  }
`);

type FragmentResult1765 = ResultOf<typeof FRAGMENT_1765>;
type FragmentSelf1765 = NonNullable<FragmentResult1765>;

export type FragmentToken1765 =
  | FragmentSelf1765["__typename"]
  | FragmentSelf1765["typenameHint"] | FragmentToken1763 | FragmentToken1764;
