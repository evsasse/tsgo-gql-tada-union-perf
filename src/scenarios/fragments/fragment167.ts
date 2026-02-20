import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken165 } from "./fragment165";
import type { FragmentToken166 } from "./fragment166";

export const FRAGMENT_167 = gql(`
  fragment Fragment167 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult167 = ResultOf<typeof FRAGMENT_167>;
type FragmentSelf167 = NonNullable<FragmentResult167>;

export type FragmentToken167 =
  | FragmentSelf167["__typename"]
  | FragmentSelf167["typenameHint"] | FragmentToken165 | FragmentToken166;
