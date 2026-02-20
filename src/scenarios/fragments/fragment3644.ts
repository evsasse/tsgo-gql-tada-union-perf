import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3642 } from "./fragment3642";
import type { FragmentToken3643 } from "./fragment3643";

export const FRAGMENT_3644 = gql(`
  fragment Fragment3644 on Member03 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_03
    memberCount_03
    memberMetric_03
  }
`);

type FragmentResult3644 = ResultOf<typeof FRAGMENT_3644>;
type FragmentSelf3644 = NonNullable<FragmentResult3644>;

export type FragmentToken3644 =
  | FragmentSelf3644["__typename"]
  | FragmentSelf3644["typenameHint"] | FragmentToken3642 | FragmentToken3643;
