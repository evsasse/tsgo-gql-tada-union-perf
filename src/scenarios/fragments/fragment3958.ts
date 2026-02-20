import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3956 } from "./fragment3956";
import type { FragmentToken3957 } from "./fragment3957";

export const FRAGMENT_3958 = gql(`
  fragment Fragment3958 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult3958 = ResultOf<typeof FRAGMENT_3958>;
type FragmentSelf3958 = NonNullable<FragmentResult3958>;

export type FragmentToken3958 =
  | FragmentSelf3958["__typename"]
  | FragmentSelf3958["typenameHint"] | FragmentToken3956 | FragmentToken3957;
