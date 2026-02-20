import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3954 } from "./fragment3954";
import type { FragmentToken3955 } from "./fragment3955";

export const FRAGMENT_3956 = gql(`
  fragment Fragment3956 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult3956 = ResultOf<typeof FRAGMENT_3956>;
type FragmentSelf3956 = NonNullable<FragmentResult3956>;

export type FragmentToken3956 =
  | FragmentSelf3956["__typename"]
  | FragmentSelf3956["typenameHint"] | FragmentToken3954 | FragmentToken3955;
