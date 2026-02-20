import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2354 } from "./fragment2354";
import type { FragmentToken2355 } from "./fragment2355";

export const FRAGMENT_2356 = gql(`
  fragment Fragment2356 on Member115 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_115
    memberCount_115
    memberMetric_115
  }
`);

type FragmentResult2356 = ResultOf<typeof FRAGMENT_2356>;
type FragmentSelf2356 = NonNullable<FragmentResult2356>;

export type FragmentToken2356 =
  | FragmentSelf2356["__typename"]
  | FragmentSelf2356["typenameHint"] | FragmentToken2354 | FragmentToken2355;
