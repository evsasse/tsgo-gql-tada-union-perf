import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4076 } from "./fragment4076";
import type { FragmentToken4077 } from "./fragment4077";

export const FRAGMENT_4078 = gql(`
  fragment Fragment4078 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult4078 = ResultOf<typeof FRAGMENT_4078>;
type FragmentSelf4078 = NonNullable<FragmentResult4078>;

export type FragmentToken4078 =
  | FragmentSelf4078["__typename"]
  | FragmentSelf4078["typenameHint"] | FragmentToken4076 | FragmentToken4077;
