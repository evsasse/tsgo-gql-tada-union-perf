import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2145 } from "./fragment2145";
import type { FragmentToken2146 } from "./fragment2146";

export const FRAGMENT_2147 = gql(`
  fragment Fragment2147 on Member186 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_186
    memberCount_186
    memberMetric_186
  }
`);

type FragmentResult2147 = ResultOf<typeof FRAGMENT_2147>;
type FragmentSelf2147 = NonNullable<FragmentResult2147>;

export type FragmentToken2147 =
  | FragmentSelf2147["__typename"]
  | FragmentSelf2147["typenameHint"] | FragmentToken2145 | FragmentToken2146;
