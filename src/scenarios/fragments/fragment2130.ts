import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2128 } from "./fragment2128";
import type { FragmentToken2129 } from "./fragment2129";

export const FRAGMENT_2130 = gql(`
  fragment Fragment2130 on Member169 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_169
    memberCount_169
    memberMetric_169
  }
`);

type FragmentResult2130 = ResultOf<typeof FRAGMENT_2130>;
type FragmentSelf2130 = NonNullable<FragmentResult2130>;

export type FragmentToken2130 =
  | FragmentSelf2130["__typename"]
  | FragmentSelf2130["typenameHint"] | FragmentToken2128 | FragmentToken2129;
