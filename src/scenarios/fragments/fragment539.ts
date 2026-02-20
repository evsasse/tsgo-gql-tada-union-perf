import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken537 } from "./fragment537";
import type { FragmentToken538 } from "./fragment538";

export const FRAGMENT_539 = gql(`
  fragment Fragment539 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult539 = ResultOf<typeof FRAGMENT_539>;
type FragmentSelf539 = NonNullable<FragmentResult539>;

export type FragmentToken539 =
  | FragmentSelf539["__typename"]
  | FragmentSelf539["typenameHint"] | FragmentToken537 | FragmentToken538;
