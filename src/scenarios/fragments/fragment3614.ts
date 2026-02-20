import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3612 } from "./fragment3612";
import type { FragmentToken3613 } from "./fragment3613";

export const FRAGMENT_3614 = gql(`
  fragment Fragment3614 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult3614 = ResultOf<typeof FRAGMENT_3614>;
type FragmentSelf3614 = NonNullable<FragmentResult3614>;

export type FragmentToken3614 =
  | FragmentSelf3614["__typename"]
  | FragmentSelf3614["typenameHint"] | FragmentToken3612 | FragmentToken3613;
