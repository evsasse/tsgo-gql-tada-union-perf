import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3565 } from "./fragment3565";
import type { FragmentToken3566 } from "./fragment3566";

export const FRAGMENT_3567 = gql(`
  fragment Fragment3567 on Member206 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_206
    memberCount_206
    memberMetric_206
  }
`);

type FragmentResult3567 = ResultOf<typeof FRAGMENT_3567>;
type FragmentSelf3567 = NonNullable<FragmentResult3567>;

export type FragmentToken3567 =
  | FragmentSelf3567["__typename"]
  | FragmentSelf3567["typenameHint"] | FragmentToken3565 | FragmentToken3566;
