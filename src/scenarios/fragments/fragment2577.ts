import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2575 } from "./fragment2575";
import type { FragmentToken2576 } from "./fragment2576";

export const FRAGMENT_2577 = gql(`
  fragment Fragment2577 on Member56 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_56
    memberCount_56
    memberMetric_56
  }
`);

type FragmentResult2577 = ResultOf<typeof FRAGMENT_2577>;
type FragmentSelf2577 = NonNullable<FragmentResult2577>;

export type FragmentToken2577 =
  | FragmentSelf2577["__typename"]
  | FragmentSelf2577["typenameHint"] | FragmentToken2575 | FragmentToken2576;
