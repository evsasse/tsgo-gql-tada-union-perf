import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2162 } from "./fragment2162";
import type { FragmentToken2163 } from "./fragment2163";

export const FRAGMENT_2164 = gql(`
  fragment Fragment2164 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult2164 = ResultOf<typeof FRAGMENT_2164>;
type FragmentSelf2164 = NonNullable<FragmentResult2164>;

export type FragmentToken2164 =
  | FragmentSelf2164["__typename"]
  | FragmentSelf2164["typenameHint"] | FragmentToken2162 | FragmentToken2163;
