import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2152 } from "./fragment2152";
import type { FragmentToken2153 } from "./fragment2153";

export const FRAGMENT_2154 = gql(`
  fragment Fragment2154 on Member193 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_193
    memberCount_193
    memberMetric_193
  }
`);

type FragmentResult2154 = ResultOf<typeof FRAGMENT_2154>;
type FragmentSelf2154 = NonNullable<FragmentResult2154>;

export type FragmentToken2154 =
  | FragmentSelf2154["__typename"]
  | FragmentSelf2154["typenameHint"] | FragmentToken2152 | FragmentToken2153;
