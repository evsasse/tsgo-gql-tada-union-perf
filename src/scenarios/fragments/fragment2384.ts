import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2382 } from "./fragment2382";
import type { FragmentToken2383 } from "./fragment2383";

export const FRAGMENT_2384 = gql(`
  fragment Fragment2384 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult2384 = ResultOf<typeof FRAGMENT_2384>;
type FragmentSelf2384 = NonNullable<FragmentResult2384>;

export type FragmentToken2384 =
  | FragmentSelf2384["__typename"]
  | FragmentSelf2384["typenameHint"] | FragmentToken2382 | FragmentToken2383;
