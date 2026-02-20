import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3114 } from "./fragment3114";
import type { FragmentToken3115 } from "./fragment3115";

export const FRAGMENT_3116 = gql(`
  fragment Fragment3116 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult3116 = ResultOf<typeof FRAGMENT_3116>;
type FragmentSelf3116 = NonNullable<FragmentResult3116>;

export type FragmentToken3116 =
  | FragmentSelf3116["__typename"]
  | FragmentSelf3116["typenameHint"] | FragmentToken3114 | FragmentToken3115;
