import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3953 } from "./fragment3953";
import type { FragmentToken3954 } from "./fragment3954";

export const FRAGMENT_3955 = gql(`
  fragment Fragment3955 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult3955 = ResultOf<typeof FRAGMENT_3955>;
type FragmentSelf3955 = NonNullable<FragmentResult3955>;

export type FragmentToken3955 =
  | FragmentSelf3955["__typename"]
  | FragmentSelf3955["typenameHint"] | FragmentToken3953 | FragmentToken3954;
