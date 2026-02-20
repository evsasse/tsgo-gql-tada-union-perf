import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3738 } from "./fragment3738";
import type { FragmentToken3739 } from "./fragment3739";

export const FRAGMENT_3740 = gql(`
  fragment Fragment3740 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult3740 = ResultOf<typeof FRAGMENT_3740>;
type FragmentSelf3740 = NonNullable<FragmentResult3740>;

export type FragmentToken3740 =
  | FragmentSelf3740["__typename"]
  | FragmentSelf3740["typenameHint"] | FragmentToken3738 | FragmentToken3739;
