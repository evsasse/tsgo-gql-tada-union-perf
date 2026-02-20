import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2280 } from "./fragment2280";
import type { FragmentToken2281 } from "./fragment2281";

export const FRAGMENT_2282 = gql(`
  fragment Fragment2282 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult2282 = ResultOf<typeof FRAGMENT_2282>;
type FragmentSelf2282 = NonNullable<FragmentResult2282>;

export type FragmentToken2282 =
  | FragmentSelf2282["__typename"]
  | FragmentSelf2282["typenameHint"] | FragmentToken2280 | FragmentToken2281;
