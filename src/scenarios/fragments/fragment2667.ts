import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2665 } from "./fragment2665";
import type { FragmentToken2666 } from "./fragment2666";

export const FRAGMENT_2667 = gql(`
  fragment Fragment2667 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult2667 = ResultOf<typeof FRAGMENT_2667>;
type FragmentSelf2667 = NonNullable<FragmentResult2667>;

export type FragmentToken2667 =
  | FragmentSelf2667["__typename"]
  | FragmentSelf2667["typenameHint"] | FragmentToken2665 | FragmentToken2666;
