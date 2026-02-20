import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2445 } from "./fragment2445";
import type { FragmentToken2446 } from "./fragment2446";

export const FRAGMENT_2447 = gql(`
  fragment Fragment2447 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult2447 = ResultOf<typeof FRAGMENT_2447>;
type FragmentSelf2447 = NonNullable<FragmentResult2447>;

export type FragmentToken2447 =
  | FragmentSelf2447["__typename"]
  | FragmentSelf2447["typenameHint"] | FragmentToken2445 | FragmentToken2446;
