import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3290 } from "./fragment3290";
import type { FragmentToken3291 } from "./fragment3291";

export const FRAGMENT_3292 = gql(`
  fragment Fragment3292 on Member211 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_211
    memberCount_211
    memberMetric_211
  }
`);

type FragmentResult3292 = ResultOf<typeof FRAGMENT_3292>;
type FragmentSelf3292 = NonNullable<FragmentResult3292>;

export type FragmentToken3292 =
  | FragmentSelf3292["__typename"]
  | FragmentSelf3292["typenameHint"] | FragmentToken3290 | FragmentToken3291;
