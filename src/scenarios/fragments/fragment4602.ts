import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4600 } from "./fragment4600";
import type { FragmentToken4601 } from "./fragment4601";

export const FRAGMENT_4602 = gql(`
  fragment Fragment4602 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult4602 = ResultOf<typeof FRAGMENT_4602>;
type FragmentSelf4602 = NonNullable<FragmentResult4602>;

export type FragmentToken4602 =
  | FragmentSelf4602["__typename"]
  | FragmentSelf4602["typenameHint"] | FragmentToken4600 | FragmentToken4601;
