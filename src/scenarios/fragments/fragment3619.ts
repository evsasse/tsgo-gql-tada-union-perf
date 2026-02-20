import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3617 } from "./fragment3617";
import type { FragmentToken3618 } from "./fragment3618";

export const FRAGMENT_3619 = gql(`
  fragment Fragment3619 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult3619 = ResultOf<typeof FRAGMENT_3619>;
type FragmentSelf3619 = NonNullable<FragmentResult3619>;

export type FragmentToken3619 =
  | FragmentSelf3619["__typename"]
  | FragmentSelf3619["typenameHint"] | FragmentToken3617 | FragmentToken3618;
