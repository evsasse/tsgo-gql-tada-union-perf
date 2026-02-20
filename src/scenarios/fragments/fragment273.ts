import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken271 } from "./fragment271";
import type { FragmentToken272 } from "./fragment272";

export const FRAGMENT_273 = gql(`
  fragment Fragment273 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult273 = ResultOf<typeof FRAGMENT_273>;
type FragmentSelf273 = NonNullable<FragmentResult273>;

export type FragmentToken273 =
  | FragmentSelf273["__typename"]
  | FragmentSelf273["typenameHint"] | FragmentToken271 | FragmentToken272;
