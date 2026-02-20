import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3996 } from "./fragment3996";
import type { FragmentToken3997 } from "./fragment3997";

export const FRAGMENT_3998 = gql(`
  fragment Fragment3998 on Member77 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_77
    memberCount_77
    memberMetric_77
  }
`);

type FragmentResult3998 = ResultOf<typeof FRAGMENT_3998>;
type FragmentSelf3998 = NonNullable<FragmentResult3998>;

export type FragmentToken3998 =
  | FragmentSelf3998["__typename"]
  | FragmentSelf3998["typenameHint"] | FragmentToken3996 | FragmentToken3997;
