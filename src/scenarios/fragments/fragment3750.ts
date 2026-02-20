import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3748 } from "./fragment3748";
import type { FragmentToken3749 } from "./fragment3749";

export const FRAGMENT_3750 = gql(`
  fragment Fragment3750 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult3750 = ResultOf<typeof FRAGMENT_3750>;
type FragmentSelf3750 = NonNullable<FragmentResult3750>;

export type FragmentToken3750 =
  | FragmentSelf3750["__typename"]
  | FragmentSelf3750["typenameHint"] | FragmentToken3748 | FragmentToken3749;
