import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3767 } from "./fragment3767";
import type { FragmentToken3768 } from "./fragment3768";

export const FRAGMENT_3769 = gql(`
  fragment Fragment3769 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult3769 = ResultOf<typeof FRAGMENT_3769>;
type FragmentSelf3769 = NonNullable<FragmentResult3769>;

export type FragmentToken3769 =
  | FragmentSelf3769["__typename"]
  | FragmentSelf3769["typenameHint"] | FragmentToken3767 | FragmentToken3768;
