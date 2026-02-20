import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2348 } from "./fragment2348";
import type { FragmentToken2349 } from "./fragment2349";

export const FRAGMENT_2350 = gql(`
  fragment Fragment2350 on Member109 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_109
    memberCount_109
    memberMetric_109
  }
`);

type FragmentResult2350 = ResultOf<typeof FRAGMENT_2350>;
type FragmentSelf2350 = NonNullable<FragmentResult2350>;

export type FragmentToken2350 =
  | FragmentSelf2350["__typename"]
  | FragmentSelf2350["typenameHint"] | FragmentToken2348 | FragmentToken2349;
