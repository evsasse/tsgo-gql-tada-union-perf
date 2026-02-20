import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4886 } from "./fragment4886";
import type { FragmentToken4887 } from "./fragment4887";

export const FRAGMENT_4888 = gql(`
  fragment Fragment4888 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult4888 = ResultOf<typeof FRAGMENT_4888>;
type FragmentSelf4888 = NonNullable<FragmentResult4888>;

export type FragmentToken4888 =
  | FragmentSelf4888["__typename"]
  | FragmentSelf4888["typenameHint"] | FragmentToken4886 | FragmentToken4887;
