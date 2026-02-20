import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3563 } from "./fragment3563";
import type { FragmentToken3564 } from "./fragment3564";

export const FRAGMENT_3565 = gql(`
  fragment Fragment3565 on Member204 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_204
    memberCount_204
    memberMetric_204
  }
`);

type FragmentResult3565 = ResultOf<typeof FRAGMENT_3565>;
type FragmentSelf3565 = NonNullable<FragmentResult3565>;

export type FragmentToken3565 =
  | FragmentSelf3565["__typename"]
  | FragmentSelf3565["typenameHint"] | FragmentToken3563 | FragmentToken3564;
