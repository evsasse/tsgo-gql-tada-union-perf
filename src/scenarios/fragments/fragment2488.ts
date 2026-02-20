import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2486 } from "./fragment2486";
import type { FragmentToken2487 } from "./fragment2487";

export const FRAGMENT_2488 = gql(`
  fragment Fragment2488 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult2488 = ResultOf<typeof FRAGMENT_2488>;
type FragmentSelf2488 = NonNullable<FragmentResult2488>;

export type FragmentToken2488 =
  | FragmentSelf2488["__typename"]
  | FragmentSelf2488["typenameHint"] | FragmentToken2486 | FragmentToken2487;
