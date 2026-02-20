import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2129 } from "./fragment2129";
import type { FragmentToken2130 } from "./fragment2130";

export const FRAGMENT_2131 = gql(`
  fragment Fragment2131 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult2131 = ResultOf<typeof FRAGMENT_2131>;
type FragmentSelf2131 = NonNullable<FragmentResult2131>;

export type FragmentToken2131 =
  | FragmentSelf2131["__typename"]
  | FragmentSelf2131["typenameHint"] | FragmentToken2129 | FragmentToken2130;
