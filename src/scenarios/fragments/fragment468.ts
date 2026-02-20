import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken466 } from "./fragment466";
import type { FragmentToken467 } from "./fragment467";

export const FRAGMENT_468 = gql(`
  fragment Fragment468 on Member187 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_187
    memberCount_187
    memberMetric_187
  }
`);

type FragmentResult468 = ResultOf<typeof FRAGMENT_468>;
type FragmentSelf468 = NonNullable<FragmentResult468>;

export type FragmentToken468 =
  | FragmentSelf468["__typename"]
  | FragmentSelf468["typenameHint"] | FragmentToken466 | FragmentToken467;
