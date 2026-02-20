import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3662 } from "./fragment3662";
import type { FragmentToken3663 } from "./fragment3663";

export const FRAGMENT_3664 = gql(`
  fragment Fragment3664 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult3664 = ResultOf<typeof FRAGMENT_3664>;
type FragmentSelf3664 = NonNullable<FragmentResult3664>;

export type FragmentToken3664 =
  | FragmentSelf3664["__typename"]
  | FragmentSelf3664["typenameHint"] | FragmentToken3662 | FragmentToken3663;
