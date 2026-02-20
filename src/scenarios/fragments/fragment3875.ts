import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3873 } from "./fragment3873";
import type { FragmentToken3874 } from "./fragment3874";

export const FRAGMENT_3875 = gql(`
  fragment Fragment3875 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult3875 = ResultOf<typeof FRAGMENT_3875>;
type FragmentSelf3875 = NonNullable<FragmentResult3875>;

export type FragmentToken3875 =
  | FragmentSelf3875["__typename"]
  | FragmentSelf3875["typenameHint"] | FragmentToken3873 | FragmentToken3874;
