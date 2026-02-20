import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2548 } from "./fragment2548";
import type { FragmentToken2549 } from "./fragment2549";

export const FRAGMENT_2550 = gql(`
  fragment Fragment2550 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult2550 = ResultOf<typeof FRAGMENT_2550>;
type FragmentSelf2550 = NonNullable<FragmentResult2550>;

export type FragmentToken2550 =
  | FragmentSelf2550["__typename"]
  | FragmentSelf2550["typenameHint"] | FragmentToken2548 | FragmentToken2549;
