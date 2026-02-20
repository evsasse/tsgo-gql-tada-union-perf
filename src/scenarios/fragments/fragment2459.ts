import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2457 } from "./fragment2457";
import type { FragmentToken2458 } from "./fragment2458";

export const FRAGMENT_2459 = gql(`
  fragment Fragment2459 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult2459 = ResultOf<typeof FRAGMENT_2459>;
type FragmentSelf2459 = NonNullable<FragmentResult2459>;

export type FragmentToken2459 =
  | FragmentSelf2459["__typename"]
  | FragmentSelf2459["typenameHint"] | FragmentToken2457 | FragmentToken2458;
