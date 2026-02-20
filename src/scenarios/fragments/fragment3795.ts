import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3793 } from "./fragment3793";
import type { FragmentToken3794 } from "./fragment3794";

export const FRAGMENT_3795 = gql(`
  fragment Fragment3795 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult3795 = ResultOf<typeof FRAGMENT_3795>;
type FragmentSelf3795 = NonNullable<FragmentResult3795>;

export type FragmentToken3795 =
  | FragmentSelf3795["__typename"]
  | FragmentSelf3795["typenameHint"] | FragmentToken3793 | FragmentToken3794;
