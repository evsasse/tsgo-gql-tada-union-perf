import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3107 } from "./fragment3107";
import type { FragmentToken3108 } from "./fragment3108";

export const FRAGMENT_3109 = gql(`
  fragment Fragment3109 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult3109 = ResultOf<typeof FRAGMENT_3109>;
type FragmentSelf3109 = NonNullable<FragmentResult3109>;

export type FragmentToken3109 =
  | FragmentSelf3109["__typename"]
  | FragmentSelf3109["typenameHint"] | FragmentToken3107 | FragmentToken3108;
