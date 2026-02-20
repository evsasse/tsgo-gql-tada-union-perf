import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3955 } from "./fragment3955";
import type { FragmentToken3956 } from "./fragment3956";

export const FRAGMENT_3957 = gql(`
  fragment Fragment3957 on Member36 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_36
    memberCount_36
    memberMetric_36
  }
`);

type FragmentResult3957 = ResultOf<typeof FRAGMENT_3957>;
type FragmentSelf3957 = NonNullable<FragmentResult3957>;

export type FragmentToken3957 =
  | FragmentSelf3957["__typename"]
  | FragmentSelf3957["typenameHint"] | FragmentToken3955 | FragmentToken3956;
