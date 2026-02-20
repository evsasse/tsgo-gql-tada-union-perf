import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3726 } from "./fragment3726";
import type { FragmentToken3727 } from "./fragment3727";

export const FRAGMENT_3728 = gql(`
  fragment Fragment3728 on Member87 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_87
    memberCount_87
    memberMetric_87
  }
`);

type FragmentResult3728 = ResultOf<typeof FRAGMENT_3728>;
type FragmentSelf3728 = NonNullable<FragmentResult3728>;

export type FragmentToken3728 =
  | FragmentSelf3728["__typename"]
  | FragmentSelf3728["typenameHint"] | FragmentToken3726 | FragmentToken3727;
