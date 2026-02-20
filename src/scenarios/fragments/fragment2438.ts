import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2436 } from "./fragment2436";
import type { FragmentToken2437 } from "./fragment2437";

export const FRAGMENT_2438 = gql(`
  fragment Fragment2438 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult2438 = ResultOf<typeof FRAGMENT_2438>;
type FragmentSelf2438 = NonNullable<FragmentResult2438>;

export type FragmentToken2438 =
  | FragmentSelf2438["__typename"]
  | FragmentSelf2438["typenameHint"] | FragmentToken2436 | FragmentToken2437;
