import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3410 } from "./fragment3410";
import type { FragmentToken3411 } from "./fragment3411";

export const FRAGMENT_3412 = gql(`
  fragment Fragment3412 on Member51 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_51
    memberCount_51
    memberMetric_51
  }
`);

type FragmentResult3412 = ResultOf<typeof FRAGMENT_3412>;
type FragmentSelf3412 = NonNullable<FragmentResult3412>;

export type FragmentToken3412 =
  | FragmentSelf3412["__typename"]
  | FragmentSelf3412["typenameHint"] | FragmentToken3410 | FragmentToken3411;
