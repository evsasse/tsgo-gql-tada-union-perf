import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3936 } from "./fragment3936";
import type { FragmentToken3937 } from "./fragment3937";

export const FRAGMENT_3938 = gql(`
  fragment Fragment3938 on Member17 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_17
    memberCount_17
    memberMetric_17
  }
`);

type FragmentResult3938 = ResultOf<typeof FRAGMENT_3938>;
type FragmentSelf3938 = NonNullable<FragmentResult3938>;

export type FragmentToken3938 =
  | FragmentSelf3938["__typename"]
  | FragmentSelf3938["typenameHint"] | FragmentToken3936 | FragmentToken3937;
