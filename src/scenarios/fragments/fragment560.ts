import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken558 } from "./fragment558";
import type { FragmentToken559 } from "./fragment559";

export const FRAGMENT_560 = gql(`
  fragment Fragment560 on Member279 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_279
    memberCount_279
    memberMetric_279
  }
`);

type FragmentResult560 = ResultOf<typeof FRAGMENT_560>;
type FragmentSelf560 = NonNullable<FragmentResult560>;

export type FragmentToken560 =
  | FragmentSelf560["__typename"]
  | FragmentSelf560["typenameHint"] | FragmentToken558 | FragmentToken559;
