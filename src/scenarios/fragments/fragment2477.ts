import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2475 } from "./fragment2475";
import type { FragmentToken2476 } from "./fragment2476";

export const FRAGMENT_2477 = gql(`
  fragment Fragment2477 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult2477 = ResultOf<typeof FRAGMENT_2477>;
type FragmentSelf2477 = NonNullable<FragmentResult2477>;

export type FragmentToken2477 =
  | FragmentSelf2477["__typename"]
  | FragmentSelf2477["typenameHint"] | FragmentToken2475 | FragmentToken2476;
