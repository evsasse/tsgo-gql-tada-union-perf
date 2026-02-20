import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken730 } from "./fragment730";
import type { FragmentToken731 } from "./fragment731";

export const FRAGMENT_732 = gql(`
  fragment Fragment732 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult732 = ResultOf<typeof FRAGMENT_732>;
type FragmentSelf732 = NonNullable<FragmentResult732>;

export type FragmentToken732 =
  | FragmentSelf732["__typename"]
  | FragmentSelf732["typenameHint"] | FragmentToken730 | FragmentToken731;
