import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2158 } from "./fragment2158";
import type { FragmentToken2159 } from "./fragment2159";

export const FRAGMENT_2160 = gql(`
  fragment Fragment2160 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult2160 = ResultOf<typeof FRAGMENT_2160>;
type FragmentSelf2160 = NonNullable<FragmentResult2160>;

export type FragmentToken2160 =
  | FragmentSelf2160["__typename"]
  | FragmentSelf2160["typenameHint"] | FragmentToken2158 | FragmentToken2159;
