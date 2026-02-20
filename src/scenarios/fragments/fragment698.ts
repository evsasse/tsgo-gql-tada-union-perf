import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken696 } from "./fragment696";
import type { FragmentToken697 } from "./fragment697";

export const FRAGMENT_698 = gql(`
  fragment Fragment698 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult698 = ResultOf<typeof FRAGMENT_698>;
type FragmentSelf698 = NonNullable<FragmentResult698>;

export type FragmentToken698 =
  | FragmentSelf698["__typename"]
  | FragmentSelf698["typenameHint"] | FragmentToken696 | FragmentToken697;
