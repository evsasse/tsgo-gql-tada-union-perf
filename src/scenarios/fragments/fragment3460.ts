import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3458 } from "./fragment3458";
import type { FragmentToken3459 } from "./fragment3459";

export const FRAGMENT_3460 = gql(`
  fragment Fragment3460 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult3460 = ResultOf<typeof FRAGMENT_3460>;
type FragmentSelf3460 = NonNullable<FragmentResult3460>;

export type FragmentToken3460 =
  | FragmentSelf3460["__typename"]
  | FragmentSelf3460["typenameHint"] | FragmentToken3458 | FragmentToken3459;
