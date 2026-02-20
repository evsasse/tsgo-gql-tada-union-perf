import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3413 } from "./fragment3413";
import type { FragmentToken3414 } from "./fragment3414";

export const FRAGMENT_3415 = gql(`
  fragment Fragment3415 on Member54 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_54
    memberCount_54
    memberMetric_54
  }
`);

type FragmentResult3415 = ResultOf<typeof FRAGMENT_3415>;
type FragmentSelf3415 = NonNullable<FragmentResult3415>;

export type FragmentToken3415 =
  | FragmentSelf3415["__typename"]
  | FragmentSelf3415["typenameHint"] | FragmentToken3413 | FragmentToken3414;
