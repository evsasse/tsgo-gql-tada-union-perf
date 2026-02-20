import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2172 } from "./fragment2172";
import type { FragmentToken2173 } from "./fragment2173";

export const FRAGMENT_2174 = gql(`
  fragment Fragment2174 on Member213 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_213
    memberCount_213
    memberMetric_213
  }
`);

type FragmentResult2174 = ResultOf<typeof FRAGMENT_2174>;
type FragmentSelf2174 = NonNullable<FragmentResult2174>;

export type FragmentToken2174 =
  | FragmentSelf2174["__typename"]
  | FragmentSelf2174["typenameHint"] | FragmentToken2172 | FragmentToken2173;
