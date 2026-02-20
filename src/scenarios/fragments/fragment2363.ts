import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2361 } from "./fragment2361";
import type { FragmentToken2362 } from "./fragment2362";

export const FRAGMENT_2363 = gql(`
  fragment Fragment2363 on Member122 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_122
    memberCount_122
    memberMetric_122
  }
`);

type FragmentResult2363 = ResultOf<typeof FRAGMENT_2363>;
type FragmentSelf2363 = NonNullable<FragmentResult2363>;

export type FragmentToken2363 =
  | FragmentSelf2363["__typename"]
  | FragmentSelf2363["typenameHint"] | FragmentToken2361 | FragmentToken2362;
