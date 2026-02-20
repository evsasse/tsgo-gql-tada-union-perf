import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2592 } from "./fragment2592";
import type { FragmentToken2593 } from "./fragment2593";

export const FRAGMENT_2594 = gql(`
  fragment Fragment2594 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult2594 = ResultOf<typeof FRAGMENT_2594>;
type FragmentSelf2594 = NonNullable<FragmentResult2594>;

export type FragmentToken2594 =
  | FragmentSelf2594["__typename"]
  | FragmentSelf2594["typenameHint"] | FragmentToken2592 | FragmentToken2593;
