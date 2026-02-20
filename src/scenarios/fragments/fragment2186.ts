import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2184 } from "./fragment2184";
import type { FragmentToken2185 } from "./fragment2185";

export const FRAGMENT_2186 = gql(`
  fragment Fragment2186 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult2186 = ResultOf<typeof FRAGMENT_2186>;
type FragmentSelf2186 = NonNullable<FragmentResult2186>;

export type FragmentToken2186 =
  | FragmentSelf2186["__typename"]
  | FragmentSelf2186["typenameHint"] | FragmentToken2184 | FragmentToken2185;
