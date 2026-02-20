import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3211 } from "./fragment3211";
import type { FragmentToken3212 } from "./fragment3212";

export const FRAGMENT_3213 = gql(`
  fragment Fragment3213 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult3213 = ResultOf<typeof FRAGMENT_3213>;
type FragmentSelf3213 = NonNullable<FragmentResult3213>;

export type FragmentToken3213 =
  | FragmentSelf3213["__typename"]
  | FragmentSelf3213["typenameHint"] | FragmentToken3211 | FragmentToken3212;
