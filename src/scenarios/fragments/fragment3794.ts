import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3792 } from "./fragment3792";
import type { FragmentToken3793 } from "./fragment3793";

export const FRAGMENT_3794 = gql(`
  fragment Fragment3794 on Member153 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_153
    memberCount_153
    memberMetric_153
  }
`);

type FragmentResult3794 = ResultOf<typeof FRAGMENT_3794>;
type FragmentSelf3794 = NonNullable<FragmentResult3794>;

export type FragmentToken3794 =
  | FragmentSelf3794["__typename"]
  | FragmentSelf3794["typenameHint"] | FragmentToken3792 | FragmentToken3793;
