import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3047 } from "./fragment3047";
import type { FragmentToken3048 } from "./fragment3048";

export const FRAGMENT_3049 = gql(`
  fragment Fragment3049 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult3049 = ResultOf<typeof FRAGMENT_3049>;
type FragmentSelf3049 = NonNullable<FragmentResult3049>;

export type FragmentToken3049 =
  | FragmentSelf3049["__typename"]
  | FragmentSelf3049["typenameHint"] | FragmentToken3047 | FragmentToken3048;
