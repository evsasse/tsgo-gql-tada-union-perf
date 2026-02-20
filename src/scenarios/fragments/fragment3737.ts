import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3735 } from "./fragment3735";
import type { FragmentToken3736 } from "./fragment3736";

export const FRAGMENT_3737 = gql(`
  fragment Fragment3737 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult3737 = ResultOf<typeof FRAGMENT_3737>;
type FragmentSelf3737 = NonNullable<FragmentResult3737>;

export type FragmentToken3737 =
  | FragmentSelf3737["__typename"]
  | FragmentSelf3737["typenameHint"] | FragmentToken3735 | FragmentToken3736;
