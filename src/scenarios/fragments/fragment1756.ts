import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1754 } from "./fragment1754";
import type { FragmentToken1755 } from "./fragment1755";

export const FRAGMENT_1756 = gql(`
  fragment Fragment1756 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult1756 = ResultOf<typeof FRAGMENT_1756>;
type FragmentSelf1756 = NonNullable<FragmentResult1756>;

export type FragmentToken1756 =
  | FragmentSelf1756["__typename"]
  | FragmentSelf1756["typenameHint"] | FragmentToken1754 | FragmentToken1755;
