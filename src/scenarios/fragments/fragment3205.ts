import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3203 } from "./fragment3203";
import type { FragmentToken3204 } from "./fragment3204";

export const FRAGMENT_3205 = gql(`
  fragment Fragment3205 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult3205 = ResultOf<typeof FRAGMENT_3205>;
type FragmentSelf3205 = NonNullable<FragmentResult3205>;

export type FragmentToken3205 =
  | FragmentSelf3205["__typename"]
  | FragmentSelf3205["typenameHint"] | FragmentToken3203 | FragmentToken3204;
