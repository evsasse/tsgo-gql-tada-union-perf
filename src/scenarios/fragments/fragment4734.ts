import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4732 } from "./fragment4732";
import type { FragmentToken4733 } from "./fragment4733";

export const FRAGMENT_4734 = gql(`
  fragment Fragment4734 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult4734 = ResultOf<typeof FRAGMENT_4734>;
type FragmentSelf4734 = NonNullable<FragmentResult4734>;

export type FragmentToken4734 =
  | FragmentSelf4734["__typename"]
  | FragmentSelf4734["typenameHint"] | FragmentToken4732 | FragmentToken4733;
