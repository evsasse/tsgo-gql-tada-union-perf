import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2447 } from "./fragment2447";
import type { FragmentToken2448 } from "./fragment2448";

export const FRAGMENT_2449 = gql(`
  fragment Fragment2449 on Member208 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_208
    memberCount_208
    memberMetric_208
  }
`);

type FragmentResult2449 = ResultOf<typeof FRAGMENT_2449>;
type FragmentSelf2449 = NonNullable<FragmentResult2449>;

export type FragmentToken2449 =
  | FragmentSelf2449["__typename"]
  | FragmentSelf2449["typenameHint"] | FragmentToken2447 | FragmentToken2448;
