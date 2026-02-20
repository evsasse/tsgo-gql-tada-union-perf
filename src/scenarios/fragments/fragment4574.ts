import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4572 } from "./fragment4572";
import type { FragmentToken4573 } from "./fragment4573";

export const FRAGMENT_4574 = gql(`
  fragment Fragment4574 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult4574 = ResultOf<typeof FRAGMENT_4574>;
type FragmentSelf4574 = NonNullable<FragmentResult4574>;

export type FragmentToken4574 =
  | FragmentSelf4574["__typename"]
  | FragmentSelf4574["typenameHint"] | FragmentToken4572 | FragmentToken4573;
