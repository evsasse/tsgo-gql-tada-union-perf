import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken559 } from "./fragment559";
import type { FragmentToken560 } from "./fragment560";

export const FRAGMENT_561 = gql(`
  fragment Fragment561 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult561 = ResultOf<typeof FRAGMENT_561>;
type FragmentSelf561 = NonNullable<FragmentResult561>;

export type FragmentToken561 =
  | FragmentSelf561["__typename"]
  | FragmentSelf561["typenameHint"] | FragmentToken559 | FragmentToken560;
