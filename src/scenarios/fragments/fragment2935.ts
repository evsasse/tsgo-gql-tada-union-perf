import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2933 } from "./fragment2933";
import type { FragmentToken2934 } from "./fragment2934";

export const FRAGMENT_2935 = gql(`
  fragment Fragment2935 on Member134 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_134
    memberCount_134
    memberMetric_134
  }
`);

type FragmentResult2935 = ResultOf<typeof FRAGMENT_2935>;
type FragmentSelf2935 = NonNullable<FragmentResult2935>;

export type FragmentToken2935 =
  | FragmentSelf2935["__typename"]
  | FragmentSelf2935["typenameHint"] | FragmentToken2933 | FragmentToken2934;
