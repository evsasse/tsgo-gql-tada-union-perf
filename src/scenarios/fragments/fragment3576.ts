import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3574 } from "./fragment3574";
import type { FragmentToken3575 } from "./fragment3575";

export const FRAGMENT_3576 = gql(`
  fragment Fragment3576 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult3576 = ResultOf<typeof FRAGMENT_3576>;
type FragmentSelf3576 = NonNullable<FragmentResult3576>;

export type FragmentToken3576 =
  | FragmentSelf3576["__typename"]
  | FragmentSelf3576["typenameHint"] | FragmentToken3574 | FragmentToken3575;
