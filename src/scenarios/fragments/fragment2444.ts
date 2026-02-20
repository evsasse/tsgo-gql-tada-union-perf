import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2442 } from "./fragment2442";
import type { FragmentToken2443 } from "./fragment2443";

export const FRAGMENT_2444 = gql(`
  fragment Fragment2444 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult2444 = ResultOf<typeof FRAGMENT_2444>;
type FragmentSelf2444 = NonNullable<FragmentResult2444>;

export type FragmentToken2444 =
  | FragmentSelf2444["__typename"]
  | FragmentSelf2444["typenameHint"] | FragmentToken2442 | FragmentToken2443;
