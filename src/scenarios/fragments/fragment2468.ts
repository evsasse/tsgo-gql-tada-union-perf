import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2466 } from "./fragment2466";
import type { FragmentToken2467 } from "./fragment2467";

export const FRAGMENT_2468 = gql(`
  fragment Fragment2468 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult2468 = ResultOf<typeof FRAGMENT_2468>;
type FragmentSelf2468 = NonNullable<FragmentResult2468>;

export type FragmentToken2468 =
  | FragmentSelf2468["__typename"]
  | FragmentSelf2468["typenameHint"] | FragmentToken2466 | FragmentToken2467;
