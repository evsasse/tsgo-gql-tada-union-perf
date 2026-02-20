import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken941 } from "./fragment941";
import type { FragmentToken942 } from "./fragment942";

export const FRAGMENT_943 = gql(`
  fragment Fragment943 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult943 = ResultOf<typeof FRAGMENT_943>;
type FragmentSelf943 = NonNullable<FragmentResult943>;

export type FragmentToken943 =
  | FragmentSelf943["__typename"]
  | FragmentSelf943["typenameHint"] | FragmentToken941 | FragmentToken942;
