import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2091 } from "./fragment2091";
import type { FragmentToken2092 } from "./fragment2092";

export const FRAGMENT_2093 = gql(`
  fragment Fragment2093 on Member132 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_132
    memberCount_132
    memberMetric_132
  }
`);

type FragmentResult2093 = ResultOf<typeof FRAGMENT_2093>;
type FragmentSelf2093 = NonNullable<FragmentResult2093>;

export type FragmentToken2093 =
  | FragmentSelf2093["__typename"]
  | FragmentSelf2093["typenameHint"] | FragmentToken2091 | FragmentToken2092;
