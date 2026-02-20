import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4043 } from "./fragment4043";
import type { FragmentToken4044 } from "./fragment4044";

export const FRAGMENT_4045 = gql(`
  fragment Fragment4045 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult4045 = ResultOf<typeof FRAGMENT_4045>;
type FragmentSelf4045 = NonNullable<FragmentResult4045>;

export type FragmentToken4045 =
  | FragmentSelf4045["__typename"]
  | FragmentSelf4045["typenameHint"] | FragmentToken4043 | FragmentToken4044;
