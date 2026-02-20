import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2485 } from "./fragment2485";
import type { FragmentToken2486 } from "./fragment2486";

export const FRAGMENT_2487 = gql(`
  fragment Fragment2487 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult2487 = ResultOf<typeof FRAGMENT_2487>;
type FragmentSelf2487 = NonNullable<FragmentResult2487>;

export type FragmentToken2487 =
  | FragmentSelf2487["__typename"]
  | FragmentSelf2487["typenameHint"] | FragmentToken2485 | FragmentToken2486;
