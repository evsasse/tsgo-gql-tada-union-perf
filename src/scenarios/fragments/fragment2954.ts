import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2952 } from "./fragment2952";
import type { FragmentToken2953 } from "./fragment2953";

export const FRAGMENT_2954 = gql(`
  fragment Fragment2954 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult2954 = ResultOf<typeof FRAGMENT_2954>;
type FragmentSelf2954 = NonNullable<FragmentResult2954>;

export type FragmentToken2954 =
  | FragmentSelf2954["__typename"]
  | FragmentSelf2954["typenameHint"] | FragmentToken2952 | FragmentToken2953;
