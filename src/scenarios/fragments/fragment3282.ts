import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3280 } from "./fragment3280";
import type { FragmentToken3281 } from "./fragment3281";

export const FRAGMENT_3282 = gql(`
  fragment Fragment3282 on Member201 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_201
    memberCount_201
    memberMetric_201
  }
`);

type FragmentResult3282 = ResultOf<typeof FRAGMENT_3282>;
type FragmentSelf3282 = NonNullable<FragmentResult3282>;

export type FragmentToken3282 =
  | FragmentSelf3282["__typename"]
  | FragmentSelf3282["typenameHint"] | FragmentToken3280 | FragmentToken3281;
