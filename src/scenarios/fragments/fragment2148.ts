import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2146 } from "./fragment2146";
import type { FragmentToken2147 } from "./fragment2147";

export const FRAGMENT_2148 = gql(`
  fragment Fragment2148 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult2148 = ResultOf<typeof FRAGMENT_2148>;
type FragmentSelf2148 = NonNullable<FragmentResult2148>;

export type FragmentToken2148 =
  | FragmentSelf2148["__typename"]
  | FragmentSelf2148["typenameHint"] | FragmentToken2146 | FragmentToken2147;
