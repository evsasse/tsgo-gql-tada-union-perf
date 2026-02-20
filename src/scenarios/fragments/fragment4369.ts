import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4367 } from "./fragment4367";
import type { FragmentToken4368 } from "./fragment4368";

export const FRAGMENT_4369 = gql(`
  fragment Fragment4369 on Member168 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_168
    memberCount_168
    memberMetric_168
  }
`);

type FragmentResult4369 = ResultOf<typeof FRAGMENT_4369>;
type FragmentSelf4369 = NonNullable<FragmentResult4369>;

export type FragmentToken4369 =
  | FragmentSelf4369["__typename"]
  | FragmentSelf4369["typenameHint"] | FragmentToken4367 | FragmentToken4368;
