import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3676 } from "./fragment3676";
import type { FragmentToken3677 } from "./fragment3677";

export const FRAGMENT_3678 = gql(`
  fragment Fragment3678 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult3678 = ResultOf<typeof FRAGMENT_3678>;
type FragmentSelf3678 = NonNullable<FragmentResult3678>;

export type FragmentToken3678 =
  | FragmentSelf3678["__typename"]
  | FragmentSelf3678["typenameHint"] | FragmentToken3676 | FragmentToken3677;
