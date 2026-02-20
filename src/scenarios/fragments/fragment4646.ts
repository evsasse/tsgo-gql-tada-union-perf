import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4644 } from "./fragment4644";
import type { FragmentToken4645 } from "./fragment4645";

export const FRAGMENT_4646 = gql(`
  fragment Fragment4646 on Member165 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_165
    memberCount_165
    memberMetric_165
  }
`);

type FragmentResult4646 = ResultOf<typeof FRAGMENT_4646>;
type FragmentSelf4646 = NonNullable<FragmentResult4646>;

export type FragmentToken4646 =
  | FragmentSelf4646["__typename"]
  | FragmentSelf4646["typenameHint"] | FragmentToken4644 | FragmentToken4645;
