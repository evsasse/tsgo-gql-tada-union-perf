import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2834 } from "./fragment2834";
import type { FragmentToken2835 } from "./fragment2835";

export const FRAGMENT_2836 = gql(`
  fragment Fragment2836 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult2836 = ResultOf<typeof FRAGMENT_2836>;
type FragmentSelf2836 = NonNullable<FragmentResult2836>;

export type FragmentToken2836 =
  | FragmentSelf2836["__typename"]
  | FragmentSelf2836["typenameHint"] | FragmentToken2834 | FragmentToken2835;
