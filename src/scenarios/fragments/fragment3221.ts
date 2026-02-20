import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3219 } from "./fragment3219";
import type { FragmentToken3220 } from "./fragment3220";

export const FRAGMENT_3221 = gql(`
  fragment Fragment3221 on Member140 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_140
    memberCount_140
    memberMetric_140
  }
`);

type FragmentResult3221 = ResultOf<typeof FRAGMENT_3221>;
type FragmentSelf3221 = NonNullable<FragmentResult3221>;

export type FragmentToken3221 =
  | FragmentSelf3221["__typename"]
  | FragmentSelf3221["typenameHint"] | FragmentToken3219 | FragmentToken3220;
