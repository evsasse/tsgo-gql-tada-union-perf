import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4075 } from "./fragment4075";
import type { FragmentToken4076 } from "./fragment4076";

export const FRAGMENT_4077 = gql(`
  fragment Fragment4077 on Member156 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_156
    memberCount_156
    memberMetric_156
  }
`);

type FragmentResult4077 = ResultOf<typeof FRAGMENT_4077>;
type FragmentSelf4077 = NonNullable<FragmentResult4077>;

export type FragmentToken4077 =
  | FragmentSelf4077["__typename"]
  | FragmentSelf4077["typenameHint"] | FragmentToken4075 | FragmentToken4076;
