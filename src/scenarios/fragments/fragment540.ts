import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken538 } from "./fragment538";
import type { FragmentToken539 } from "./fragment539";

export const FRAGMENT_540 = gql(`
  fragment Fragment540 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult540 = ResultOf<typeof FRAGMENT_540>;
type FragmentSelf540 = NonNullable<FragmentResult540>;

export type FragmentToken540 =
  | FragmentSelf540["__typename"]
  | FragmentSelf540["typenameHint"] | FragmentToken538 | FragmentToken539;
