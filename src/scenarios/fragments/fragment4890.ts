import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4888 } from "./fragment4888";
import type { FragmentToken4889 } from "./fragment4889";

export const FRAGMENT_4890 = gql(`
  fragment Fragment4890 on Member129 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_129
    memberCount_129
    memberMetric_129
  }
`);

type FragmentResult4890 = ResultOf<typeof FRAGMENT_4890>;
type FragmentSelf4890 = NonNullable<FragmentResult4890>;

export type FragmentToken4890 =
  | FragmentSelf4890["__typename"]
  | FragmentSelf4890["typenameHint"] | FragmentToken4888 | FragmentToken4889;
