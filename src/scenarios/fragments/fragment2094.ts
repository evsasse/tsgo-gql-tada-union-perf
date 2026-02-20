import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2092 } from "./fragment2092";
import type { FragmentToken2093 } from "./fragment2093";

export const FRAGMENT_2094 = gql(`
  fragment Fragment2094 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult2094 = ResultOf<typeof FRAGMENT_2094>;
type FragmentSelf2094 = NonNullable<FragmentResult2094>;

export type FragmentToken2094 =
  | FragmentSelf2094["__typename"]
  | FragmentSelf2094["typenameHint"] | FragmentToken2092 | FragmentToken2093;
