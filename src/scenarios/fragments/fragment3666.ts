import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3664 } from "./fragment3664";
import type { FragmentToken3665 } from "./fragment3665";

export const FRAGMENT_3666 = gql(`
  fragment Fragment3666 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult3666 = ResultOf<typeof FRAGMENT_3666>;
type FragmentSelf3666 = NonNullable<FragmentResult3666>;

export type FragmentToken3666 =
  | FragmentSelf3666["__typename"]
  | FragmentSelf3666["typenameHint"] | FragmentToken3664 | FragmentToken3665;
