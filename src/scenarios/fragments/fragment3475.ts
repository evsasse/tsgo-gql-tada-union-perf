import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3473 } from "./fragment3473";
import type { FragmentToken3474 } from "./fragment3474";

export const FRAGMENT_3475 = gql(`
  fragment Fragment3475 on Member114 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_114
    memberCount_114
    memberMetric_114
  }
`);

type FragmentResult3475 = ResultOf<typeof FRAGMENT_3475>;
type FragmentSelf3475 = NonNullable<FragmentResult3475>;

export type FragmentToken3475 =
  | FragmentSelf3475["__typename"]
  | FragmentSelf3475["typenameHint"] | FragmentToken3473 | FragmentToken3474;
