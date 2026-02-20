import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2304 } from "./fragment2304";
import type { FragmentToken2305 } from "./fragment2305";

export const FRAGMENT_2306 = gql(`
  fragment Fragment2306 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult2306 = ResultOf<typeof FRAGMENT_2306>;
type FragmentSelf2306 = NonNullable<FragmentResult2306>;

export type FragmentToken2306 =
  | FragmentSelf2306["__typename"]
  | FragmentSelf2306["typenameHint"] | FragmentToken2304 | FragmentToken2305;
