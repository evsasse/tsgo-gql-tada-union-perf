import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4840 } from "./fragment4840";
import type { FragmentToken4841 } from "./fragment4841";

export const FRAGMENT_4842 = gql(`
  fragment Fragment4842 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult4842 = ResultOf<typeof FRAGMENT_4842>;
type FragmentSelf4842 = NonNullable<FragmentResult4842>;

export type FragmentToken4842 =
  | FragmentSelf4842["__typename"]
  | FragmentSelf4842["typenameHint"] | FragmentToken4840 | FragmentToken4841;
