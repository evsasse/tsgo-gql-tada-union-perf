import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3328 } from "./fragment3328";
import type { FragmentToken3329 } from "./fragment3329";

export const FRAGMENT_3330 = gql(`
  fragment Fragment3330 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult3330 = ResultOf<typeof FRAGMENT_3330>;
type FragmentSelf3330 = NonNullable<FragmentResult3330>;

export type FragmentToken3330 =
  | FragmentSelf3330["__typename"]
  | FragmentSelf3330["typenameHint"] | FragmentToken3328 | FragmentToken3329;
