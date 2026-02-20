import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3105 } from "./fragment3105";
import type { FragmentToken3106 } from "./fragment3106";

export const FRAGMENT_3107 = gql(`
  fragment Fragment3107 on Member26 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_26
    memberCount_26
    memberMetric_26
  }
`);

type FragmentResult3107 = ResultOf<typeof FRAGMENT_3107>;
type FragmentSelf3107 = NonNullable<FragmentResult3107>;

export type FragmentToken3107 =
  | FragmentSelf3107["__typename"]
  | FragmentSelf3107["typenameHint"] | FragmentToken3105 | FragmentToken3106;
