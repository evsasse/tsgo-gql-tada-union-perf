import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3907 } from "./fragment3907";
import type { FragmentToken3908 } from "./fragment3908";

export const FRAGMENT_3909 = gql(`
  fragment Fragment3909 on Member268 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_268
    memberCount_268
    memberMetric_268
  }
`);

type FragmentResult3909 = ResultOf<typeof FRAGMENT_3909>;
type FragmentSelf3909 = NonNullable<FragmentResult3909>;

export type FragmentToken3909 =
  | FragmentSelf3909["__typename"]
  | FragmentSelf3909["typenameHint"] | FragmentToken3907 | FragmentToken3908;
