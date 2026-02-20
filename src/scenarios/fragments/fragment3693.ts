import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3691 } from "./fragment3691";
import type { FragmentToken3692 } from "./fragment3692";

export const FRAGMENT_3693 = gql(`
  fragment Fragment3693 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult3693 = ResultOf<typeof FRAGMENT_3693>;
type FragmentSelf3693 = NonNullable<FragmentResult3693>;

export type FragmentToken3693 =
  | FragmentSelf3693["__typename"]
  | FragmentSelf3693["typenameHint"] | FragmentToken3691 | FragmentToken3692;
