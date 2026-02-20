import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3466 } from "./fragment3466";
import type { FragmentToken3467 } from "./fragment3467";

export const FRAGMENT_3468 = gql(`
  fragment Fragment3468 on Member107 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_107
    memberCount_107
    memberMetric_107
  }
`);

type FragmentResult3468 = ResultOf<typeof FRAGMENT_3468>;
type FragmentSelf3468 = NonNullable<FragmentResult3468>;

export type FragmentToken3468 =
  | FragmentSelf3468["__typename"]
  | FragmentSelf3468["typenameHint"] | FragmentToken3466 | FragmentToken3467;
