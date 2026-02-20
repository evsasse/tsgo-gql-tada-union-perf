import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2780 } from "./fragment2780";
import type { FragmentToken2781 } from "./fragment2781";

export const FRAGMENT_2782 = gql(`
  fragment Fragment2782 on Member261 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_261
    memberCount_261
    memberMetric_261
  }
`);

type FragmentResult2782 = ResultOf<typeof FRAGMENT_2782>;
type FragmentSelf2782 = NonNullable<FragmentResult2782>;

export type FragmentToken2782 =
  | FragmentSelf2782["__typename"]
  | FragmentSelf2782["typenameHint"] | FragmentToken2780 | FragmentToken2781;
