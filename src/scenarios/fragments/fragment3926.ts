import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3924 } from "./fragment3924";
import type { FragmentToken3925 } from "./fragment3925";

export const FRAGMENT_3926 = gql(`
  fragment Fragment3926 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult3926 = ResultOf<typeof FRAGMENT_3926>;
type FragmentSelf3926 = NonNullable<FragmentResult3926>;

export type FragmentToken3926 =
  | FragmentSelf3926["__typename"]
  | FragmentSelf3926["typenameHint"] | FragmentToken3924 | FragmentToken3925;
