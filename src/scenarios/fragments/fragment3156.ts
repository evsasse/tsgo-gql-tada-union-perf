import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3154 } from "./fragment3154";
import type { FragmentToken3155 } from "./fragment3155";

export const FRAGMENT_3156 = gql(`
  fragment Fragment3156 on Member75 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_75
    memberCount_75
    memberMetric_75
  }
`);

type FragmentResult3156 = ResultOf<typeof FRAGMENT_3156>;
type FragmentSelf3156 = NonNullable<FragmentResult3156>;

export type FragmentToken3156 =
  | FragmentSelf3156["__typename"]
  | FragmentSelf3156["typenameHint"] | FragmentToken3154 | FragmentToken3155;
