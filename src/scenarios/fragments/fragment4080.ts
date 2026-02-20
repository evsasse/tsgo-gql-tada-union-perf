import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4078 } from "./fragment4078";
import type { FragmentToken4079 } from "./fragment4079";

export const FRAGMENT_4080 = gql(`
  fragment Fragment4080 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult4080 = ResultOf<typeof FRAGMENT_4080>;
type FragmentSelf4080 = NonNullable<FragmentResult4080>;

export type FragmentToken4080 =
  | FragmentSelf4080["__typename"]
  | FragmentSelf4080["typenameHint"] | FragmentToken4078 | FragmentToken4079;
