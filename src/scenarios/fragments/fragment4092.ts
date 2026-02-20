import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4090 } from "./fragment4090";
import type { FragmentToken4091 } from "./fragment4091";

export const FRAGMENT_4092 = gql(`
  fragment Fragment4092 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult4092 = ResultOf<typeof FRAGMENT_4092>;
type FragmentSelf4092 = NonNullable<FragmentResult4092>;

export type FragmentToken4092 =
  | FragmentSelf4092["__typename"]
  | FragmentSelf4092["typenameHint"] | FragmentToken4090 | FragmentToken4091;
