import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4080 } from "./fragment4080";
import type { FragmentToken4081 } from "./fragment4081";

export const FRAGMENT_4082 = gql(`
  fragment Fragment4082 on Member161 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_161
    memberCount_161
    memberMetric_161
  }
`);

type FragmentResult4082 = ResultOf<typeof FRAGMENT_4082>;
type FragmentSelf4082 = NonNullable<FragmentResult4082>;

export type FragmentToken4082 =
  | FragmentSelf4082["__typename"]
  | FragmentSelf4082["typenameHint"] | FragmentToken4080 | FragmentToken4081;
