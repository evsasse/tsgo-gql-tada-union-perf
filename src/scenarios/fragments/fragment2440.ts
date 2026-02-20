import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2438 } from "./fragment2438";
import type { FragmentToken2439 } from "./fragment2439";

export const FRAGMENT_2440 = gql(`
  fragment Fragment2440 on Member199 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_199
    memberCount_199
    memberMetric_199
  }
`);

type FragmentResult2440 = ResultOf<typeof FRAGMENT_2440>;
type FragmentSelf2440 = NonNullable<FragmentResult2440>;

export type FragmentToken2440 =
  | FragmentSelf2440["__typename"]
  | FragmentSelf2440["typenameHint"] | FragmentToken2438 | FragmentToken2439;
