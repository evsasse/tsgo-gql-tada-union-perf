import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3897 } from "./fragment3897";
import type { FragmentToken3898 } from "./fragment3898";

export const FRAGMENT_3899 = gql(`
  fragment Fragment3899 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult3899 = ResultOf<typeof FRAGMENT_3899>;
type FragmentSelf3899 = NonNullable<FragmentResult3899>;

export type FragmentToken3899 =
  | FragmentSelf3899["__typename"]
  | FragmentSelf3899["typenameHint"] | FragmentToken3897 | FragmentToken3898;
