import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken966 } from "./fragment966";
import type { FragmentToken967 } from "./fragment967";

export const FRAGMENT_968 = gql(`
  fragment Fragment968 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult968 = ResultOf<typeof FRAGMENT_968>;
type FragmentSelf968 = NonNullable<FragmentResult968>;

export type FragmentToken968 =
  | FragmentSelf968["__typename"]
  | FragmentSelf968["typenameHint"] | FragmentToken966 | FragmentToken967;
