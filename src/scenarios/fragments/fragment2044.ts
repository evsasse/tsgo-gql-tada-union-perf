import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2042 } from "./fragment2042";
import type { FragmentToken2043 } from "./fragment2043";

export const FRAGMENT_2044 = gql(`
  fragment Fragment2044 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult2044 = ResultOf<typeof FRAGMENT_2044>;
type FragmentSelf2044 = NonNullable<FragmentResult2044>;

export type FragmentToken2044 =
  | FragmentSelf2044["__typename"]
  | FragmentSelf2044["typenameHint"] | FragmentToken2042 | FragmentToken2043;
