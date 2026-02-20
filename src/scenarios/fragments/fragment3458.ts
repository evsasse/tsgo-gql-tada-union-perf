import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3456 } from "./fragment3456";
import type { FragmentToken3457 } from "./fragment3457";

export const FRAGMENT_3458 = gql(`
  fragment Fragment3458 on Member97 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_97
    memberCount_97
    memberMetric_97
  }
`);

type FragmentResult3458 = ResultOf<typeof FRAGMENT_3458>;
type FragmentSelf3458 = NonNullable<FragmentResult3458>;

export type FragmentToken3458 =
  | FragmentSelf3458["__typename"]
  | FragmentSelf3458["typenameHint"] | FragmentToken3456 | FragmentToken3457;
