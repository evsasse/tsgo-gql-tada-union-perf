import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken732 } from "./fragment732";
import type { FragmentToken733 } from "./fragment733";

export const FRAGMENT_734 = gql(`
  fragment Fragment734 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult734 = ResultOf<typeof FRAGMENT_734>;
type FragmentSelf734 = NonNullable<FragmentResult734>;

export type FragmentToken734 =
  | FragmentSelf734["__typename"]
  | FragmentSelf734["typenameHint"] | FragmentToken732 | FragmentToken733;
