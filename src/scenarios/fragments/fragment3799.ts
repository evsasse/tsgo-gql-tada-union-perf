import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3797 } from "./fragment3797";
import type { FragmentToken3798 } from "./fragment3798";

export const FRAGMENT_3799 = gql(`
  fragment Fragment3799 on Member158 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_158
    memberCount_158
    memberMetric_158
  }
`);

type FragmentResult3799 = ResultOf<typeof FRAGMENT_3799>;
type FragmentSelf3799 = NonNullable<FragmentResult3799>;

export type FragmentToken3799 =
  | FragmentSelf3799["__typename"]
  | FragmentSelf3799["typenameHint"] | FragmentToken3797 | FragmentToken3798;
