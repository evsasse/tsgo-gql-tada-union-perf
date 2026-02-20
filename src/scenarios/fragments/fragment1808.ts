import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1806 } from "./fragment1806";
import type { FragmentToken1807 } from "./fragment1807";

export const FRAGMENT_1808 = gql(`
  fragment Fragment1808 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult1808 = ResultOf<typeof FRAGMENT_1808>;
type FragmentSelf1808 = NonNullable<FragmentResult1808>;

export type FragmentToken1808 =
  | FragmentSelf1808["__typename"]
  | FragmentSelf1808["typenameHint"] | FragmentToken1806 | FragmentToken1807;
