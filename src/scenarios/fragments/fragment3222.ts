import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3220 } from "./fragment3220";
import type { FragmentToken3221 } from "./fragment3221";

export const FRAGMENT_3222 = gql(`
  fragment Fragment3222 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult3222 = ResultOf<typeof FRAGMENT_3222>;
type FragmentSelf3222 = NonNullable<FragmentResult3222>;

export type FragmentToken3222 =
  | FragmentSelf3222["__typename"]
  | FragmentSelf3222["typenameHint"] | FragmentToken3220 | FragmentToken3221;
