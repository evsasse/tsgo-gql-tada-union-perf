import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4696 } from "./fragment4696";
import type { FragmentToken4697 } from "./fragment4697";

export const FRAGMENT_4698 = gql(`
  fragment Fragment4698 on Member217 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_217
    memberCount_217
    memberMetric_217
  }
`);

type FragmentResult4698 = ResultOf<typeof FRAGMENT_4698>;
type FragmentSelf4698 = NonNullable<FragmentResult4698>;

export type FragmentToken4698 =
  | FragmentSelf4698["__typename"]
  | FragmentSelf4698["typenameHint"] | FragmentToken4696 | FragmentToken4697;
