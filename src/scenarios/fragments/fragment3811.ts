import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3809 } from "./fragment3809";
import type { FragmentToken3810 } from "./fragment3810";

export const FRAGMENT_3811 = gql(`
  fragment Fragment3811 on Member170 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_170
    memberCount_170
    memberMetric_170
  }
`);

type FragmentResult3811 = ResultOf<typeof FRAGMENT_3811>;
type FragmentSelf3811 = NonNullable<FragmentResult3811>;

export type FragmentToken3811 =
  | FragmentSelf3811["__typename"]
  | FragmentSelf3811["typenameHint"] | FragmentToken3809 | FragmentToken3810;
