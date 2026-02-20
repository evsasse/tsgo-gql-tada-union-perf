import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken759 } from "./fragment759";
import type { FragmentToken760 } from "./fragment760";

export const FRAGMENT_761 = gql(`
  fragment Fragment761 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult761 = ResultOf<typeof FRAGMENT_761>;
type FragmentSelf761 = NonNullable<FragmentResult761>;

export type FragmentToken761 =
  | FragmentSelf761["__typename"]
  | FragmentSelf761["typenameHint"] | FragmentToken759 | FragmentToken760;
