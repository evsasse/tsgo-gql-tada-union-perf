import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3457 } from "./fragment3457";
import type { FragmentToken3458 } from "./fragment3458";

export const FRAGMENT_3459 = gql(`
  fragment Fragment3459 on Member98 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_98
    memberCount_98
    memberMetric_98
  }
`);

type FragmentResult3459 = ResultOf<typeof FRAGMENT_3459>;
type FragmentSelf3459 = NonNullable<FragmentResult3459>;

export type FragmentToken3459 =
  | FragmentSelf3459["__typename"]
  | FragmentSelf3459["typenameHint"] | FragmentToken3457 | FragmentToken3458;
