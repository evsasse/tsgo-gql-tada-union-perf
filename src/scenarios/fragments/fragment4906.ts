import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4904 } from "./fragment4904";
import type { FragmentToken4905 } from "./fragment4905";

export const FRAGMENT_4906 = gql(`
  fragment Fragment4906 on Member145 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_145
    memberCount_145
    memberMetric_145
  }
`);

type FragmentResult4906 = ResultOf<typeof FRAGMENT_4906>;
type FragmentSelf4906 = NonNullable<FragmentResult4906>;

export type FragmentToken4906 =
  | FragmentSelf4906["__typename"]
  | FragmentSelf4906["typenameHint"] | FragmentToken4904 | FragmentToken4905;
