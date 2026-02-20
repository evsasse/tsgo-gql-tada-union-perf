import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4138 } from "./fragment4138";
import type { FragmentToken4139 } from "./fragment4139";

export const FRAGMENT_4140 = gql(`
  fragment Fragment4140 on Member219 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_219
    memberCount_219
    memberMetric_219
  }
`);

type FragmentResult4140 = ResultOf<typeof FRAGMENT_4140>;
type FragmentSelf4140 = NonNullable<FragmentResult4140>;

export type FragmentToken4140 =
  | FragmentSelf4140["__typename"]
  | FragmentSelf4140["typenameHint"] | FragmentToken4138 | FragmentToken4139;
