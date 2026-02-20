import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken962 } from "./fragment962";
import type { FragmentToken963 } from "./fragment963";

export const FRAGMENT_964 = gql(`
  fragment Fragment964 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult964 = ResultOf<typeof FRAGMENT_964>;
type FragmentSelf964 = NonNullable<FragmentResult964>;

export type FragmentToken964 =
  | FragmentSelf964["__typename"]
  | FragmentSelf964["typenameHint"] | FragmentToken962 | FragmentToken963;
