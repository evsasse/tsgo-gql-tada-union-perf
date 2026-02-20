import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4109 } from "./fragment4109";
import type { FragmentToken4110 } from "./fragment4110";

export const FRAGMENT_4111 = gql(`
  fragment Fragment4111 on Member190 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_190
    memberCount_190
    memberMetric_190
  }
`);

type FragmentResult4111 = ResultOf<typeof FRAGMENT_4111>;
type FragmentSelf4111 = NonNullable<FragmentResult4111>;

export type FragmentToken4111 =
  | FragmentSelf4111["__typename"]
  | FragmentSelf4111["typenameHint"] | FragmentToken4109 | FragmentToken4110;
