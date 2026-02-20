import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2600 } from "./fragment2600";
import type { FragmentToken2601 } from "./fragment2601";

export const FRAGMENT_2602 = gql(`
  fragment Fragment2602 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult2602 = ResultOf<typeof FRAGMENT_2602>;
type FragmentSelf2602 = NonNullable<FragmentResult2602>;

export type FragmentToken2602 =
  | FragmentSelf2602["__typename"]
  | FragmentSelf2602["typenameHint"] | FragmentToken2600 | FragmentToken2601;
