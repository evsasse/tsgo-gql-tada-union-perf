import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4094 } from "./fragment4094";
import type { FragmentToken4095 } from "./fragment4095";

export const FRAGMENT_4096 = gql(`
  fragment Fragment4096 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult4096 = ResultOf<typeof FRAGMENT_4096>;
type FragmentSelf4096 = NonNullable<FragmentResult4096>;

export type FragmentToken4096 =
  | FragmentSelf4096["__typename"]
  | FragmentSelf4096["typenameHint"] | FragmentToken4094 | FragmentToken4095;
