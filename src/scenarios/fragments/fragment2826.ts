import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2824 } from "./fragment2824";
import type { FragmentToken2825 } from "./fragment2825";

export const FRAGMENT_2826 = gql(`
  fragment Fragment2826 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult2826 = ResultOf<typeof FRAGMENT_2826>;
type FragmentSelf2826 = NonNullable<FragmentResult2826>;

export type FragmentToken2826 =
  | FragmentSelf2826["__typename"]
  | FragmentSelf2826["typenameHint"] | FragmentToken2824 | FragmentToken2825;
