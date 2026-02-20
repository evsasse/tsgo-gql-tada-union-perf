import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2823 } from "./fragment2823";
import type { FragmentToken2824 } from "./fragment2824";

export const FRAGMENT_2825 = gql(`
  fragment Fragment2825 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult2825 = ResultOf<typeof FRAGMENT_2825>;
type FragmentSelf2825 = NonNullable<FragmentResult2825>;

export type FragmentToken2825 =
  | FragmentSelf2825["__typename"]
  | FragmentSelf2825["typenameHint"] | FragmentToken2823 | FragmentToken2824;
