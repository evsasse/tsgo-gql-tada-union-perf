import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3652 } from "./fragment3652";
import type { FragmentToken3653 } from "./fragment3653";

export const FRAGMENT_3654 = gql(`
  fragment Fragment3654 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult3654 = ResultOf<typeof FRAGMENT_3654>;
type FragmentSelf3654 = NonNullable<FragmentResult3654>;

export type FragmentToken3654 =
  | FragmentSelf3654["__typename"]
  | FragmentSelf3654["typenameHint"] | FragmentToken3652 | FragmentToken3653;
