import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3747 } from "./fragment3747";
import type { FragmentToken3748 } from "./fragment3748";

export const FRAGMENT_3749 = gql(`
  fragment Fragment3749 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult3749 = ResultOf<typeof FRAGMENT_3749>;
type FragmentSelf3749 = NonNullable<FragmentResult3749>;

export type FragmentToken3749 =
  | FragmentSelf3749["__typename"]
  | FragmentSelf3749["typenameHint"] | FragmentToken3747 | FragmentToken3748;
