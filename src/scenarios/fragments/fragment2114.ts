import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2112 } from "./fragment2112";
import type { FragmentToken2113 } from "./fragment2113";

export const FRAGMENT_2114 = gql(`
  fragment Fragment2114 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult2114 = ResultOf<typeof FRAGMENT_2114>;
type FragmentSelf2114 = NonNullable<FragmentResult2114>;

export type FragmentToken2114 =
  | FragmentSelf2114["__typename"]
  | FragmentSelf2114["typenameHint"] | FragmentToken2112 | FragmentToken2113;
