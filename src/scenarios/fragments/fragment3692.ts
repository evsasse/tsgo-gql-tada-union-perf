import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3690 } from "./fragment3690";
import type { FragmentToken3691 } from "./fragment3691";

export const FRAGMENT_3692 = gql(`
  fragment Fragment3692 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult3692 = ResultOf<typeof FRAGMENT_3692>;
type FragmentSelf3692 = NonNullable<FragmentResult3692>;

export type FragmentToken3692 =
  | FragmentSelf3692["__typename"]
  | FragmentSelf3692["typenameHint"] | FragmentToken3690 | FragmentToken3691;
