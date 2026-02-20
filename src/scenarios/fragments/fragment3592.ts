import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3590 } from "./fragment3590";
import type { FragmentToken3591 } from "./fragment3591";

export const FRAGMENT_3592 = gql(`
  fragment Fragment3592 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult3592 = ResultOf<typeof FRAGMENT_3592>;
type FragmentSelf3592 = NonNullable<FragmentResult3592>;

export type FragmentToken3592 =
  | FragmentSelf3592["__typename"]
  | FragmentSelf3592["typenameHint"] | FragmentToken3590 | FragmentToken3591;
