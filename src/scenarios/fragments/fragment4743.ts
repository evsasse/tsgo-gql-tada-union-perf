import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4741 } from "./fragment4741";
import type { FragmentToken4742 } from "./fragment4742";

export const FRAGMENT_4743 = gql(`
  fragment Fragment4743 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult4743 = ResultOf<typeof FRAGMENT_4743>;
type FragmentSelf4743 = NonNullable<FragmentResult4743>;

export type FragmentToken4743 =
  | FragmentSelf4743["__typename"]
  | FragmentSelf4743["typenameHint"] | FragmentToken4741 | FragmentToken4742;
