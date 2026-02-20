import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3234 } from "./fragment3234";
import type { FragmentToken3235 } from "./fragment3235";

export const FRAGMENT_3236 = gql(`
  fragment Fragment3236 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult3236 = ResultOf<typeof FRAGMENT_3236>;
type FragmentSelf3236 = NonNullable<FragmentResult3236>;

export type FragmentToken3236 =
  | FragmentSelf3236["__typename"]
  | FragmentSelf3236["typenameHint"] | FragmentToken3234 | FragmentToken3235;
