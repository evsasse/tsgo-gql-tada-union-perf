import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2281 } from "./fragment2281";
import type { FragmentToken2282 } from "./fragment2282";

export const FRAGMENT_2283 = gql(`
  fragment Fragment2283 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult2283 = ResultOf<typeof FRAGMENT_2283>;
type FragmentSelf2283 = NonNullable<FragmentResult2283>;

export type FragmentToken2283 =
  | FragmentSelf2283["__typename"]
  | FragmentSelf2283["typenameHint"] | FragmentToken2281 | FragmentToken2282;
