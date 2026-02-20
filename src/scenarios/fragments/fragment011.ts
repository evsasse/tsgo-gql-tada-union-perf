import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken009 } from "./fragment009";
import type { FragmentToken010 } from "./fragment010";

export const FRAGMENT_011 = gql(`
  fragment Fragment011 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult011 = ResultOf<typeof FRAGMENT_011>;
type FragmentSelf011 = NonNullable<FragmentResult011>;

export type FragmentToken011 =
  | FragmentSelf011["__typename"]
  | FragmentSelf011["typenameHint"] | FragmentToken009 | FragmentToken010;
