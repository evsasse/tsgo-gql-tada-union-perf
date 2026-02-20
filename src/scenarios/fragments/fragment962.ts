import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken960 } from "./fragment960";
import type { FragmentToken961 } from "./fragment961";

export const FRAGMENT_962 = gql(`
  fragment Fragment962 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult962 = ResultOf<typeof FRAGMENT_962>;
type FragmentSelf962 = NonNullable<FragmentResult962>;

export type FragmentToken962 =
  | FragmentSelf962["__typename"]
  | FragmentSelf962["typenameHint"] | FragmentToken960 | FragmentToken961;
