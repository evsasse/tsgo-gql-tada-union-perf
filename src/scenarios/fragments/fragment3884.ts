import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3882 } from "./fragment3882";
import type { FragmentToken3883 } from "./fragment3883";

export const FRAGMENT_3884 = gql(`
  fragment Fragment3884 on Member243 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_243
    memberCount_243
    memberMetric_243
  }
`);

type FragmentResult3884 = ResultOf<typeof FRAGMENT_3884>;
type FragmentSelf3884 = NonNullable<FragmentResult3884>;

export type FragmentToken3884 =
  | FragmentSelf3884["__typename"]
  | FragmentSelf3884["typenameHint"] | FragmentToken3882 | FragmentToken3883;
