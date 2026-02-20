import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2630 } from "./fragment2630";
import type { FragmentToken2631 } from "./fragment2631";

export const FRAGMENT_2632 = gql(`
  fragment Fragment2632 on Member111 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_111
    memberCount_111
    memberMetric_111
  }
`);

type FragmentResult2632 = ResultOf<typeof FRAGMENT_2632>;
type FragmentSelf2632 = NonNullable<FragmentResult2632>;

export type FragmentToken2632 =
  | FragmentSelf2632["__typename"]
  | FragmentSelf2632["typenameHint"] | FragmentToken2630 | FragmentToken2631;
