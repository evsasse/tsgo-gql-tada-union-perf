import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken003 } from "./fragment003";
import type { FragmentToken004 } from "./fragment004";

export const FRAGMENT_005 = gql(`
  fragment Fragment005 on Member04 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_04
    memberCount_04
    memberMetric_04
  }
`);

type FragmentResult005 = ResultOf<typeof FRAGMENT_005>;
type FragmentSelf005 = NonNullable<FragmentResult005>;

export type FragmentToken005 =
  | FragmentSelf005["__typename"]
  | FragmentSelf005["typenameHint"] | FragmentToken003 | FragmentToken004;
