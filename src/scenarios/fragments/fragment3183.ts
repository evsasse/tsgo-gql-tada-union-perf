import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3181 } from "./fragment3181";
import type { FragmentToken3182 } from "./fragment3182";

export const FRAGMENT_3183 = gql(`
  fragment Fragment3183 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult3183 = ResultOf<typeof FRAGMENT_3183>;
type FragmentSelf3183 = NonNullable<FragmentResult3183>;

export type FragmentToken3183 =
  | FragmentSelf3183["__typename"]
  | FragmentSelf3183["typenameHint"] | FragmentToken3181 | FragmentToken3182;
