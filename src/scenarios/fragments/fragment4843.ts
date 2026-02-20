import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4841 } from "./fragment4841";
import type { FragmentToken4842 } from "./fragment4842";

export const FRAGMENT_4843 = gql(`
  fragment Fragment4843 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult4843 = ResultOf<typeof FRAGMENT_4843>;
type FragmentSelf4843 = NonNullable<FragmentResult4843>;

export type FragmentToken4843 =
  | FragmentSelf4843["__typename"]
  | FragmentSelf4843["typenameHint"] | FragmentToken4841 | FragmentToken4842;
