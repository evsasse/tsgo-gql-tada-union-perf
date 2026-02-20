import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3929 } from "./fragment3929";
import type { FragmentToken3930 } from "./fragment3930";

export const FRAGMENT_3931 = gql(`
  fragment Fragment3931 on Member10 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_10
    memberCount_10
    memberMetric_10
  }
`);

type FragmentResult3931 = ResultOf<typeof FRAGMENT_3931>;
type FragmentSelf3931 = NonNullable<FragmentResult3931>;

export type FragmentToken3931 =
  | FragmentSelf3931["__typename"]
  | FragmentSelf3931["typenameHint"] | FragmentToken3929 | FragmentToken3930;
