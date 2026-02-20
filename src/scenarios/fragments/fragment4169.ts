import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4167 } from "./fragment4167";
import type { FragmentToken4168 } from "./fragment4168";

export const FRAGMENT_4169 = gql(`
  fragment Fragment4169 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult4169 = ResultOf<typeof FRAGMENT_4169>;
type FragmentSelf4169 = NonNullable<FragmentResult4169>;

export type FragmentToken4169 =
  | FragmentSelf4169["__typename"]
  | FragmentSelf4169["typenameHint"] | FragmentToken4167 | FragmentToken4168;
