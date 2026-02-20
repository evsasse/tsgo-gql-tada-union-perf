import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4114 } from "./fragment4114";
import type { FragmentToken4115 } from "./fragment4115";

export const FRAGMENT_4116 = gql(`
  fragment Fragment4116 on Member195 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_195
    memberCount_195
    memberMetric_195
  }
`);

type FragmentResult4116 = ResultOf<typeof FRAGMENT_4116>;
type FragmentSelf4116 = NonNullable<FragmentResult4116>;

export type FragmentToken4116 =
  | FragmentSelf4116["__typename"]
  | FragmentSelf4116["typenameHint"] | FragmentToken4114 | FragmentToken4115;
