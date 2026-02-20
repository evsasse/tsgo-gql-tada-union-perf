import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken251 } from "./fragment251";
import type { FragmentToken252 } from "./fragment252";

export const FRAGMENT_253 = gql(`
  fragment Fragment253 on Member252 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_252
    memberCount_252
    memberMetric_252
  }
`);

type FragmentResult253 = ResultOf<typeof FRAGMENT_253>;
type FragmentSelf253 = NonNullable<FragmentResult253>;

export type FragmentToken253 =
  | FragmentSelf253["__typename"]
  | FragmentSelf253["typenameHint"] | FragmentToken251 | FragmentToken252;
