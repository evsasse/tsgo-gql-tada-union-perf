import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3455 } from "./fragment3455";
import type { FragmentToken3456 } from "./fragment3456";

export const FRAGMENT_3457 = gql(`
  fragment Fragment3457 on Member96 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_96
    memberCount_96
    memberMetric_96
  }
`);

type FragmentResult3457 = ResultOf<typeof FRAGMENT_3457>;
type FragmentSelf3457 = NonNullable<FragmentResult3457>;

export type FragmentToken3457 =
  | FragmentSelf3457["__typename"]
  | FragmentSelf3457["typenameHint"] | FragmentToken3455 | FragmentToken3456;
