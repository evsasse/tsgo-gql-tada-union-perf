import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2072 } from "./fragment2072";
import type { FragmentToken2073 } from "./fragment2073";

export const FRAGMENT_2074 = gql(`
  fragment Fragment2074 on Member113 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_113
    memberCount_113
    memberMetric_113
  }
`);

type FragmentResult2074 = ResultOf<typeof FRAGMENT_2074>;
type FragmentSelf2074 = NonNullable<FragmentResult2074>;

export type FragmentToken2074 =
  | FragmentSelf2074["__typename"]
  | FragmentSelf2074["typenameHint"] | FragmentToken2072 | FragmentToken2073;
