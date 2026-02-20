import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken407 } from "./fragment407";
import type { FragmentToken408 } from "./fragment408";

export const FRAGMENT_409 = gql(`
  fragment Fragment409 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult409 = ResultOf<typeof FRAGMENT_409>;
type FragmentSelf409 = NonNullable<FragmentResult409>;

export type FragmentToken409 =
  | FragmentSelf409["__typename"]
  | FragmentSelf409["typenameHint"] | FragmentToken407 | FragmentToken408;
