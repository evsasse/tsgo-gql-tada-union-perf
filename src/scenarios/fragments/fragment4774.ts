import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4772 } from "./fragment4772";
import type { FragmentToken4773 } from "./fragment4773";

export const FRAGMENT_4774 = gql(`
  fragment Fragment4774 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult4774 = ResultOf<typeof FRAGMENT_4774>;
type FragmentSelf4774 = NonNullable<FragmentResult4774>;

export type FragmentToken4774 =
  | FragmentSelf4774["__typename"]
  | FragmentSelf4774["typenameHint"] | FragmentToken4772 | FragmentToken4773;
