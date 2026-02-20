import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2439 } from "./fragment2439";
import type { FragmentToken2440 } from "./fragment2440";

export const FRAGMENT_2441 = gql(`
  fragment Fragment2441 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult2441 = ResultOf<typeof FRAGMENT_2441>;
type FragmentSelf2441 = NonNullable<FragmentResult2441>;

export type FragmentToken2441 =
  | FragmentSelf2441["__typename"]
  | FragmentSelf2441["typenameHint"] | FragmentToken2439 | FragmentToken2440;
