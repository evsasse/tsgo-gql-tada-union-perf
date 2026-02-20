import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2551 } from "./fragment2551";
import type { FragmentToken2552 } from "./fragment2552";

export const FRAGMENT_2553 = gql(`
  fragment Fragment2553 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult2553 = ResultOf<typeof FRAGMENT_2553>;
type FragmentSelf2553 = NonNullable<FragmentResult2553>;

export type FragmentToken2553 =
  | FragmentSelf2553["__typename"]
  | FragmentSelf2553["typenameHint"] | FragmentToken2551 | FragmentToken2552;
