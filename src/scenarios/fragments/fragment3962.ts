import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3960 } from "./fragment3960";
import type { FragmentToken3961 } from "./fragment3961";

export const FRAGMENT_3962 = gql(`
  fragment Fragment3962 on Member41 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_41
    memberCount_41
    memberMetric_41
  }
`);

type FragmentResult3962 = ResultOf<typeof FRAGMENT_3962>;
type FragmentSelf3962 = NonNullable<FragmentResult3962>;

export type FragmentToken3962 =
  | FragmentSelf3962["__typename"]
  | FragmentSelf3962["typenameHint"] | FragmentToken3960 | FragmentToken3961;
