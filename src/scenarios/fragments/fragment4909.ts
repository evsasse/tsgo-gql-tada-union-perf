import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4907 } from "./fragment4907";
import type { FragmentToken4908 } from "./fragment4908";

export const FRAGMENT_4909 = gql(`
  fragment Fragment4909 on Member148 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_148
    memberCount_148
    memberMetric_148
  }
`);

type FragmentResult4909 = ResultOf<typeof FRAGMENT_4909>;
type FragmentSelf4909 = NonNullable<FragmentResult4909>;

export type FragmentToken4909 =
  | FragmentSelf4909["__typename"]
  | FragmentSelf4909["typenameHint"] | FragmentToken4907 | FragmentToken4908;
