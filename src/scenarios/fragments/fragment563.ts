import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken561 } from "./fragment561";
import type { FragmentToken562 } from "./fragment562";

export const FRAGMENT_563 = gql(`
  fragment Fragment563 on Member02 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_02
    memberCount_02
    memberMetric_02
  }
`);

type FragmentResult563 = ResultOf<typeof FRAGMENT_563>;
type FragmentSelf563 = NonNullable<FragmentResult563>;

export type FragmentToken563 =
  | FragmentSelf563["__typename"]
  | FragmentSelf563["typenameHint"] | FragmentToken561 | FragmentToken562;
