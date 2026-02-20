import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3189 } from "./fragment3189";
import type { FragmentToken3190 } from "./fragment3190";

export const FRAGMENT_3191 = gql(`
  fragment Fragment3191 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult3191 = ResultOf<typeof FRAGMENT_3191>;
type FragmentSelf3191 = NonNullable<FragmentResult3191>;

export type FragmentToken3191 =
  | FragmentSelf3191["__typename"]
  | FragmentSelf3191["typenameHint"] | FragmentToken3189 | FragmentToken3190;
