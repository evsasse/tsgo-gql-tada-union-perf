import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken482 } from "./fragment482";
import type { FragmentToken483 } from "./fragment483";

export const FRAGMENT_484 = gql(`
  fragment Fragment484 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult484 = ResultOf<typeof FRAGMENT_484>;
type FragmentSelf484 = NonNullable<FragmentResult484>;

export type FragmentToken484 =
  | FragmentSelf484["__typename"]
  | FragmentSelf484["typenameHint"] | FragmentToken482 | FragmentToken483;
