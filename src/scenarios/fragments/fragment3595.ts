import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3593 } from "./fragment3593";
import type { FragmentToken3594 } from "./fragment3594";

export const FRAGMENT_3595 = gql(`
  fragment Fragment3595 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult3595 = ResultOf<typeof FRAGMENT_3595>;
type FragmentSelf3595 = NonNullable<FragmentResult3595>;

export type FragmentToken3595 =
  | FragmentSelf3595["__typename"]
  | FragmentSelf3595["typenameHint"] | FragmentToken3593 | FragmentToken3594;
