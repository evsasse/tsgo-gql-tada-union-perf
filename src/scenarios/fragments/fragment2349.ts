import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2347 } from "./fragment2347";
import type { FragmentToken2348 } from "./fragment2348";

export const FRAGMENT_2349 = gql(`
  fragment Fragment2349 on Member108 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_108
    memberCount_108
    memberMetric_108
  }
`);

type FragmentResult2349 = ResultOf<typeof FRAGMENT_2349>;
type FragmentSelf2349 = NonNullable<FragmentResult2349>;

export type FragmentToken2349 =
  | FragmentSelf2349["__typename"]
  | FragmentSelf2349["typenameHint"] | FragmentToken2347 | FragmentToken2348;
