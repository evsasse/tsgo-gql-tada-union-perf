import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4052 } from "./fragment4052";
import type { FragmentToken4053 } from "./fragment4053";

export const FRAGMENT_4054 = gql(`
  fragment Fragment4054 on Member133 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_133
    memberCount_133
    memberMetric_133
  }
`);

type FragmentResult4054 = ResultOf<typeof FRAGMENT_4054>;
type FragmentSelf4054 = NonNullable<FragmentResult4054>;

export type FragmentToken4054 =
  | FragmentSelf4054["__typename"]
  | FragmentSelf4054["typenameHint"] | FragmentToken4052 | FragmentToken4053;
