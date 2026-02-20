import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4166 } from "./fragment4166";
import type { FragmentToken4167 } from "./fragment4167";

export const FRAGMENT_4168 = gql(`
  fragment Fragment4168 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult4168 = ResultOf<typeof FRAGMENT_4168>;
type FragmentSelf4168 = NonNullable<FragmentResult4168>;

export type FragmentToken4168 =
  | FragmentSelf4168["__typename"]
  | FragmentSelf4168["typenameHint"] | FragmentToken4166 | FragmentToken4167;
