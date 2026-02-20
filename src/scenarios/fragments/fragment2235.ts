import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2233 } from "./fragment2233";
import type { FragmentToken2234 } from "./fragment2234";

export const FRAGMENT_2235 = gql(`
  fragment Fragment2235 on Member274 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_274
    memberCount_274
    memberMetric_274
  }
`);

type FragmentResult2235 = ResultOf<typeof FRAGMENT_2235>;
type FragmentSelf2235 = NonNullable<FragmentResult2235>;

export type FragmentToken2235 =
  | FragmentSelf2235["__typename"]
  | FragmentSelf2235["typenameHint"] | FragmentToken2233 | FragmentToken2234;
