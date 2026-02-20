import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken167 } from "./fragment167";
import type { FragmentToken168 } from "./fragment168";

export const FRAGMENT_169 = gql(`
  fragment Fragment169 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult169 = ResultOf<typeof FRAGMENT_169>;
type FragmentSelf169 = NonNullable<FragmentResult169>;

export type FragmentToken169 =
  | FragmentSelf169["__typename"]
  | FragmentSelf169["typenameHint"] | FragmentToken167 | FragmentToken168;
