import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2202 } from "./fragment2202";
import type { FragmentToken2203 } from "./fragment2203";

export const FRAGMENT_2204 = gql(`
  fragment Fragment2204 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult2204 = ResultOf<typeof FRAGMENT_2204>;
type FragmentSelf2204 = NonNullable<FragmentResult2204>;

export type FragmentToken2204 =
  | FragmentSelf2204["__typename"]
  | FragmentSelf2204["typenameHint"] | FragmentToken2202 | FragmentToken2203;
