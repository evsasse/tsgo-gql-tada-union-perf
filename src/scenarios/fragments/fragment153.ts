import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken151 } from "./fragment151";
import type { FragmentToken152 } from "./fragment152";

export const FRAGMENT_153 = gql(`
  fragment Fragment153 on Member152 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_152
    memberCount_152
    memberMetric_152
  }
`);

type FragmentResult153 = ResultOf<typeof FRAGMENT_153>;
type FragmentSelf153 = NonNullable<FragmentResult153>;

export type FragmentToken153 =
  | FragmentSelf153["__typename"]
  | FragmentSelf153["typenameHint"] | FragmentToken151 | FragmentToken152;
