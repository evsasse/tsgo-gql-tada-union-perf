import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3206 } from "./fragment3206";
import type { FragmentToken3207 } from "./fragment3207";

export const FRAGMENT_3208 = gql(`
  fragment Fragment3208 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult3208 = ResultOf<typeof FRAGMENT_3208>;
type FragmentSelf3208 = NonNullable<FragmentResult3208>;

export type FragmentToken3208 =
  | FragmentSelf3208["__typename"]
  | FragmentSelf3208["typenameHint"] | FragmentToken3206 | FragmentToken3207;
