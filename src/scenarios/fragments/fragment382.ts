import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken380 } from "./fragment380";
import type { FragmentToken381 } from "./fragment381";

export const FRAGMENT_382 = gql(`
  fragment Fragment382 on Member101 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_101
    memberCount_101
    memberMetric_101
  }
`);

type FragmentResult382 = ResultOf<typeof FRAGMENT_382>;
type FragmentSelf382 = NonNullable<FragmentResult382>;

export type FragmentToken382 =
  | FragmentSelf382["__typename"]
  | FragmentSelf382["typenameHint"] | FragmentToken380 | FragmentToken381;
