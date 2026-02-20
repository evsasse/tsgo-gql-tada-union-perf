import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4290 } from "./fragment4290";
import type { FragmentToken4291 } from "./fragment4291";

export const FRAGMENT_4292 = gql(`
  fragment Fragment4292 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult4292 = ResultOf<typeof FRAGMENT_4292>;
type FragmentSelf4292 = NonNullable<FragmentResult4292>;

export type FragmentToken4292 =
  | FragmentSelf4292["__typename"]
  | FragmentSelf4292["typenameHint"] | FragmentToken4290 | FragmentToken4291;
