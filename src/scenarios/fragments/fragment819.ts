import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken817 } from "./fragment817";
import type { FragmentToken818 } from "./fragment818";

export const FRAGMENT_819 = gql(`
  fragment Fragment819 on Member258 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_258
    memberCount_258
    memberMetric_258
  }
`);

type FragmentResult819 = ResultOf<typeof FRAGMENT_819>;
type FragmentSelf819 = NonNullable<FragmentResult819>;

export type FragmentToken819 =
  | FragmentSelf819["__typename"]
  | FragmentSelf819["typenameHint"] | FragmentToken817 | FragmentToken818;
