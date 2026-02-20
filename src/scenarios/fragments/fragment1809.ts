import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1807 } from "./fragment1807";
import type { FragmentToken1808 } from "./fragment1808";

export const FRAGMENT_1809 = gql(`
  fragment Fragment1809 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult1809 = ResultOf<typeof FRAGMENT_1809>;
type FragmentSelf1809 = NonNullable<FragmentResult1809>;

export type FragmentToken1809 =
  | FragmentSelf1809["__typename"]
  | FragmentSelf1809["typenameHint"] | FragmentToken1807 | FragmentToken1808;
