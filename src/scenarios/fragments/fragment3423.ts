import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3421 } from "./fragment3421";
import type { FragmentToken3422 } from "./fragment3422";

export const FRAGMENT_3423 = gql(`
  fragment Fragment3423 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult3423 = ResultOf<typeof FRAGMENT_3423>;
type FragmentSelf3423 = NonNullable<FragmentResult3423>;

export type FragmentToken3423 =
  | FragmentSelf3423["__typename"]
  | FragmentSelf3423["typenameHint"] | FragmentToken3421 | FragmentToken3422;
