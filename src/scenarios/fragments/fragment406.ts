import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken404 } from "./fragment404";
import type { FragmentToken405 } from "./fragment405";

export const FRAGMENT_406 = gql(`
  fragment Fragment406 on Member125 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_125
    memberCount_125
    memberMetric_125
  }
`);

type FragmentResult406 = ResultOf<typeof FRAGMENT_406>;
type FragmentSelf406 = NonNullable<FragmentResult406>;

export type FragmentToken406 =
  | FragmentSelf406["__typename"]
  | FragmentSelf406["typenameHint"] | FragmentToken404 | FragmentToken405;
