import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4074 } from "./fragment4074";
import type { FragmentToken4075 } from "./fragment4075";

export const FRAGMENT_4076 = gql(`
  fragment Fragment4076 on Member155 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_155
    memberCount_155
    memberMetric_155
  }
`);

type FragmentResult4076 = ResultOf<typeof FRAGMENT_4076>;
type FragmentSelf4076 = NonNullable<FragmentResult4076>;

export type FragmentToken4076 =
  | FragmentSelf4076["__typename"]
  | FragmentSelf4076["typenameHint"] | FragmentToken4074 | FragmentToken4075;
