import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2910 } from "./fragment2910";
import type { FragmentToken2911 } from "./fragment2911";

export const FRAGMENT_2912 = gql(`
  fragment Fragment2912 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult2912 = ResultOf<typeof FRAGMENT_2912>;
type FragmentSelf2912 = NonNullable<FragmentResult2912>;

export type FragmentToken2912 =
  | FragmentSelf2912["__typename"]
  | FragmentSelf2912["typenameHint"] | FragmentToken2910 | FragmentToken2911;
