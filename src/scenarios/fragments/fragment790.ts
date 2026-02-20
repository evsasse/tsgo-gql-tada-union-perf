import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken788 } from "./fragment788";
import type { FragmentToken789 } from "./fragment789";

export const FRAGMENT_790 = gql(`
  fragment Fragment790 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult790 = ResultOf<typeof FRAGMENT_790>;
type FragmentSelf790 = NonNullable<FragmentResult790>;

export type FragmentToken790 =
  | FragmentSelf790["__typename"]
  | FragmentSelf790["typenameHint"] | FragmentToken788 | FragmentToken789;
