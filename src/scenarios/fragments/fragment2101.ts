import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2099 } from "./fragment2099";
import type { FragmentToken2100 } from "./fragment2100";

export const FRAGMENT_2101 = gql(`
  fragment Fragment2101 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult2101 = ResultOf<typeof FRAGMENT_2101>;
type FragmentSelf2101 = NonNullable<FragmentResult2101>;

export type FragmentToken2101 =
  | FragmentSelf2101["__typename"]
  | FragmentSelf2101["typenameHint"] | FragmentToken2099 | FragmentToken2100;
