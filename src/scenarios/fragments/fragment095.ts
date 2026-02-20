import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken093 } from "./fragment093";
import type { FragmentToken094 } from "./fragment094";

export const FRAGMENT_095 = gql(`
  fragment Fragment095 on Member94 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_94
    memberCount_94
    memberMetric_94
  }
`);

type FragmentResult095 = ResultOf<typeof FRAGMENT_095>;
type FragmentSelf095 = NonNullable<FragmentResult095>;

export type FragmentToken095 =
  | FragmentSelf095["__typename"]
  | FragmentSelf095["typenameHint"] | FragmentToken093 | FragmentToken094;
