import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken463 } from "./fragment463";
import type { FragmentToken464 } from "./fragment464";

export const FRAGMENT_465 = gql(`
  fragment Fragment465 on Member184 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_184
    memberCount_184
    memberMetric_184
  }
`);

type FragmentResult465 = ResultOf<typeof FRAGMENT_465>;
type FragmentSelf465 = NonNullable<FragmentResult465>;

export type FragmentToken465 =
  | FragmentSelf465["__typename"]
  | FragmentSelf465["typenameHint"] | FragmentToken463 | FragmentToken464;
