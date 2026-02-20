import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1704 } from "./fragment1704";
import type { FragmentToken1705 } from "./fragment1705";

export const FRAGMENT_1706 = gql(`
  fragment Fragment1706 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult1706 = ResultOf<typeof FRAGMENT_1706>;
type FragmentSelf1706 = NonNullable<FragmentResult1706>;

export type FragmentToken1706 =
  | FragmentSelf1706["__typename"]
  | FragmentSelf1706["typenameHint"] | FragmentToken1704 | FragmentToken1705;
