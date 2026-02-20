import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2244 } from "./fragment2244";
import type { FragmentToken2245 } from "./fragment2245";

export const FRAGMENT_2246 = gql(`
  fragment Fragment2246 on Member05 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_05
    memberCount_05
    memberMetric_05
  }
`);

type FragmentResult2246 = ResultOf<typeof FRAGMENT_2246>;
type FragmentSelf2246 = NonNullable<FragmentResult2246>;

export type FragmentToken2246 =
  | FragmentSelf2246["__typename"]
  | FragmentSelf2246["typenameHint"] | FragmentToken2244 | FragmentToken2245;
