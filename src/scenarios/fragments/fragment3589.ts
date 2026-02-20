import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3587 } from "./fragment3587";
import type { FragmentToken3588 } from "./fragment3588";

export const FRAGMENT_3589 = gql(`
  fragment Fragment3589 on Member228 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_228
    memberCount_228
    memberMetric_228
  }
`);

type FragmentResult3589 = ResultOf<typeof FRAGMENT_3589>;
type FragmentSelf3589 = NonNullable<FragmentResult3589>;

export type FragmentToken3589 =
  | FragmentSelf3589["__typename"]
  | FragmentSelf3589["typenameHint"] | FragmentToken3587 | FragmentToken3588;
