import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3851 } from "./fragment3851";
import type { FragmentToken3852 } from "./fragment3852";

export const FRAGMENT_3853 = gql(`
  fragment Fragment3853 on Member212 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_212
    memberCount_212
    memberMetric_212
  }
`);

type FragmentResult3853 = ResultOf<typeof FRAGMENT_3853>;
type FragmentSelf3853 = NonNullable<FragmentResult3853>;

export type FragmentToken3853 =
  | FragmentSelf3853["__typename"]
  | FragmentSelf3853["typenameHint"] | FragmentToken3851 | FragmentToken3852;
