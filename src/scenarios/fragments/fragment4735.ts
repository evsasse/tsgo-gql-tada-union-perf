import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4733 } from "./fragment4733";
import type { FragmentToken4734 } from "./fragment4734";

export const FRAGMENT_4735 = gql(`
  fragment Fragment4735 on Member254 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_254
    memberCount_254
    memberMetric_254
  }
`);

type FragmentResult4735 = ResultOf<typeof FRAGMENT_4735>;
type FragmentSelf4735 = NonNullable<FragmentResult4735>;

export type FragmentToken4735 =
  | FragmentSelf4735["__typename"]
  | FragmentSelf4735["typenameHint"] | FragmentToken4733 | FragmentToken4734;
