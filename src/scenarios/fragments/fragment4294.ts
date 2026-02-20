import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4292 } from "./fragment4292";
import type { FragmentToken4293 } from "./fragment4293";

export const FRAGMENT_4294 = gql(`
  fragment Fragment4294 on Member93 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_93
    memberCount_93
    memberMetric_93
  }
`);

type FragmentResult4294 = ResultOf<typeof FRAGMENT_4294>;
type FragmentSelf4294 = NonNullable<FragmentResult4294>;

export type FragmentToken4294 =
  | FragmentSelf4294["__typename"]
  | FragmentSelf4294["typenameHint"] | FragmentToken4292 | FragmentToken4293;
