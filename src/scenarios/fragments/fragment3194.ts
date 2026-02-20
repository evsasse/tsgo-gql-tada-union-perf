import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3192 } from "./fragment3192";
import type { FragmentToken3193 } from "./fragment3193";

export const FRAGMENT_3194 = gql(`
  fragment Fragment3194 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult3194 = ResultOf<typeof FRAGMENT_3194>;
type FragmentSelf3194 = NonNullable<FragmentResult3194>;

export type FragmentToken3194 =
  | FragmentSelf3194["__typename"]
  | FragmentSelf3194["typenameHint"] | FragmentToken3192 | FragmentToken3193;
