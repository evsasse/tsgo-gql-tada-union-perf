import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3692 } from "./fragment3692";
import type { FragmentToken3693 } from "./fragment3693";

export const FRAGMENT_3694 = gql(`
  fragment Fragment3694 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult3694 = ResultOf<typeof FRAGMENT_3694>;
type FragmentSelf3694 = NonNullable<FragmentResult3694>;

export type FragmentToken3694 =
  | FragmentSelf3694["__typename"]
  | FragmentSelf3694["typenameHint"] | FragmentToken3692 | FragmentToken3693;
