import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3665 } from "./fragment3665";
import type { FragmentToken3666 } from "./fragment3666";

export const FRAGMENT_3667 = gql(`
  fragment Fragment3667 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult3667 = ResultOf<typeof FRAGMENT_3667>;
type FragmentSelf3667 = NonNullable<FragmentResult3667>;

export type FragmentToken3667 =
  | FragmentSelf3667["__typename"]
  | FragmentSelf3667["typenameHint"] | FragmentToken3665 | FragmentToken3666;
