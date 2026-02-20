import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2860 } from "./fragment2860";
import type { FragmentToken2861 } from "./fragment2861";

export const FRAGMENT_2862 = gql(`
  fragment Fragment2862 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult2862 = ResultOf<typeof FRAGMENT_2862>;
type FragmentSelf2862 = NonNullable<FragmentResult2862>;

export type FragmentToken2862 =
  | FragmentSelf2862["__typename"]
  | FragmentSelf2862["typenameHint"] | FragmentToken2860 | FragmentToken2861;
