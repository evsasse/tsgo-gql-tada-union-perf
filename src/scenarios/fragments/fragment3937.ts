import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3935 } from "./fragment3935";
import type { FragmentToken3936 } from "./fragment3936";

export const FRAGMENT_3937 = gql(`
  fragment Fragment3937 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult3937 = ResultOf<typeof FRAGMENT_3937>;
type FragmentSelf3937 = NonNullable<FragmentResult3937>;

export type FragmentToken3937 =
  | FragmentSelf3937["__typename"]
  | FragmentSelf3937["typenameHint"] | FragmentToken3935 | FragmentToken3936;
