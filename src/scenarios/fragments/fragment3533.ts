import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3531 } from "./fragment3531";
import type { FragmentToken3532 } from "./fragment3532";

export const FRAGMENT_3533 = gql(`
  fragment Fragment3533 on Member172 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_172
    memberCount_172
    memberMetric_172
  }
`);

type FragmentResult3533 = ResultOf<typeof FRAGMENT_3533>;
type FragmentSelf3533 = NonNullable<FragmentResult3533>;

export type FragmentToken3533 =
  | FragmentSelf3533["__typename"]
  | FragmentSelf3533["typenameHint"] | FragmentToken3531 | FragmentToken3532;
