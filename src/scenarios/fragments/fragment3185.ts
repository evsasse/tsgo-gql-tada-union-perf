import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3183 } from "./fragment3183";
import type { FragmentToken3184 } from "./fragment3184";

export const FRAGMENT_3185 = gql(`
  fragment Fragment3185 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult3185 = ResultOf<typeof FRAGMENT_3185>;
type FragmentSelf3185 = NonNullable<FragmentResult3185>;

export type FragmentToken3185 =
  | FragmentSelf3185["__typename"]
  | FragmentSelf3185["typenameHint"] | FragmentToken3183 | FragmentToken3184;
