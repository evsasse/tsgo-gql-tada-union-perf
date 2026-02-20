import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2626 } from "./fragment2626";
import type { FragmentToken2627 } from "./fragment2627";

export const FRAGMENT_2628 = gql(`
  fragment Fragment2628 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult2628 = ResultOf<typeof FRAGMENT_2628>;
type FragmentSelf2628 = NonNullable<FragmentResult2628>;

export type FragmentToken2628 =
  | FragmentSelf2628["__typename"]
  | FragmentSelf2628["typenameHint"] | FragmentToken2626 | FragmentToken2627;
