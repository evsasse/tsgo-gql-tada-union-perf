import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4916 } from "./fragment4916";
import type { FragmentToken4917 } from "./fragment4917";

export const FRAGMENT_4918 = gql(`
  fragment Fragment4918 on Member157 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_157
    memberCount_157
    memberMetric_157
  }
`);

type FragmentResult4918 = ResultOf<typeof FRAGMENT_4918>;
type FragmentSelf4918 = NonNullable<FragmentResult4918>;

export type FragmentToken4918 =
  | FragmentSelf4918["__typename"]
  | FragmentSelf4918["typenameHint"] | FragmentToken4916 | FragmentToken4917;
