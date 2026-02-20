import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3887 } from "./fragment3887";
import type { FragmentToken3888 } from "./fragment3888";

export const FRAGMENT_3889 = gql(`
  fragment Fragment3889 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult3889 = ResultOf<typeof FRAGMENT_3889>;
type FragmentSelf3889 = NonNullable<FragmentResult3889>;

export type FragmentToken3889 =
  | FragmentSelf3889["__typename"]
  | FragmentSelf3889["typenameHint"] | FragmentToken3887 | FragmentToken3888;
