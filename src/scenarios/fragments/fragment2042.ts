import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2040 } from "./fragment2040";
import type { FragmentToken2041 } from "./fragment2041";

export const FRAGMENT_2042 = gql(`
  fragment Fragment2042 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult2042 = ResultOf<typeof FRAGMENT_2042>;
type FragmentSelf2042 = NonNullable<FragmentResult2042>;

export type FragmentToken2042 =
  | FragmentSelf2042["__typename"]
  | FragmentSelf2042["typenameHint"] | FragmentToken2040 | FragmentToken2041;
