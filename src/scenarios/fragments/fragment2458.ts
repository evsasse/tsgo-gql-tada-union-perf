import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2456 } from "./fragment2456";
import type { FragmentToken2457 } from "./fragment2457";

export const FRAGMENT_2458 = gql(`
  fragment Fragment2458 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult2458 = ResultOf<typeof FRAGMENT_2458>;
type FragmentSelf2458 = NonNullable<FragmentResult2458>;

export type FragmentToken2458 =
  | FragmentSelf2458["__typename"]
  | FragmentSelf2458["typenameHint"] | FragmentToken2456 | FragmentToken2457;
