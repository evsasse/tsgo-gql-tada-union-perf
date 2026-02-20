import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3564 } from "./fragment3564";
import type { FragmentToken3565 } from "./fragment3565";

export const FRAGMENT_3566 = gql(`
  fragment Fragment3566 on Member205 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_205
    memberCount_205
    memberMetric_205
  }
`);

type FragmentResult3566 = ResultOf<typeof FRAGMENT_3566>;
type FragmentSelf3566 = NonNullable<FragmentResult3566>;

export type FragmentToken3566 =
  | FragmentSelf3566["__typename"]
  | FragmentSelf3566["typenameHint"] | FragmentToken3564 | FragmentToken3565;
