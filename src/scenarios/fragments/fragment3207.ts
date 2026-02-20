import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3205 } from "./fragment3205";
import type { FragmentToken3206 } from "./fragment3206";

export const FRAGMENT_3207 = gql(`
  fragment Fragment3207 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult3207 = ResultOf<typeof FRAGMENT_3207>;
type FragmentSelf3207 = NonNullable<FragmentResult3207>;

export type FragmentToken3207 =
  | FragmentSelf3207["__typename"]
  | FragmentSelf3207["typenameHint"] | FragmentToken3205 | FragmentToken3206;
