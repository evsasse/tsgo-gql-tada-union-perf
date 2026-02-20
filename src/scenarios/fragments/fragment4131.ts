import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4129 } from "./fragment4129";
import type { FragmentToken4130 } from "./fragment4130";

export const FRAGMENT_4131 = gql(`
  fragment Fragment4131 on Member210 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_210
    memberCount_210
    memberMetric_210
  }
`);

type FragmentResult4131 = ResultOf<typeof FRAGMENT_4131>;
type FragmentSelf4131 = NonNullable<FragmentResult4131>;

export type FragmentToken4131 =
  | FragmentSelf4131["__typename"]
  | FragmentSelf4131["typenameHint"] | FragmentToken4129 | FragmentToken4130;
