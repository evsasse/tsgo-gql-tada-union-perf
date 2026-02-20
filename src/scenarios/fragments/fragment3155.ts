import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3153 } from "./fragment3153";
import type { FragmentToken3154 } from "./fragment3154";

export const FRAGMENT_3155 = gql(`
  fragment Fragment3155 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult3155 = ResultOf<typeof FRAGMENT_3155>;
type FragmentSelf3155 = NonNullable<FragmentResult3155>;

export type FragmentToken3155 =
  | FragmentSelf3155["__typename"]
  | FragmentSelf3155["typenameHint"] | FragmentToken3153 | FragmentToken3154;
