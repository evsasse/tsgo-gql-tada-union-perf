import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken963 } from "./fragment963";
import type { FragmentToken964 } from "./fragment964";

export const FRAGMENT_965 = gql(`
  fragment Fragment965 on Member124 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_124
    memberCount_124
    memberMetric_124
  }
`);

type FragmentResult965 = ResultOf<typeof FRAGMENT_965>;
type FragmentSelf965 = NonNullable<FragmentResult965>;

export type FragmentToken965 =
  | FragmentSelf965["__typename"]
  | FragmentSelf965["typenameHint"] | FragmentToken963 | FragmentToken964;
