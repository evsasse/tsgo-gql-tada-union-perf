import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3694 } from "./fragment3694";
import type { FragmentToken3695 } from "./fragment3695";

export const FRAGMENT_3696 = gql(`
  fragment Fragment3696 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult3696 = ResultOf<typeof FRAGMENT_3696>;
type FragmentSelf3696 = NonNullable<FragmentResult3696>;

export type FragmentToken3696 =
  | FragmentSelf3696["__typename"]
  | FragmentSelf3696["typenameHint"] | FragmentToken3694 | FragmentToken3695;
