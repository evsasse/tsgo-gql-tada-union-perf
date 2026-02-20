import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4601 } from "./fragment4601";
import type { FragmentToken4602 } from "./fragment4602";

export const FRAGMENT_4603 = gql(`
  fragment Fragment4603 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult4603 = ResultOf<typeof FRAGMENT_4603>;
type FragmentSelf4603 = NonNullable<FragmentResult4603>;

export type FragmentToken4603 =
  | FragmentSelf4603["__typename"]
  | FragmentSelf4603["typenameHint"] | FragmentToken4601 | FragmentToken4602;
