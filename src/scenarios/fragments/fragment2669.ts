import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2667 } from "./fragment2667";
import type { FragmentToken2668 } from "./fragment2668";

export const FRAGMENT_2669 = gql(`
  fragment Fragment2669 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult2669 = ResultOf<typeof FRAGMENT_2669>;
type FragmentSelf2669 = NonNullable<FragmentResult2669>;

export type FragmentToken2669 =
  | FragmentSelf2669["__typename"]
  | FragmentSelf2669["typenameHint"] | FragmentToken2667 | FragmentToken2668;
