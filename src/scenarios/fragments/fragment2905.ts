import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2903 } from "./fragment2903";
import type { FragmentToken2904 } from "./fragment2904";

export const FRAGMENT_2905 = gql(`
  fragment Fragment2905 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult2905 = ResultOf<typeof FRAGMENT_2905>;
type FragmentSelf2905 = NonNullable<FragmentResult2905>;

export type FragmentToken2905 =
  | FragmentSelf2905["__typename"]
  | FragmentSelf2905["typenameHint"] | FragmentToken2903 | FragmentToken2904;
