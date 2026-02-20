import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2153 } from "./fragment2153";
import type { FragmentToken2154 } from "./fragment2154";

export const FRAGMENT_2155 = gql(`
  fragment Fragment2155 on Member194 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_194
    memberCount_194
    memberMetric_194
  }
`);

type FragmentResult2155 = ResultOf<typeof FRAGMENT_2155>;
type FragmentSelf2155 = NonNullable<FragmentResult2155>;

export type FragmentToken2155 =
  | FragmentSelf2155["__typename"]
  | FragmentSelf2155["typenameHint"] | FragmentToken2153 | FragmentToken2154;
