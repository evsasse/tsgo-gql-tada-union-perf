import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3196 } from "./fragment3196";
import type { FragmentToken3197 } from "./fragment3197";

export const FRAGMENT_3198 = gql(`
  fragment Fragment3198 on Member117 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_117
    memberCount_117
    memberMetric_117
  }
`);

type FragmentResult3198 = ResultOf<typeof FRAGMENT_3198>;
type FragmentSelf3198 = NonNullable<FragmentResult3198>;

export type FragmentToken3198 =
  | FragmentSelf3198["__typename"]
  | FragmentSelf3198["typenameHint"] | FragmentToken3196 | FragmentToken3197;
