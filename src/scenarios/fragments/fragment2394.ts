import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2392 } from "./fragment2392";
import type { FragmentToken2393 } from "./fragment2393";

export const FRAGMENT_2394 = gql(`
  fragment Fragment2394 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult2394 = ResultOf<typeof FRAGMENT_2394>;
type FragmentSelf2394 = NonNullable<FragmentResult2394>;

export type FragmentToken2394 =
  | FragmentSelf2394["__typename"]
  | FragmentSelf2394["typenameHint"] | FragmentToken2392 | FragmentToken2393;
