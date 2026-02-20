import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken701 } from "./fragment701";
import type { FragmentToken702 } from "./fragment702";

export const FRAGMENT_703 = gql(`
  fragment Fragment703 on Member142 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_142
    memberCount_142
    memberMetric_142
  }
`);

type FragmentResult703 = ResultOf<typeof FRAGMENT_703>;
type FragmentSelf703 = NonNullable<FragmentResult703>;

export type FragmentToken703 =
  | FragmentSelf703["__typename"]
  | FragmentSelf703["typenameHint"] | FragmentToken701 | FragmentToken702;
