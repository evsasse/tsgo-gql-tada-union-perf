import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2190 } from "./fragment2190";
import type { FragmentToken2191 } from "./fragment2191";

export const FRAGMENT_2192 = gql(`
  fragment Fragment2192 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult2192 = ResultOf<typeof FRAGMENT_2192>;
type FragmentSelf2192 = NonNullable<FragmentResult2192>;

export type FragmentToken2192 =
  | FragmentSelf2192["__typename"]
  | FragmentSelf2192["typenameHint"] | FragmentToken2190 | FragmentToken2191;
