import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken250 } from "./fragment250";
import type { FragmentToken251 } from "./fragment251";

export const FRAGMENT_252 = gql(`
  fragment Fragment252 on Member251 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_251
    memberCount_251
    memberMetric_251
  }
`);

type FragmentResult252 = ResultOf<typeof FRAGMENT_252>;
type FragmentSelf252 = NonNullable<FragmentResult252>;

export type FragmentToken252 =
  | FragmentSelf252["__typename"]
  | FragmentSelf252["typenameHint"] | FragmentToken250 | FragmentToken251;
