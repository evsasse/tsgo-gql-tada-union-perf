import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1808 } from "./fragment1808";
import type { FragmentToken1809 } from "./fragment1809";

export const FRAGMENT_1810 = gql(`
  fragment Fragment1810 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult1810 = ResultOf<typeof FRAGMENT_1810>;
type FragmentSelf1810 = NonNullable<FragmentResult1810>;

export type FragmentToken1810 =
  | FragmentSelf1810["__typename"]
  | FragmentSelf1810["typenameHint"] | FragmentToken1808 | FragmentToken1809;
