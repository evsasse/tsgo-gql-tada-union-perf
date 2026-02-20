import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3175 } from "./fragment3175";
import type { FragmentToken3176 } from "./fragment3176";

export const FRAGMENT_3177 = gql(`
  fragment Fragment3177 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult3177 = ResultOf<typeof FRAGMENT_3177>;
type FragmentSelf3177 = NonNullable<FragmentResult3177>;

export type FragmentToken3177 =
  | FragmentSelf3177["__typename"]
  | FragmentSelf3177["typenameHint"] | FragmentToken3175 | FragmentToken3176;
