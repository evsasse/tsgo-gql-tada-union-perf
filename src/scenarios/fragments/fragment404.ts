import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken402 } from "./fragment402";
import type { FragmentToken403 } from "./fragment403";

export const FRAGMENT_404 = gql(`
  fragment Fragment404 on Member123 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_123
    memberCount_123
    memberMetric_123
  }
`);

type FragmentResult404 = ResultOf<typeof FRAGMENT_404>;
type FragmentSelf404 = NonNullable<FragmentResult404>;

export type FragmentToken404 =
  | FragmentSelf404["__typename"]
  | FragmentSelf404["typenameHint"] | FragmentToken402 | FragmentToken403;
