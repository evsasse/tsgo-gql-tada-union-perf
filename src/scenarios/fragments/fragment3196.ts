import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3194 } from "./fragment3194";
import type { FragmentToken3195 } from "./fragment3195";

export const FRAGMENT_3196 = gql(`
  fragment Fragment3196 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult3196 = ResultOf<typeof FRAGMENT_3196>;
type FragmentSelf3196 = NonNullable<FragmentResult3196>;

export type FragmentToken3196 =
  | FragmentSelf3196["__typename"]
  | FragmentSelf3196["typenameHint"] | FragmentToken3194 | FragmentToken3195;
