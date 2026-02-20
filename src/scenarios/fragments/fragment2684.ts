import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2682 } from "./fragment2682";
import type { FragmentToken2683 } from "./fragment2683";

export const FRAGMENT_2684 = gql(`
  fragment Fragment2684 on Member163 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_163
    memberCount_163
    memberMetric_163
  }
`);

type FragmentResult2684 = ResultOf<typeof FRAGMENT_2684>;
type FragmentSelf2684 = NonNullable<FragmentResult2684>;

export type FragmentToken2684 =
  | FragmentSelf2684["__typename"]
  | FragmentSelf2684["typenameHint"] | FragmentToken2682 | FragmentToken2683;
