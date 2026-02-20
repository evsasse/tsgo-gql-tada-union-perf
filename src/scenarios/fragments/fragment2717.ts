import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2715 } from "./fragment2715";
import type { FragmentToken2716 } from "./fragment2716";

export const FRAGMENT_2717 = gql(`
  fragment Fragment2717 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult2717 = ResultOf<typeof FRAGMENT_2717>;
type FragmentSelf2717 = NonNullable<FragmentResult2717>;

export type FragmentToken2717 =
  | FragmentSelf2717["__typename"]
  | FragmentSelf2717["typenameHint"] | FragmentToken2715 | FragmentToken2716;
