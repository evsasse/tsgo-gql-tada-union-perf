import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken292 } from "./fragment292";
import type { FragmentToken293 } from "./fragment293";

export const FRAGMENT_294 = gql(`
  fragment Fragment294 on Member13 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_13
    memberCount_13
    memberMetric_13
  }
`);

type FragmentResult294 = ResultOf<typeof FRAGMENT_294>;
type FragmentSelf294 = NonNullable<FragmentResult294>;

export type FragmentToken294 =
  | FragmentSelf294["__typename"]
  | FragmentSelf294["typenameHint"] | FragmentToken292 | FragmentToken293;
