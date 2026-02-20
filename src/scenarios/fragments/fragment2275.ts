import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2273 } from "./fragment2273";
import type { FragmentToken2274 } from "./fragment2274";

export const FRAGMENT_2275 = gql(`
  fragment Fragment2275 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult2275 = ResultOf<typeof FRAGMENT_2275>;
type FragmentSelf2275 = NonNullable<FragmentResult2275>;

export type FragmentToken2275 =
  | FragmentSelf2275["__typename"]
  | FragmentSelf2275["typenameHint"] | FragmentToken2273 | FragmentToken2274;
