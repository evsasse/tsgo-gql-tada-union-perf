import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2561 } from "./fragment2561";
import type { FragmentToken2562 } from "./fragment2562";

export const FRAGMENT_2563 = gql(`
  fragment Fragment2563 on Member42 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_42
    memberCount_42
    memberMetric_42
  }
`);

type FragmentResult2563 = ResultOf<typeof FRAGMENT_2563>;
type FragmentSelf2563 = NonNullable<FragmentResult2563>;

export type FragmentToken2563 =
  | FragmentSelf2563["__typename"]
  | FragmentSelf2563["typenameHint"] | FragmentToken2561 | FragmentToken2562;
