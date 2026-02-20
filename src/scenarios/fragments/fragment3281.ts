import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3279 } from "./fragment3279";
import type { FragmentToken3280 } from "./fragment3280";

export const FRAGMENT_3281 = gql(`
  fragment Fragment3281 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult3281 = ResultOf<typeof FRAGMENT_3281>;
type FragmentSelf3281 = NonNullable<FragmentResult3281>;

export type FragmentToken3281 =
  | FragmentSelf3281["__typename"]
  | FragmentSelf3281["typenameHint"] | FragmentToken3279 | FragmentToken3280;
