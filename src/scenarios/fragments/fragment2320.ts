import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2318 } from "./fragment2318";
import type { FragmentToken2319 } from "./fragment2319";

export const FRAGMENT_2320 = gql(`
  fragment Fragment2320 on Member79 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_79
    memberCount_79
    memberMetric_79
  }
`);

type FragmentResult2320 = ResultOf<typeof FRAGMENT_2320>;
type FragmentSelf2320 = NonNullable<FragmentResult2320>;

export type FragmentToken2320 =
  | FragmentSelf2320["__typename"]
  | FragmentSelf2320["typenameHint"] | FragmentToken2318 | FragmentToken2319;
