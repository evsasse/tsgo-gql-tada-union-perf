import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3132 } from "./fragment3132";
import type { FragmentToken3133 } from "./fragment3133";

export const FRAGMENT_3134 = gql(`
  fragment Fragment3134 on Member53 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_53
    memberCount_53
    memberMetric_53
  }
`);

type FragmentResult3134 = ResultOf<typeof FRAGMENT_3134>;
type FragmentSelf3134 = NonNullable<FragmentResult3134>;

export type FragmentToken3134 =
  | FragmentSelf3134["__typename"]
  | FragmentSelf3134["typenameHint"] | FragmentToken3132 | FragmentToken3133;
