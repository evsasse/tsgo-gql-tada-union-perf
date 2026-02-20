import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2582 } from "./fragment2582";
import type { FragmentToken2583 } from "./fragment2583";

export const FRAGMENT_2584 = gql(`
  fragment Fragment2584 on Member63 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_63
    memberCount_63
    memberMetric_63
  }
`);

type FragmentResult2584 = ResultOf<typeof FRAGMENT_2584>;
type FragmentSelf2584 = NonNullable<FragmentResult2584>;

export type FragmentToken2584 =
  | FragmentSelf2584["__typename"]
  | FragmentSelf2584["typenameHint"] | FragmentToken2582 | FragmentToken2583;
