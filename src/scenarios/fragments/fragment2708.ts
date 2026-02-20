import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2706 } from "./fragment2706";
import type { FragmentToken2707 } from "./fragment2707";

export const FRAGMENT_2708 = gql(`
  fragment Fragment2708 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult2708 = ResultOf<typeof FRAGMENT_2708>;
type FragmentSelf2708 = NonNullable<FragmentResult2708>;

export type FragmentToken2708 =
  | FragmentSelf2708["__typename"]
  | FragmentSelf2708["typenameHint"] | FragmentToken2706 | FragmentToken2707;
