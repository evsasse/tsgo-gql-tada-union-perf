import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4093 } from "./fragment4093";
import type { FragmentToken4094 } from "./fragment4094";

export const FRAGMENT_4095 = gql(`
  fragment Fragment4095 on Member174 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_174
    memberCount_174
    memberMetric_174
  }
`);

type FragmentResult4095 = ResultOf<typeof FRAGMENT_4095>;
type FragmentSelf4095 = NonNullable<FragmentResult4095>;

export type FragmentToken4095 =
  | FragmentSelf4095["__typename"]
  | FragmentSelf4095["typenameHint"] | FragmentToken4093 | FragmentToken4094;
