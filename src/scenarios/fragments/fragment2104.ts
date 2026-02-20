import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2102 } from "./fragment2102";
import type { FragmentToken2103 } from "./fragment2103";

export const FRAGMENT_2104 = gql(`
  fragment Fragment2104 on Member143 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_143
    memberCount_143
    memberMetric_143
  }
`);

type FragmentResult2104 = ResultOf<typeof FRAGMENT_2104>;
type FragmentSelf2104 = NonNullable<FragmentResult2104>;

export type FragmentToken2104 =
  | FragmentSelf2104["__typename"]
  | FragmentSelf2104["typenameHint"] | FragmentToken2102 | FragmentToken2103;
