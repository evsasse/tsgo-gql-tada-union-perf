import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3951 } from "./fragment3951";
import type { FragmentToken3952 } from "./fragment3952";

export const FRAGMENT_3953 = gql(`
  fragment Fragment3953 on Member32 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_32
    memberCount_32
    memberMetric_32
  }
`);

type FragmentResult3953 = ResultOf<typeof FRAGMENT_3953>;
type FragmentSelf3953 = NonNullable<FragmentResult3953>;

export type FragmentToken3953 =
  | FragmentSelf3953["__typename"]
  | FragmentSelf3953["typenameHint"] | FragmentToken3951 | FragmentToken3952;
